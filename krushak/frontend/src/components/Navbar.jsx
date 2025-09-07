import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Leaf, User, LogOut, Menu, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import { Button } from './ui/button'
import { Avatar, AvatarFallback } from './ui/avatar'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout, loading } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
    setIsMobileMenuOpen(false)
  }

  const link = (path, label, onClick) => (
    <Link
      to={path}
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        location.pathname === path 
          ? 'bg-green-600 text-white' 
          : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
      }`}
    >
      {label}
    </Link>
  )

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  if (loading) {
    return (
      <nav className="bg-white/95 backdrop-blur border-b border-green-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold text-green-700">
            <Leaf className="h-6 w-6" />
            Krushak
          </div>
          <div className="animate-pulse bg-gray-200 h-8 w-24 rounded"></div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="bg-white/95 backdrop-blur border-b border-green-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to={user ? "/" : "/login"}
            className="flex items-center gap-2 text-xl font-bold text-green-700 hover:text-green-800 transition-colors"
          >
            <Leaf className="h-6 w-6" />
            Krushak
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {user && (
              <div className="flex items-center space-x-4">
                {link('/', t('home'))}
                {link('/prediction', t('prediction'))}
                {link('/health', t('cropHealth'))}
                {link('/dashboard', t('dashboard'))}
              </div>
            )}
            
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-green-500 text-white text-sm font-semibold">
                        {user.name?.charAt(0)?.toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-gray-700 hidden lg:block">
                      {user.name}
                    </span>
                  </div>
                  <Button 
                    onClick={handleLogout} 
                    variant="outline"
                    size="sm"
                    className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400"
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    {t('logout')}
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  {link('/login', t('login'))}
                  {link('/signup', t('signUp'))}
                </div>
              )}
              
              {/* Language Selector */}
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500 hidden lg:block">{t('language')}</span>
                <select 
                  value={i18n.language} 
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="en">EN</option>
                  <option value="hi">हिन्दी</option>
                  <option value="mr">मराठी</option>
                  <option value="te">తెలుగు</option>
                </select>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              {user ? (
                <>
                  <div className="flex items-center space-x-3 px-3 py-2 bg-green-50 rounded-lg">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-green-500 text-white text-sm font-semibold">
                        {user.name?.charAt(0)?.toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-gray-700">{user.name}</span>
                  </div>
                  {link('/', t('home'), () => setIsMobileMenuOpen(false))}
                  {link('/prediction', t('prediction'), () => setIsMobileMenuOpen(false))}
                  {link('/health', t('cropHealth'), () => setIsMobileMenuOpen(false))}
                  {link('/dashboard', t('dashboard'), () => setIsMobileMenuOpen(false))}
                  <Button 
                    onClick={handleLogout} 
                    variant="outline"
                    className="mt-2 border-red-300 text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    {t('logout')}
                  </Button>
                </>
              ) : (
                <>
                  {link('/login', t('login'), () => setIsMobileMenuOpen(false))}
                  {link('/signup', t('signUp'), () => setIsMobileMenuOpen(false))}
                </>
              )}
              
              {/* Mobile Language Selector */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-gray-600">{t('language')}</span>
                <select 
                  value={i18n.language} 
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded text-sm bg-white"
                >
                  <option value="en">English</option>
                  <option value="hi">हिन्दी</option>
                  <option value="mr">मराठी</option>
                  <option value="te">తెలుగు</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


