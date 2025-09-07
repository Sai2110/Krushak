import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { ArrowLeft, Play } from 'lucide-react'

export default function DemoPage() {
  const { t } = useTranslation()

  const demoData = {
    input: {
      temperature: 28,
      humidity: 65,
      moisture: 45,
      soilType: 'Loamy',
      cropType: 'Wheat',
      nitrogen: 25,
      potassium: 30,
      phosphorus: 20
    },
    predictions: {
      'Random Forest': { prediction: 'NPK 20-20-20', confidence: 0.92 },
      'Decision Tree': { prediction: 'NPK 20-20-20', confidence: 0.87 },
      'Logistic Regression': { prediction: 'NPK 20-20-20', confidence: 0.84 }
    },
    soilHealth: {
      healthScore: 78,
      status: 'Good',
      insights: [
        'Soil nitrogen levels are adequate',
        'Soil potassium levels are adequate', 
        'Soil phosphorus levels are adequate',
        'Temperature is optimal for crop growth',
        'Humidity levels are suitable',
        'Soil moisture levels are adequate'
      ],
      recommendations: [
        'Continue current fertilization practices',
        'Monitor soil moisture during dry periods',
        'Consider organic matter addition for long-term soil health'
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
{t('backToHome')}
          </Button>
          <h1 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-2">{t('krushakDemo')}</h1>
          <p className="text-base sm:text-lg text-gray-600">{t('seeHowWorks')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Input Data */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg">{t('sampleInputData')}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">{t('temperature')}</label>
                    <p className="text-lg font-semibold">{demoData.input.temperature}°C</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">{t('humidity')}</label>
                    <p className="text-lg font-semibold">{demoData.input.humidity}%</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">{t('moisture')}</label>
                    <p className="text-lg font-semibold">{demoData.input.moisture}%</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">{t('soilType')}</label>
                    <p className="text-lg font-semibold">{demoData.input.soilType}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">{t('cropType')}</label>
                    <p className="text-lg font-semibold">{demoData.input.cropType}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">{t('nitrogen')}</label>
                    <p className="text-lg font-semibold">{demoData.input.nitrogen} ppm</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">{t('potassium')}</label>
                    <p className="text-lg font-semibold">{demoData.input.potassium} ppm</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">{t('phosphorus')}</label>
                    <p className="text-lg font-semibold">{demoData.input.phosphorus} ppm</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Predictions */}
          <Card>
            <CardHeader>
              <CardTitle>{t('mlModelPredictions')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(demoData.predictions).map(([model, result]) => (
                  <div key={model} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{model}</h4>
                      <span className="text-sm text-gray-600">
                        {(result.confidence * 100).toFixed(0)}% {t('confidence')}
                      </span>
                    </div>
                    <p className="text-lg font-bold text-primary">{result.prediction}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soil Health */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>{t('soilHealthAnalysis')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {demoData.soilHealth.healthScore}/100
                  </div>
                  <p className="text-sm text-gray-600">{t('healthScore')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {demoData.soilHealth.status}
                  </div>
                  <p className="text-sm text-gray-600">{t('overallStatus')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {demoData.soilHealth.insights.length}
                  </div>
                  <p className="text-sm text-gray-600">{t('keyInsights')}</p>
                </div>
              </div>
              
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">{t('insights')}</h4>
                  <ul className="space-y-2">
                    {demoData.soilHealth.insights.map((insight, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">{t('recommendations')}</h4>
                  <ul className="space-y-2">
                    {demoData.soilHealth.recommendations.map((rec, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Card className="bg-gradient-to-r from-primary to-green-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">{t('readyToTry')}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t('enterOwnData')}
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => window.location.href = '/'}
              >
                <Play className="h-5 w-5 mr-2" />
                {t('startPredictingNow')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
