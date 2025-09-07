import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import PredictionPage from "./pages/PredictionPage.jsx";
import CropHealthPage from "./pages/CropHealthPage.jsx";
import DemoPage from "./pages/DemoPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { user, token, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  return user && token ? children : <Navigate to="/login" />;
}

function AppRoutes() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
            <Route path="/health" element={<PrivateRoute><CropHealthPage /></PrivateRoute>} />
            <Route path="/demo" element={<PrivateRoute><DemoPage /></PrivateRoute>} />
            <Route path="/about" element={<PrivateRoute><AboutPage /></PrivateRoute>} />
            <Route 
              path="/dashboard" 
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            <Route 
              path="/prediction" 
              element={
                <PrivateRoute>
                  <PredictionPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
