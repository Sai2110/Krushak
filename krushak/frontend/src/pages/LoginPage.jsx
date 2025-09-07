import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';

const LoginPage = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);
        
        try {
            const result = await login(email, password);
            if (result.success) {
                navigate('/');
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError(t('unexpectedError'));
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-gradient-to-br from-green-50 to-blue-50">
            <Card className="w-[400px] shadow-xl border-0">
                <CardHeader className="text-center pb-2">
                    <CardTitle className="text-3xl font-bold text-green-700 mb-2">
                        {t('welcomeBack')}
                    </CardTitle>
                    <p className="text-gray-600">{t('signInAccount')}</p>
                </CardHeader>
                <CardContent className="pt-4">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                {t('emailAddress')}
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder={t('enterEmail')}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="border-green-300 focus:border-green-500 focus:ring-green-500 h-11"
                                disabled={isLoading}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                {t('password')}
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder={t('enterPassword')}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border-green-300 focus:border-green-500 focus:ring-green-500 h-11"
                                disabled={isLoading}
                            />
                        </div>
                        
                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-md p-3">
                                <p className="text-red-600 text-sm">{error}</p>
                            </div>
                        )}
                        
                        <Button 
                            type="submit" 
                            className="w-full bg-green-600 hover:bg-green-700 text-white h-11 font-medium"
                            disabled={isLoading}
                        >
                            {isLoading ? t('signingIn') : t('signIn')}
                        </Button>
                        
                        {/* Test Credentials */}
                        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                            <h4 className="text-sm font-semibold text-blue-800 mb-2">🧪 {t('testCredentials')}</h4>
                            <div className="text-xs text-blue-700 space-y-1">
                                <p><strong>Email:</strong> Test@gmail.com</p>
                                <p><strong>Password:</strong> 123456</p>
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                {t('dontHaveAccount')}{' '}
                                <Link 
                                    to="/signup" 
                                    className="text-green-600 hover:text-green-700 font-medium"
                                >
                                    {t('signUpHere')}
                                </Link>
                            </p>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoginPage;
