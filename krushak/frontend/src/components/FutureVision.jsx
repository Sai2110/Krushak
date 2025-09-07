import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Globe,
  Brain,
  ShoppingCart,
  Smartphone,
  Leaf,
  Zap,
} from "lucide-react";

export default function FutureVision() {
  const { t } = useTranslation();

  const features = [
    {
      title: t('multilingualSupport'),
      description: t('multilingualSupportDesc'),
      icon: Globe,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      status: t('availableNow'),
    },
    {
      title: t('aiDiseaseDetection'),
      description: t('aiDiseaseDetectionDesc'),
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      status: t('comingSoon'),
    },
    {
      title: t('marketplaceIntegration'),
      description: t('marketplaceIntegrationDesc'),
      icon: ShoppingCart,
      color: "text-green-500",
      bgColor: "bg-green-50",
      status: t('inDevelopment'),
    },
    {
      title: t('mobileApp'),
      description: t('mobileAppDesc'),
      icon: Smartphone,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      status: t('planned'),
    },
    {
      title: t('organicFarmingFocus'),
      description: t('organicFarmingFocusDesc'),
      icon: Leaf,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      status: t('inDevelopment'),
    },
    {
      title: t('realTimeAlerts'),
      description: t('realTimeAlertsDesc'),
      icon: Zap,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      status: t('comingSoon'),
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case t('availableNow'):
        return "bg-green-100 text-green-800";
      case t('comingSoon'):
        return "bg-blue-100 text-blue-800";
      case t('inDevelopment'):
        return "bg-yellow-100 text-yellow-800";
      case t('planned'):
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-3 sm:mb-4">
            {t('whatsNext')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('constantlyInnovating')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className={`${feature.bgColor} border-0 shadow-sm hover:shadow-md transition-shadow`}
              >
                <CardHeader className="pb-3 p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${feature.bgColor} flex items-center justify-center`}
                      >
                        <IconComponent className={`h-4 w-4 sm:h-5 sm:w-5 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-base sm:text-lg text-gray-800 leading-tight">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(
                        feature.status
                      )}`}
                    >
                      {feature.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-primary to-green-600 text-white border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Be Part of the Future</h3>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of farmers already using Krushak to revolutionize
                their agricultural practices
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/prediction">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100"
                  >
                    {t('startPredicting')}
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 hover:text-primary"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
