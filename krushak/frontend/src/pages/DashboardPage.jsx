import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

// Enhanced date formatting function
const formatDate = (date) => {
    if (!date) return 'N/A';
    
    // Parse the date string and handle timezone properly
    const d = new Date(date);
    
    // Check if the date is valid
    if (isNaN(d.getTime())) {
        console.warn('Invalid date received:', date);
        return 'Invalid Date';
    }
    
    // The backend now sends proper IST time with +05:30 offset
    // JavaScript Date will correctly parse and display it
    return d.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit',
        hour12: true // Use 24-hour format
    }) ;
};

const DashboardPage = () => {
    const { t } = useTranslation();
    const { user, token, logout, loading: authLoading } = useAuth();
    const navigate = useNavigate();
    const [predictions, setPredictions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState({
        totalPredictions: 0,
        mostUsedFertilizer: null,
        averageSoilHealth: 0
    });

    const fetchPredictions = async () => {
        try {
            setLoading(true);
            setError(null);
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/predictions`, {
                headers: { 'Authorization': `Bearer ${token}` },
            });
            const data = await response.json();

            if (response.ok) {
                const predictions = data.predictions || [];
                
                setPredictions(predictions);
                calculateStats(predictions);
            } else {
                setError(data.message || t('failedToFetch'));
                if (response.status === 401) {
                    logout();
                }
            }
        } catch (err) {
            console.error('Fetch predictions error:', err);
            setError(t('networkError'));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (authLoading) return;
        
        if (!user || !token) {
            navigate('/login');
            return;
        }

        fetchPredictions();
    }, [user, token, navigate, logout, authLoading]);

    // Refresh predictions when component becomes visible or window gains focus
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (!document.hidden && user && token) {
                fetchPredictions();
            }
        };

        const handleFocus = () => {
            if (user && token) {
                fetchPredictions();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('focus', handleFocus);
        
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('focus', handleFocus);
        };
    }, [user, token]);

    const calculateStats = (predictions) => {
        const totalPredictions = predictions.length;
        
        // Calculate most used fertilizer
        const fertilizerCounts = {};
        let totalSoilHealth = 0;
        let validSoilHealthCount = 0;

        predictions.forEach((pred) => {
            const fertilizer = pred.results?.RandomForestClassifier?.prediction;
            if (fertilizer) {
                fertilizerCounts[fertilizer] = (fertilizerCounts[fertilizer] || 0) + 1;
            }
            
            // Try different possible soil health score locations
            let soilHealth = pred.soil_health?.health_score || 
                           pred.soil_health?.score || 
                           pred.soil_health?.overall_score || 
                           pred.soil_health?.total_score;
            
            if (soilHealth && !isNaN(soilHealth)) {
                totalSoilHealth += parseFloat(soilHealth);
                validSoilHealthCount++;
            }
        });

        const mostUsedFertilizer = Object.keys(fertilizerCounts).reduce((a, b) => 
            fertilizerCounts[a] > fertilizerCounts[b] ? a : b, null
        );

        setStats({
            totalPredictions,
            mostUsedFertilizer,
            averageSoilHealth: validSoilHealthCount > 0 ? (totalSoilHealth / validSoilHealthCount).toFixed(1) : 0
        });
    };

    if (authLoading || loading) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">{t('loadingDashboard')}</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
                <Card className="w-96 text-center">
                    <CardContent className="pt-6">
                        <div className="text-red-500 text-6xl mb-4">⚠️</div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('errorLoadingDashboard')}</h3>
                        <p className="text-gray-600 mb-4">{error}</p>
                        <Button onClick={() => window.location.reload()} className="bg-green-600 hover:bg-green-700">
                            {t('tryAgain')}
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 sm:p-6 pt-6 sm:pt-10 max-w-7xl">
            {/* Welcome Section */}
            <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-2">
                    {t('welcomeBackUser', { name: user?.name })}
                </h1>
                <p className="text-base sm:text-lg text-gray-600">
                    {t('personalizedDashboard')}
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                    <CardContent className="pt-6">
                        <div className="text-3xl font-bold">{stats.totalPredictions}</div>
                        <p className="text-green-100">{t('totalPredictions')}</p>
                    </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <CardContent className="pt-6">
                        <div className="text-3xl font-bold">{stats.averageSoilHealth}</div>
                        <p className="text-blue-100">{t('avgSoilHealth')}</p>
                    </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                    <CardContent className="pt-6">
                        <div className="text-lg font-bold truncate">{stats.mostUsedFertilizer || 'N/A'}</div>
                        <p className="text-purple-100">{t('mostUsedFertilizer')}</p>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions */}
            <Card className="mb-6 sm:mb-8 bg-gradient-to-r from-green-50 to-blue-50">
                <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                    <div className="text-center">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">{t('quickActions')}</h3>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                            <Link to="/prediction" className="w-full sm:w-auto">
                                <Button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto text-sm sm:text-base">
                                    🌱 {t('makeNewPrediction')}
                                </Button>
                            </Link>
                            <Link to="/prediction" className="w-full sm:w-auto">
                                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto text-sm sm:text-base">
                                    📊 {t('analyzeSoilHealth')}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Predictions History */}
            <Card className="shadow-lg">
                <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                        <CardTitle className="text-lg sm:text-xl lg:text-2xl font-semibold text-green-700 flex items-center">
                            📈 {t('predictionHistory')}
                        </CardTitle>
                        <Button 
                            onClick={fetchPredictions}
                            variant="outline"
                            size="sm"
                            className="border-green-600 text-green-600 hover:bg-green-50 text-xs sm:text-sm"
                        >
                            🔄 {t('refresh')}
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    
                    {predictions.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🌱</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('noPredictionsYet')}</h3>
                            <p className="text-gray-600 mb-6">{t('startFarmingJourney')}</p>
                            <Link to="/prediction">
                                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                                    {t('makeFirstPrediction')}
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {predictions.map((prediction, index) => (
                                <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 border-green-200 hover:border-green-300">
                                    <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 rounded-t-lg">
                                        <CardTitle className="text-lg font-bold text-green-800">
                                            {formatDate(prediction.timestamp)}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-4 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-600">{t('soilHealthAnalysis')}:</span>
                                            <Badge variant="secondary" className="bg-green-200 text-green-800">
                                                {prediction.soil_health?.health_score || 
                                                 prediction.soil_health?.score || 
                                                 prediction.soil_health?.overall_score || 
                                                 prediction.soil_health?.total_score || 'N/A'}
                                            </Badge>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-600">{t('fertilizerPrediction')}:</span>
                                            <Badge className="bg-green-500 text-white">
                                                {prediction.results?.RandomForestClassifier?.prediction || 'N/A'}
                                            </Badge>
                                        </div>
                                        
                                        {prediction.weather_data && (
                                            <div className="pt-2 border-t border-gray-200">
                                                <p className="text-sm text-gray-600">
                                                    <span className="font-medium">{t('currentWeather')}:</span> {prediction.weather_data.description || 'N/A'}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    <span className="font-medium">{t('temperature')}:</span> {prediction.weather_data.temperature}°C
                                                </p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default DashboardPage;
