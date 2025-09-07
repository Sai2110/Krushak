import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Brain, Target } from 'lucide-react'

export default function PredictionResult({ results }) {
  const { t } = useTranslation()
  if (!results) return null
  const models = Object.keys(results)

  // Build chart data: one bar per model showing top class probability
  const chartData = models.map(name => {
    const r = results[name]
    let topProb = 1
    if (r.probabilities && Object.keys(r.probabilities).length > 0) {
      topProb = Math.max(...Object.values(r.probabilities))
    }
    return { model: name, confidence: Math.round(topProb * 100) }
  })

  return (
    <Card className="shadow-sm">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
          <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          {t('mlModelPredictions')}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="space-y-2 sm:space-y-3">
          {models.map(name => {
            const confidence = chartData.find(d => d.model === name)?.confidence || 0
            return (
              <div key={name} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg gap-2 sm:gap-0">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{t('machineLearningModel')}</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-base sm:text-lg font-bold text-primary break-words">
                    {results[name].prediction}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">{confidence}% {t('confidence')}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}


