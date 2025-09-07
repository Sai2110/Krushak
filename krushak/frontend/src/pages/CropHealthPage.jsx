import React from 'react'
import { useTranslation } from 'react-i18next'

export default function CropHealthPage() {
  const { t } = useTranslation()
  
  return (
    <div className="p-6 border rounded bg-white">
      <h2 className="text-2xl font-semibold mb-2">{t('cropHealth')}</h2>
      <p>{t('comingSoon')}</p>
    </div>
  )
}


