import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import WeatherWidget from '../components/WeatherWidget'
import CropHealthInsights from '../components/CropHealthInsights'
import HowItWorks from '../components/HowItWorks'
import DataModels from '../components/DataModels'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import FutureVision from '../components/FutureVision'
import EnhancedCTA from '../components/EnhancedCTA'
import { ArrowRight, CheckCircle, Zap, Database } from 'lucide-react'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="text-center py-8 sm:py-12 bg-gradient-to-br from-primary/5 to-green-100/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4 sm:mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link to="/prediction" className="w-full sm:w-auto">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto"
              >
                {t('startPredicting')}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto"
              >
                {t('learnMore')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Weather Widget */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-1">
              <WeatherWidget />
            </div>
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardContent className="p-4 sm:p-6 lg:p-8 flex items-center justify-center">
                  <div className="text-center w-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-dark mb-3 sm:mb-4">
                      {t('realTimeIntelligence')}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {t('realTimeIntelligenceDesc')}
                    </p>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-primary">5+</div>
                        <div className="text-xs sm:text-sm text-gray-600">{t('mlModels')}</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-primary">92%</div>
                        <div className="text-xs sm:text-sm text-gray-600">{t('accuracy')}</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-primary">10K+</div>
                        <div className="text-xs sm:text-sm text-gray-600">{t('dataPoints')}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Crop Health Insights */}
      <CropHealthInsights />

      {/* Why Krushak Section - Enhanced */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-3 sm:mb-4">{t('whyKrushak')}</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('discoverWhy')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('accurateRecommendations')}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t('accurateDesc')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('easyToUse')}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t('easyDesc')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Database className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{t('basedOnData')}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t('dataDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <div data-section="how-it-works">
        <HowItWorks />
      </div>

      {/* Data & Models */}
      <DataModels />

      {/* Enhanced Testimonials */}
      <TestimonialsCarousel />

      {/* Future Vision */}
      <FutureVision />

      {/* Enhanced Call to Action */}
      <EnhancedCTA />
    </div>
  )
}


