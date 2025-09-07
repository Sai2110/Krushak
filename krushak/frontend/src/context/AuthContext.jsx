import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initializeAuth = async () => {
            const storedToken = localStorage.getItem('token');
            const storedUser = localStorage.getItem('user');
            
            if (storedToken && storedUser) {
                try {
                    // Verify token is still valid by fetching user details
                    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                    const response = await fetch(`${apiUrl}/api/auth/me`, {
                        headers: { 'Authorization': `Bearer ${storedToken}` },
                    });
                    
                    if (response.ok) {
                        const userData = await response.json();
                        setToken(storedToken);
                        setUser(userData);
                    } else {
                        // Token is invalid, clear storage
                        localStorage.removeItem('token');
                        localStorage.removeItem('user');
                    }
                } catch (error) {
                    console.error('Token validation failed:', error);
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                }
            }
            setLoading(false);
        };

        initializeAuth();
    }, []);

    const login = async (email, password) => {
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                setToken(data.token);
                setUser(data.user);
                localStorage.setItem('user', JSON.stringify(data.user));
                return { success: true };
            } else {
                return { success: false, error: data.message || 'Login failed' };
            }
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: 'Network error or server unavailable' };
        } finally {
            setLoading(false);
        }
    };

    const signup = async (name, email, password) => {
        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await response.json();

            if (response.ok) {
                return { success: true, user: data.user };
            } else {
                return { success: false, error: data.message || 'Signup failed' };
            }
        } catch (error) {
            console.error('Signup error:', error);
            return { success: false, error: 'Network error or server unavailable' };
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
    };

    const isAuthenticated = () => {
        return !!(token && user);
    };

    const value = { 
        user, 
        token, 
        loading,
        login, 
        signup, 
        logout, 
        isAuthenticated 
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
