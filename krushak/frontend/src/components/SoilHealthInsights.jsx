import React from 'react'
import { useTranslation } from 'react-i18next'

export default function SoilHealthInsights({ soilHealth }) {
  const { t } = useTranslation()

  if (!soilHealth) return null

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'excellent': return 'text-green-600 bg-green-100'
      case 'good': return 'text-blue-600 bg-blue-100'
      case 'fair': return 'text-yellow-600 bg-yellow-100'
      case 'poor': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="mt-4 sm:mt-6 p-4 sm:p-6 border rounded-lg bg-white shadow-sm">
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary-dark">{t('soilHealthAnalysis')}</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-sm sm:text-base">{t('healthScore')}</span>
              <span className="text-xl sm:text-2xl font-bold text-primary-dark">{soilHealth.health_score}/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${soilHealth.health_score}%` }}
              ></div>
            </div>
          </div>
          
          <div className="mb-4">
            <span className="font-medium text-sm sm:text-base">{t('overallStatus')}: </span>
            <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusColor(soilHealth.overall_status)}`}>
              {t(soilHealth.overall_status.toLowerCase())}
            </span>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2 text-primary-dark text-sm sm:text-base">{t('insights')}</h4>
          <ul className="space-y-1">
            {soilHealth.insights?.map((insight, index) => (
              <li key={index} className="text-xs sm:text-sm text-gray-700 flex items-start">
                <span className="text-primary mr-2 flex-shrink-0">•</span>
                <span className="break-words">{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {soilHealth.recommendations && soilHealth.recommendations.length > 0 && (
        <div className="mt-4 sm:mt-6">
          <h4 className="font-semibold mb-2 text-primary-dark text-sm sm:text-base">{t('recommendations')}</h4>
          <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
            <ul className="space-y-2">
              {soilHealth.recommendations.map((rec, index) => (
                <li key={index} className="text-xs sm:text-sm text-gray-700 flex items-start">
                  <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                  <span className="break-words">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
