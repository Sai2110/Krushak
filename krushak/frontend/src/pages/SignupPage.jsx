import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';

const SignupPage = () => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    const validateForm = () => {
        if (!name.trim()) {
            setError(t('nameRequired'));
            return false;
        }
        if (!email.trim()) {
            setError(t('emailRequired'));
            return false;
        }
        if (password.length < 6) {
            setError(t('passwordMinLength'));
            return false;
        }
        if (password !== confirmPassword) {
            setError(t('passwordsDoNotMatch'));
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        
        if (!validateForm()) {
            return;
        }
        
        setIsLoading(true);
        
        try {
            const result = await signup(name, email, password);
            if (result.success) {
                navigate('/login', { 
                    state: { 
                        message: 'Account created successfully! Please sign in.' 
                    } 
                });
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
                        {t('joinKrushak')}
                    </CardTitle>
                    <p className="text-gray-600">{t('createAccount')}</p>
                </CardHeader>
                <CardContent className="pt-4">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                                {t('fullName')}
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder={t('enterFullName')}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="border-green-300 focus:border-green-500 focus:ring-green-500 h-11"
                                disabled={isLoading}
                            />
                        </div>
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
                                placeholder={t('createPassword')}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border-green-300 focus:border-green-500 focus:ring-green-500 h-11"
                                disabled={isLoading}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                                {t('confirmPassword')}
                            </Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder={t('confirmYourPassword')}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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
                            {isLoading ? t('creatingAccount') : t('createAccountBtn')}
                        </Button>
                        
                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                {t('alreadyHaveAccount')}{' '}
                                <Link 
                                    to="/login" 
                                    className="text-green-600 hover:text-green-700 font-medium"
                                >
                                    {t('signInHere')}
                                </Link>
                            </p>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default SignupPage;
