import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { TrendingUp } from 'lucide-react'

export default function ConfidenceChart({ results }) {
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
          <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          Model Confidence Comparison
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="h-48 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="model" 
                tick={{ fontSize: 10 }}
                angle={-45}
                textAnchor="end"
                height={50}
                interval={0}
              />
              <YAxis 
                domain={[0, 100]} 
                tickFormatter={(v) => `${v}%`}
                tick={{ fontSize: 10 }}
                width={40}
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Confidence']}
                labelStyle={{ color: '#374151', fontSize: '12px' }}
                contentStyle={{ fontSize: '12px' }}
              />
              <Bar 
                dataKey="confidence" 
                fill="#16a34a"
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
