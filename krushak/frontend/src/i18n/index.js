import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      prediction: 'Prediction',
      cropHealth: 'Crop Health',
      
      // Home Page
      title: 'Krushak: The Farming Companion',
      subtitle: 'Accurate, data-driven fertilizer recommendations for better yields.',
      startPredicting: 'Start Predicting',
      whyKrushak: 'Why Krushak?',
      accurateRecommendations: 'Accurate Recommendations',
      accurateDesc: 'Powered by multiple ML models.',
      easyToUse: 'Easy to Use',
      easyDesc: 'Simple form, instant results.',
      basedOnData: 'Based on Data',
      dataDesc: 'Built from real-world datasets.',
      whatFarmersSay: 'What Farmers Say',
      
      // Prediction Page
      fertilizerPrediction: 'Fertilizer Prediction',
      temperature: 'Temperature (°C)',
      humidity: 'Humidity (%)',
      moisture: 'Moisture (%)',
      soilType: 'Soil Type',
      cropType: 'Crop Type',
      nitrogen: 'Nitrogen (N)',
      potassium: 'Potassium (K)',
      phosphorus: 'Phosphorus (P)',
      getRecommendation: 'Get Recommendation',
      predicting: 'Predicting...',
      
      // Soil Health
      soilHealthAnalysis: 'Soil Health Analysis',
      healthScore: 'Health Score',
      overallStatus: 'Overall Status',
      insights: 'Insights',
      recommendations: 'Recommendations',
      
      // Weather
      getWeatherData: 'Get Weather Data',
      weatherFor: 'Weather for',
      currentWeather: 'Current Weather',
      
      // Reports
      downloadReport: 'Download Report',
      downloadPDF: 'Download PDF',
      downloadExcel: 'Download Excel',
      
      // Footer
      contactUs: 'Contact Us',
      getRecommendations: 'Get Recommendations',
      
      // Reviews
      review1: 'Krushak helped me cut costs and boost crop health!',
      review2: 'Simple and accurate recommendations. Highly recommended.',
      review3: 'Great UI and actionable suggestions for my fields.',
      
      // Status
      excellent: 'Excellent',
      good: 'Good',
      fair: 'Fair',
      poor: 'Poor',
      
      // About Page
      backToHome: 'Back to Home',
      aboutKrushak: 'About Krushak',
      empoweringFarmers: 'Empowering farmers with AI-driven agricultural insights',
      ourMission: 'Our Mission',
      missionText: 'Krushak is dedicated to revolutionizing agriculture through cutting-edge technology. We provide farmers with intelligent fertilizer recommendations, soil health analysis, and weather insights to maximize crop yields while promoting sustainable farming practices.',
      aiPoweredAnalysis: 'AI-Powered Analysis',
      aiAnalysisText: 'Our advanced machine learning models analyze soil composition, weather patterns, and crop requirements to provide accurate fertilizer recommendations.',
      farmerCentricDesign: 'Farmer-Centric Design',
      farmerCentricText: 'Built with farmers in mind, our platform supports multiple languages and provides intuitive interfaces accessible to users of all technical backgrounds.',
      realTimeInsights: 'Real-Time Insights',
      realTimeText: 'Get instant weather updates, soil health assessments, and personalized recommendations to make informed decisions for your crops.',
      sustainableAgriculture: 'Sustainable Agriculture',
      sustainableText: 'Promote eco-friendly farming practices with optimized fertilizer usage, reducing environmental impact while improving crop productivity.',
      technologyStack: 'Technology Stack',
      machineLearning: 'Machine Learning',
      machineLearningText: 'Decision Tree, Random Forest, Logistic Regression, SVM, Naive Bayes',
      dataSources: 'Data Sources',
      dataSourcesText: 'OpenWeather API, Soil analysis data, Agricultural research datasets',
      languages: 'Languages',
      languagesText: 'English, Hindi, Marathi, Telugu with more coming soon',
      
      // How It Works
      howKrushakWorks: 'How Krushak Works',
      howKrushakWorksDesc: 'Our AI-powered system analyzes your soil data and provides accurate fertilizer recommendations in just three simple steps.',
      enterSoilValues: 'Enter Soil Values',
      enterSoilValuesDesc: 'Input your soil parameters like nitrogen, phosphorus, potassium, temperature, and moisture levels.',
      mlModelsAnalyze: 'ML Models Analyze',
      mlModelsAnalyzeDesc: 'Our advanced machine learning models process your data using Decision Tree, Random Forest, and other algorithms.',
      getRecommendations: 'Get Recommendations',
      getRecommendationsDesc: 'Receive personalized fertilizer recommendations with confidence scores and soil health insights.',
      
      // Weather Widget
      weatherData: 'Weather Data',
      cityName: 'City Name',
      getWeather: 'Get Weather',
      loading: 'Loading...',
      weatherDataUnavailable: 'Weather data unavailable',
      temperature: 'Temperature',
      humidity: 'Humidity',
      condition: 'Condition',
      wind: 'Wind',
      rainfall: 'Rainfall',
      lastHour: 'last hour',
      
      // Enhanced CTA
      readyToGetStarted: 'Ready to Get Started?',
      ctaDescription: 'Choose how you\'d like to experience Krushak\'s powerful fertilizer recommendation system',
      startPredicting: 'Start Predicting',
      startPredictingDesc: 'Enter your soil data and get instant fertilizer recommendations',
      viewDemo: 'View Demo',
      viewDemoDesc: 'See how Krushak works with sample data and explore all features',
      sampleReport: 'Sample Report',
      sampleReportDesc: 'Download a sample PDF report to see the detailed analysis format',
      downloadSample: 'Download Sample',
      allFeaturesFree: 'All features are free to use • No registration required • Instant results',
      
      // Navigation & Auth
      dashboard: 'Dashboard',
      login: 'Login',
      signUp: 'Sign Up',
      logout: 'Logout',
      language: 'Language:',
      
      // Home Page Additional
      learnMore: 'Learn More',
      realTimeIntelligence: 'Real-time Agricultural Intelligence',
      realTimeIntelligenceDesc: 'Get weather data and soil insights to make informed farming decisions. Our system combines current conditions with historical data for accurate recommendations.',
      mlModels: 'ML Models',
      accuracy: 'Accuracy',
      dataPoints: 'Data Points',
      discoverWhy: 'Discover why thousands of farmers trust Krushak for their agricultural decisions',
      
      // Prediction Page Additional
      backToHome: 'Back to Home',
      analysisComplete: 'Analysis Complete!',
      analysisCompleteDesc: 'Your soil analysis and fertilizer recommendations are ready',
      downloadDetailedReport: 'Download Detailed Report',
      getRecommendationDesc: 'Get AI-powered fertilizer recommendations based on your soil conditions and weather data',
      
      // Demo Page
      krushakDemo: 'Krushak Demo',
      seeHowWorks: 'See how Krushak works with sample data',
      sampleInputData: 'Sample Input Data',
      mlModelPredictions: 'ML Model Predictions',
      soilHealthAnalysis: 'Soil Health Analysis',
      healthScore: 'Health Score',
      overallStatus: 'Overall Status',
      keyInsights: 'Key Insights',
      insights: 'Insights',
      recommendations: 'Recommendations',
      readyToTry: 'Ready to Try It Yourself?',
      enterOwnData: 'Enter your own soil data and get personalized recommendations',
      startPredictingNow: 'Start Predicting Now',
      confidence: 'confidence',
      machineLearningModel: 'Machine Learning Model',
      
      // Auth Pages
      welcomeBack: 'Welcome Back',
      signInAccount: 'Sign in to your Krushak account',
      emailAddress: 'Email Address',
      enterEmail: 'Enter your email',
      password: 'Password',
      enterPassword: 'Enter your password',
      signingIn: 'Signing In...',
      signIn: 'Sign In',
      testCredentials: 'Test Credentials',
      dontHaveAccount: 'Don\'t have an account?',
      signUpHere: 'Sign up here',
      joinKrushak: 'Join Krushak',
      createAccount: 'Create your account to get started',
      fullName: 'Full Name',
      enterFullName: 'Enter your full name',
      confirmPassword: 'Confirm Password',
      confirmYourPassword: 'Confirm your password',
      createPassword: 'Create a password (min. 6 characters)',
      creatingAccount: 'Creating Account...',
      createAccountBtn: 'Create Account',
      alreadyHaveAccount: 'Already have an account?',
      signInHere: 'Sign in here',
      
      // Dashboard
      welcomeBackUser: 'Welcome back, {name}! 👋',
      personalizedDashboard: 'Here\'s your personalized farming insights dashboard',
      totalPredictions: 'Total Predictions',
      avgSoilHealth: 'Avg. Soil Health',
      mostUsedFertilizer: 'Most Used Fertilizer',
      quickActions: 'Quick Actions',
      makeNewPrediction: 'Make New Prediction',
      analyzeSoilHealth: 'Analyze Soil Health',
      predictionHistory: 'Your Prediction History',
      refresh: 'Refresh',
      noPredictionsYet: 'No predictions yet',
      startFarmingJourney: 'Start your farming journey by making your first prediction!',
      makeFirstPrediction: 'Make Your First Prediction',
      loadingDashboard: 'Loading your dashboard...',
      errorLoadingDashboard: 'Error Loading Dashboard',
      tryAgain: 'Try Again',
      
      // Crop Health
      cropHealth: 'Crop Health',
      comingSoon: 'Coming Soon: Upload crop image for health analysis.',
      
      // Form Labels
      soilCropParameters: 'Soil & Crop Parameters',
      nutrientParameters: 'Nutrient Parameters (ppm)',
      selectSoilType: 'Select soil type',
      selectCropType: 'Select crop type',
      enterCityName: 'Enter city name (e.g., Pune, Mumbai, Delhi)',
      
      // Weather
      feelsLike: 'Feels like',
      high: 'H',
      low: 'L',
      humidity: 'Humidity',
      wind: 'Wind',
      pressure: 'Pressure',
      visibility: 'Visibility',
      rain1h: 'Rain (1h)',
      sunrise: 'Sunrise',
      
      // Testimonials
      hearFromFarmers: 'Hear from farmers who have transformed their agricultural practices with Krushak',
      
      // Status Messages
      predictionSaved: 'Prediction saved successfully! Check your dashboard to view it.',
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      passwordMinLength: 'Password must be at least 6 characters long',
      passwordsDoNotMatch: 'Passwords do not match',
      unexpectedError: 'An unexpected error occurred. Please try again.',
      networkError: 'Network error or server unavailable',
      failedToFetch: 'Failed to fetch predictions',
      loading: 'Loading...',
      
      // Future Vision
      whatsNext: 'What\'s Next?',
      constantlyInnovating: 'We\'re constantly innovating to bring you the most advanced agricultural technology solutions',
      multilingualSupport: 'Multilingual Support',
      multilingualSupportDesc: 'Full support for Hindi, Marathi, Telugu, and more regional languages to serve farmers across India.',
      aiDiseaseDetection: 'AI-Powered Disease Detection',
      aiDiseaseDetectionDesc: 'Advanced computer vision to identify crop diseases and pests from smartphone photos.',
      marketplaceIntegration: 'Marketplace Integration',
      marketplaceIntegrationDesc: 'Connect directly with fertilizer suppliers and get the best prices for recommended products.',
      mobileApp: 'Mobile App',
      mobileAppDesc: 'Native mobile application for Android and iOS with offline capabilities and GPS integration.',
      organicFarmingFocus: 'Organic Farming Focus',
      organicFarmingFocusDesc: 'Specialized recommendations for organic farming practices and sustainable agriculture.',
      realTimeAlerts: 'Real-time Alerts',
      realTimeAlertsDesc: 'Weather-based alerts and notifications for optimal farming decisions and crop protection.',
      availableNow: 'Available Now',
      comingSoon: 'Coming Soon',
      inDevelopment: 'In Development',
      planned: 'Planned',
      bePartOfFuture: 'Be Part of the Future',
      joinThousandsFarmers: 'Join thousands of farmers already using Krushak to revolutionize their agricultural practices'
    }
  },
  hi: {
    translation: {
      // Navigation
      home: 'होम',
      prediction: 'भविष्यवाणी',
      cropHealth: 'फसल स्वास्थ्य',
      
      // Home Page
      title: 'कृषक: उर्वरक सिफारिश प्रणाली',
      subtitle: 'बेहतर उपज के लिए सटीक, डेटा-संचालित उर्वरक सिफारिशें।',
      startPredicting: 'भविष्यवाणी शुरू करें',
      whyKrushak: 'कृषक क्यों?',
      accurateRecommendations: 'सटीक सिफारिशें',
      accurateDesc: 'कई ML मॉडल द्वारा संचालित।',
      easyToUse: 'उपयोग में आसान',
      easyDesc: 'सरल फॉर्म, तुरंत परिणाम।',
      basedOnData: 'डेटा पर आधारित',
      dataDesc: 'वास्तविक दुनिया के डेटासेट से निर्मित।',
      whatFarmersSay: 'किसान क्या कहते हैं',
      
      // Prediction Page
      fertilizerPrediction: 'उर्वरक भविष्यवाणी',
      temperature: 'तापमान (°C)',
      humidity: 'आर्द्रता (%)',
      moisture: 'नमी (%)',
      soilType: 'मिट्टी का प्रकार',
      cropType: 'फसल का प्रकार',
      nitrogen: 'नाइट्रोजन (N)',
      potassium: 'पोटेशियम (K)',
      phosphorus: 'फॉस्फोरस (P)',
      getRecommendation: 'सिफारिश प्राप्त करें',
      predicting: 'भविष्यवाणी कर रहे हैं...',
      
      // Soil Health
      soilHealthAnalysis: 'मिट्टी स्वास्थ्य विश्लेषण',
      healthScore: 'स्वास्थ्य स्कोर',
      overallStatus: 'समग्र स्थिति',
      insights: 'अंतर्दृष्टि',
      recommendations: 'सिफारिशें',
      
      // Weather
      getWeatherData: 'मौसम डेटा प्राप्त करें',
      weatherFor: 'के लिए मौसम',
      currentWeather: 'वर्तमान मौसम',
      
      // Reports
      downloadReport: 'रिपोर्ट डाउनलोड करें',
      downloadPDF: 'PDF डाउनलोड करें',
      downloadExcel: 'Excel डाउनलोड करें',
      
      // Footer
      contactUs: 'संपर्क करें',
      getRecommendations: 'सिफारिशें प्राप्त करें',
      
      // Reviews
      review1: 'कृषक ने मुझे लागत कम करने और फसल स्वास्थ्य बढ़ाने में मदद की!',
      review2: 'सरल और सटीक सिफारिशें। अत्यधिक अनुशंसित।',
      review3: 'बेहतरीन UI और कार्रवाई योग्य सुझाव मेरे खेतों के लिए।',
      
      // Status
      excellent: 'उत्कृष्ट',
      good: 'अच्छा',
      fair: 'ठीक',
      poor: 'खराब',
      
      // About Page
      backToHome: 'होम पर वापस जाएं',
      aboutKrushak: 'कृषक के बारे में',
      empoweringFarmers: 'किसानों को AI-संचालित कृषि अंतर्दृष्टि के साथ सशक्त बनाना',
      ourMission: 'हमारा मिशन',
      missionText: 'कृषक कटिंग-एज तकनीक के माध्यम से कृषि में क्रांति लाने के लिए समर्पित है। हम किसानों को बुद्धिमान उर्वरक सिफारिशें, मिट्टी स्वास्थ्य विश्लेषण, और मौसम अंतर्दृष्टि प्रदान करते हैं ताकि सतत कृषि प्रथाओं को बढ़ावा देते हुए फसल की पैदावार को अधिकतम किया जा सके।',
      aiPoweredAnalysis: 'AI-संचालित विश्लेषण',
      aiAnalysisText: 'हमारे उन्नत मशीन लर्निंग मॉडल मिट्टी की संरचना, मौसम पैटर्न, और फसल की आवश्यकताओं का विश्लेषण करके सटीक उर्वरक सिफारिशें प्रदान करते हैं।',
      farmerCentricDesign: 'किसान-केंद्रित डिजाइन',
      farmerCentricText: 'किसानों को ध्यान में रखकर बनाया गया, हमारा प्लेटफॉर्म कई भाषाओं का समर्थन करता है और सभी तकनीकी पृष्ठभूमि के उपयोगकर्ताओं के लिए सहज इंटरफेस प्रदान करता है।',
      realTimeInsights: 'रियल-टाइम अंतर्दृष्टि',
      realTimeText: 'तत्काल मौसम अपडेट, मिट्टी स्वास्थ्य आकलन, और व्यक्तिगत सिफारिशें प्राप्त करें ताकि अपनी फसलों के लिए सूचित निर्णय ले सकें।',
      sustainableAgriculture: 'सतत कृषि',
      sustainableText: 'पर्यावरणीय प्रभाव को कम करते हुए फसल उत्पादकता में सुधार के लिए अनुकूलित उर्वरक उपयोग के साथ पर्यावरण-अनुकूल कृषि प्रथाओं को बढ़ावा दें।',
      technologyStack: 'तकनीक स्टैक',
      machineLearning: 'मशीन लर्निंग',
      machineLearningText: 'डिसीजन ट्री, रैंडम फॉरेस्ट, लॉजिस्टिक रिग्रेशन, SVM, नेव बेयस',
      dataSources: 'डेटा स्रोत',
      dataSourcesText: 'ओपनवेदर API, मिट्टी विश्लेषण डेटा, कृषि अनुसंधान डेटासेट',
      languages: 'भाषाएं',
      languagesText: 'अंग्रेजी, हिंदी, मराठी, तेलुगु और जल्द ही और भी',
      
      // How It Works
      howKrushakWorks: 'कृषक कैसे काम करता है',
      howKrushakWorksDesc: 'हमारी AI-संचालित प्रणाली आपके मिट्टी डेटा का विश्लेषण करती है और सिर्फ तीन सरल चरणों में सटीक उर्वरक सिफारिशें प्रदान करती है।',
      enterSoilValues: 'मिट्टी मूल्य दर्ज करें',
      enterSoilValuesDesc: 'अपने मिट्टी पैरामीटर जैसे नाइट्रोजन, फॉस्फोरस, पोटेशियम, तापमान, और नमी स्तर दर्ज करें।',
      mlModelsAnalyze: 'ML मॉडल विश्लेषण',
      mlModelsAnalyzeDesc: 'हमारे उन्नत मशीन लर्निंग मॉडल डिसीजन ट्री, रैंडम फॉरेस्ट, और अन्य एल्गोरिदम का उपयोग करके आपके डेटा को प्रोसेस करते हैं।',
      getRecommendations: 'सिफारिशें प्राप्त करें',
      getRecommendationsDesc: 'आत्मविश्वास स्कोर और मिट्टी स्वास्थ्य अंतर्दृष्टि के साथ व्यक्तिगत उर्वरक सिफारिशें प्राप्त करें।',
      
      // Weather Widget
      weatherData: 'मौसम डेटा',
      cityName: 'शहर का नाम',
      getWeather: 'मौसम प्राप्त करें',
      loading: 'लोड हो रहा है...',
      weatherDataUnavailable: 'मौसम डेटा उपलब्ध नहीं',
      temperature: 'तापमान',
      humidity: 'आर्द्रता',
      condition: 'स्थिति',
      wind: 'हवा',
      rainfall: 'वर्षा',
      lastHour: 'पिछले घंटे',
      
      // Enhanced CTA
      readyToGetStarted: 'शुरू करने के लिए तैयार हैं?',
      ctaDescription: 'चुनें कि आप कृषक की शक्तिशाली उर्वरक सिफारिश प्रणाली का अनुभव कैसे करना चाहते हैं',
      startPredicting: 'भविष्यवाणी शुरू करें',
      startPredictingDesc: 'अपना मिट्टी डेटा दर्ज करें और तत्काल उर्वरक सिफारिशें प्राप्त करें',
      viewDemo: 'डेमो देखें',
      viewDemoDesc: 'नमूना डेटा के साथ देखें कि कृषक कैसे काम करता है और सभी सुविधाओं का अन्वेषण करें',
      sampleReport: 'नमूना रिपोर्ट',
      sampleReportDesc: 'विस्तृत विश्लेषण प्रारूप देखने के लिए एक नमूना PDF रिपोर्ट डाउनलोड करें',
      downloadSample: 'नमूना डाउनलोड करें',
      allFeaturesFree: 'सभी सुविधाएं मुफ्त में उपयोग करें • कोई पंजीकरण आवश्यक नहीं • तत्काल परिणाम',
      
      // Navigation & Auth
      dashboard: 'डैशबोर्ड',
      login: 'लॉगिन',
      signUp: 'साइन अप',
      logout: 'लॉगआउट',
      language: 'भाषा:',
      Language: 'भाषा',
      
      // Home Page Additional
      learnMore: 'और जानें',
      realTimeIntelligence: 'रियल-टाइम कृषि बुद्धिमत्ता',
      realTimeIntelligenceDesc: 'सूचित कृषि निर्णय लेने के लिए मौसम डेटा और मिट्टी अंतर्दृष्टि प्राप्त करें। हमारी प्रणाली सटीक सिफारिशों के लिए वर्तमान स्थितियों को ऐतिहासिक डेटा के साथ जोड़ती है।',
      mlModels: 'ML मॉडल',
      accuracy: 'सटीकता',
      dataPoints: 'डेटा पॉइंट्स',
      discoverWhy: 'जानें कि हजारों किसान अपने कृषि निर्णयों के लिए कृषक पर भरोसा क्यों करते हैं',
      
      // Prediction Page Additional
      backToHome: 'होम पर वापस जाएं',
      analysisComplete: 'विश्लेषण पूरा!',
      analysisCompleteDesc: 'आपका मिट्टी विश्लेषण और उर्वरक सिफारिशें तैयार हैं',
      downloadDetailedReport: 'विस्तृत रिपोर्ट डाउनलोड करें',
      getRecommendationDesc: 'अपनी मिट्टी की स्थिति और मौसम डेटा के आधार पर AI-संचालित उर्वरक सिफारिशें प्राप्त करें',
      
      // Demo Page
      krushakDemo: 'कृषक डेमो',
      seeHowWorks: 'नमूना डेटा के साथ देखें कि कृषक कैसे काम करता है',
      sampleInputData: 'नमूना इनपुट डेटा',
      mlModelPredictions: 'ML मॉडल भविष्यवाणियां',
      soilHealthAnalysis: 'मिट्टी स्वास्थ्य विश्लेषण',
      healthScore: 'स्वास्थ्य स्कोर',
      overallStatus: 'समग्र स्थिति',
      keyInsights: 'मुख्य अंतर्दृष्टि',
      insights: 'अंतर्दृष्टि',
      recommendations: 'सिफारिशें',
      readyToTry: 'इसे खुद आजमाने के लिए तैयार हैं?',
      enterOwnData: 'अपना मिट्टी डेटा दर्ज करें और व्यक्तिगत सिफारिशें प्राप्त करें',
      startPredictingNow: 'अभी भविष्यवाणी शुरू करें',
      confidence: 'आत्मविश्वास',
      machineLearningModel: 'मशीन लर्निंग मॉडल',
      
      // Auth Pages
      welcomeBack: 'वापस स्वागत है',
      signInAccount: 'अपने कृषक खाते में साइन इन करें',
      emailAddress: 'ईमेल पता',
      enterEmail: 'अपना ईमेल दर्ज करें',
      password: 'पासवर्ड',
      enterPassword: 'अपना पासवर्ड दर्ज करें',
      signingIn: 'साइन इन हो रहे हैं...',
      signIn: 'साइन इन करें',
      testCredentials: 'टेस्ट क्रेडेंशियल्स',
      dontHaveAccount: 'खाता नहीं है?',
      signUpHere: 'यहां साइन अप करें',
      joinKrushak: 'कृषक में शामिल हों',
      createAccount: 'शुरू करने के लिए अपना खाता बनाएं',
      fullName: 'पूरा नाम',
      enterFullName: 'अपना पूरा नाम दर्ज करें',
      confirmPassword: 'पासवर्ड की पुष्टि करें',
      confirmYourPassword: 'अपने पासवर्ड की पुष्टि करें',
      createPassword: 'पासवर्ड बनाएं (न्यूनतम 6 वर्ण)',
      creatingAccount: 'खाता बनाया जा रहा है...',
      createAccountBtn: 'खाता बनाएं',
      alreadyHaveAccount: 'पहले से खाता है?',
      signInHere: 'यहां साइन इन करें',
      
      // Dashboard
      welcomeBackUser: 'वापस स्वागत है, {name}! 👋',
      personalizedDashboard: 'यहां आपका व्यक्तिगत कृषि अंतर्दृष्टि डैशबोर्ड है',
      totalPredictions: 'कुल भविष्यवाणियां',
      avgSoilHealth: 'औसत मिट्टी स्वास्थ्य',
      mostUsedFertilizer: 'सबसे अधिक उपयोग किया जाने वाला उर्वरक',
      quickActions: 'त्वरित कार्य',
      makeNewPrediction: 'नई भविष्यवाणी करें',
      analyzeSoilHealth: 'मिट्टी स्वास्थ्य का विश्लेषण करें',
      predictionHistory: 'आपका भविष्यवाणी इतिहास',
      refresh: 'रिफ्रेश करें',
      noPredictionsYet: 'अभी तक कोई भविष्यवाणी नहीं',
      startFarmingJourney: 'अपनी पहली भविष्यवाणी करके अपनी कृषि यात्रा शुरू करें!',
      makeFirstPrediction: 'अपनी पहली भविष्यवाणी करें',
      loadingDashboard: 'आपका डैशबोर्ड लोड हो रहा है...',
      errorLoadingDashboard: 'डैशबोर्ड लोड करने में त्रुटि',
      tryAgain: 'फिर से कोशिश करें',
      
      // Crop Health
      cropHealth: 'फसल स्वास्थ्य',
      comingSoon: 'जल्द आ रहा है: स्वास्थ्य विश्लेषण के लिए फसल छवि अपलोड करें।',
      
      // Form Labels
      soilCropParameters: 'मिट्टी और फसल पैरामीटर',
      nutrientParameters: 'पोषक तत्व पैरामीटर (ppm)',
      selectSoilType: 'मिट्टी का प्रकार चुनें',
      selectCropType: 'फसल का प्रकार चुनें',
      enterCityName: 'शहर का नाम दर्ज करें (जैसे, पुणे, मुंबई, दिल्ली)',
      
      // Weather
      feelsLike: 'महसूस होता है',
      high: 'उ',
      low: 'न',
      humidity: 'आर्द्रता',
      wind: 'हवा',
      pressure: 'दबाव',
      visibility: 'दृश्यता',
      rain1h: 'बारिश (1घं)',
      sunrise: 'सूर्योदय',
      
      // Testimonials
      hearFromFarmers: 'किसानों से सुनें जिन्होंने कृषक के साथ अपनी कृषि प्रथाओं को बदल दिया है',
      
      // Status Messages
      predictionSaved: 'भविष्यवाणी सफलतापूर्वक सहेजी गई! इसे देखने के लिए अपना डैशबोर्ड देखें।',
      nameRequired: 'नाम आवश्यक है',
      emailRequired: 'ईमेल आवश्यक है',
      passwordMinLength: 'पासवर्ड कम से कम 6 वर्ण का होना चाहिए',
      passwordsDoNotMatch: 'पासवर्ड मेल नहीं खाते',
      unexpectedError: 'एक अप्रत्याशित त्रुटि हुई। कृपया फिर से कोशिश करें।',
      networkError: 'नेटवर्क त्रुटि या सर्वर उपलब्ध नहीं',
      failedToFetch: 'भविष्यवाणियां प्राप्त करने में विफल',
      loading: 'लोड हो रहा है...',
      
      // Future Vision
      whatsNext: 'आगे क्या है?',
      constantlyInnovating: 'हम लगातार नवाचार कर रहे हैं ताकि आपको सबसे उन्नत कृषि प्रौद्योगिकी समाधान मिल सकें',
      multilingualSupport: 'बहुभाषी समर्थन',
      multilingualSupportDesc: 'भारत भर के किसानों की सेवा के लिए हिंदी, मराठी, तेलुगु और अधिक क्षेत्रीय भाषाओं का पूर्ण समर्थन।',
      aiDiseaseDetection: 'AI-संचालित रोग पहचान',
      aiDiseaseDetectionDesc: 'स्मार्टफोन फोटो से फसल रोगों और कीटों की पहचान के लिए उन्नत कंप्यूटर विजन।',
      marketplaceIntegration: 'मार्केटप्लेस एकीकरण',
      marketplaceIntegrationDesc: 'उर्वरक आपूर्तिकर्ताओं के साथ सीधे जुड़ें और अनुशंसित उत्पादों के लिए सर्वोत्तम मूल्य प्राप्त करें।',
      mobileApp: 'मोबाइल ऐप',
      mobileAppDesc: 'ऑफलाइन क्षमताओं और GPS एकीकरण के साथ Android और iOS के लिए नेटिव मोबाइल एप्लिकेशन।',
      organicFarmingFocus: 'जैविक खेती फोकस',
      organicFarmingFocusDesc: 'जैविक खेती प्रथाओं और सतत कृषि के लिए विशेष सिफारिशें।',
      realTimeAlerts: 'रियल-टाइम अलर्ट',
      realTimeAlertsDesc: 'इष्टतम खेती निर्णयों और फसल सुरक्षा के लिए मौसम-आधारित अलर्ट और सूचनाएं।',
      availableNow: 'अभी उपलब्ध',
      comingSoon: 'जल्द आ रहा है',
      inDevelopment: 'विकास में',
      planned: 'योजनाबद्ध',
      bePartOfFuture: 'भविष्य का हिस्सा बनें',
      joinThousandsFarmers: 'हजारों किसानों के साथ जुड़ें जो पहले से ही अपनी कृषि प्रथाओं में क्रांति लाने के लिए कृषक का उपयोग कर रहे हैं'
    }
  },
  mr: {
    translation: {
      // Navigation
      home: 'मुख्यपृष्ठ',
      prediction: 'अंदाज',
      cropHealth: 'पिकाचे आरोग्य',
      
      // Home Page
      title: 'कृषक: खत सूचना प्रणाली',
      subtitle: 'चांगल्या उत्पादनासाठी अचूक, डेटा-चालित खत सूचना।',
      startPredicting: 'अंदाज सुरू करा',
      whyKrushak: 'कृषक का?',
      accurateRecommendations: 'अचूक सूचना',
      accurateDesc: 'अनेक ML मॉडेल्सद्वारे चालित।',
      easyToUse: 'वापरण्यात सोपे',
      easyDesc: 'सोपे फॉर्म, त्वरित परिणाम।',
      basedOnData: 'डेटावर आधारित',
      dataDesc: 'वास्तविक जगाच्या डेटासेट्सवरून बनवले।',
      whatFarmersSay: 'शेतकरी काय म्हणतात',
      
      // Prediction Page
      fertilizerPrediction: 'खत अंदाज',
      temperature: 'तापमान (°C)',
      humidity: 'आर्द्रता (%)',
      moisture: 'ओलावा (%)',
      soilType: 'मातीचा प्रकार',
      cropType: 'पिकाचा प्रकार',
      nitrogen: 'नायट्रोजन (N)',
      potassium: 'पोटॅशियम (K)',
      phosphorus: 'फॉस्फरस (P)',
      getRecommendation: 'सूचना मिळवा',
      predicting: 'अंदाज करत आहे...',
      
      // Soil Health
      soilHealthAnalysis: 'माती आरोग्य विश्लेषण',
      healthScore: 'आरोग्य स्कोर',
      overallStatus: 'एकूण स्थिती',
      insights: 'अंतर्दृष्टी',
      recommendations: 'सूचना',
      
      // Weather
      getWeatherData: 'हवामान डेटा मिळवा',
      weatherFor: 'साठी हवामान',
      currentWeather: 'सध्याचे हवामान',
      
      // Reports
      downloadReport: 'अहवाल डाउनलोड करा',
      downloadPDF: 'PDF डाउनलोड करा',
      downloadExcel: 'Excel डाउनलोड करा',
      
      // Footer
      contactUs: 'संपर्क करा',
      getRecommendations: 'सूचना मिळवा',
      
      // Reviews
      review1: 'कृषकने मला खर्च कमी करण्यात आणि पिकाचे आरोग्य वाढवण्यात मदत केली!',
      review2: 'सोपे आणि अचूक सूचना। अत्यंत शिफारस।',
      review3: 'उत्कृष्ट UI आणि माझ्या शेतांसाठी कार्यक्षम सुझाव।',
      
      // Status
      excellent: 'उत्कृष्ट',
      good: 'चांगले',
      fair: 'बरं',
      poor: 'वाईट',
      
      // About Page
      backToHome: 'मुख्यपृष्ठावर परत जा',
      aboutKrushak: 'कृषक बद्दल',
      empoweringFarmers: 'किसानांना AI-चालित शेती अंतर्दृष्टीसह सक्षम करणे',
      ourMission: 'आमचे मिशन',
      missionText: 'कृषक कटिंग-एज तंत्रज्ञानाद्वारे शेतीत क्रांती आणण्यासाठी समर्पित आहे. आम्ही किसानांना बुद्धिमान खत सूचना, माती आरोग्य विश्लेषण, आणि हवामान अंतर्दृष्टी प्रदान करतो जेणेकरून शाश्वत शेती पद्धतींना प्रोत्साहन देताना पिकाची उत्पादकता वाढवता येईल.',
      aiPoweredAnalysis: 'AI-चालित विश्लेषण',
      aiAnalysisText: 'आमचे प्रगत मशीन लर्निंग मॉडेल्स मातीची रचना, हवामान पॅटर्न, आणि पिकाच्या गरजांचे विश्लेषण करून अचूक खत सूचना प्रदान करतात.',
      farmerCentricDesign: 'किसान-केंद्रित डिझाइन',
      farmerCentricText: 'किसानांच्या मनात ठेवून बनवलेले, आमचे प्लॅटफॉर्म अनेक भाषांचे समर्थन करते आणि सर्व तांत्रिक पार्श्वभूमीच्या वापरकर्त्यांसाठी सहज इंटरफेस प्रदान करते.',
      realTimeInsights: 'रिअल-टाइम अंतर्दृष्टी',
      realTimeText: 'तत्काळ हवामान अपडेट्स, माती आरोग्य मूल्यांकन, आणि वैयक्तिकृत सूचना मिळवा जेणेकरून आपल्या पिकांसाठी माहितीपूर्ण निर्णय घेता येतील.',
      sustainableAgriculture: 'शाश्वत शेती',
      sustainableText: 'पर्यावरणीय प्रभाव कमी करताना पिकाची उत्पादकता सुधारण्यासाठी अनुकूलित खत वापरासह पर्यावरण-अनुकूल शेती पद्धतींना प्रोत्साहन द्या.',
      technologyStack: 'तंत्रज्ञान स्टॅक',
      machineLearning: 'मशीन लर्निंग',
      machineLearningText: 'डिसिजन ट्री, रँडम फॉरेस्ट, लॉजिस्टिक रिग्रेशन, SVM, नेव बेयस',
      dataSources: 'डेटा स्रोत',
      dataSourcesText: 'ओपनवेदर API, माती विश्लेषण डेटा, शेती संशोधन डेटासेट',
      languages: 'भाषा',
      languagesText: 'इंग्रजी, हिंदी, मराठी, तेलुगू आणि लवकरच आणखी',
      
      // How It Works
      howKrushakWorks: 'कृषक कसे काम करते',
      howKrushakWorksDesc: 'आमची AI-चालित प्रणाली आपल्या माती डेटाचे विश्लेषण करते आणि फक्त तीन सोप्या चरणांमध्ये अचूक खत सूचना प्रदान करते.',
      enterSoilValues: 'माती मूल्ये प्रविष्ट करा',
      enterSoilValuesDesc: 'आपले माती पॅरामीटर्स जसे की नायट्रोजन, फॉस्फरस, पोटॅशियम, तापमान, आणि ओलावा पातळी प्रविष्ट करा.',
      mlModelsAnalyze: 'ML मॉडेल्स विश्लेषण',
      mlModelsAnalyzeDesc: 'आमचे प्रगत मशीन लर्निंग मॉडेल्स डिसिजन ट्री, रँडम फॉरेस्ट, आणि इतर अल्गोरिदम वापरून आपला डेटा प्रोसेस करतात.',
      getRecommendations: 'सूचना मिळवा',
      getRecommendationsDesc: 'आत्मविश्वास स्कोअर आणि माती आरोग्य अंतर्दृष्टीसह वैयक्तिकृत खत सूचना मिळवा.',
      
      // Weather Widget
      weatherData: 'हवामान डेटा',
      cityName: 'शहराचे नाव',
      getWeather: 'हवामान मिळवा',
      loading: 'लोड होत आहे...',
      weatherDataUnavailable: 'हवामान डेटा उपलब्ध नाही',
      temperature: 'तापमान',
      humidity: 'आर्द्रता',
      condition: 'स्थिती',
      wind: 'वारा',
      rainfall: 'पाऊस',
      lastHour: 'मागील तास',
      
      // Enhanced CTA
      readyToGetStarted: 'सुरु करण्यासाठी तयार आहात?',
      ctaDescription: 'कृषकच्या शक्तिशाली खत सूचना प्रणालीचा अनुभव कसा घ्यायचा ते निवडा',
      startPredicting: 'अंदाज सुरू करा',
      startPredictingDesc: 'आपला माती डेटा प्रविष्ट करा आणि तत्काळ खत सूचना मिळवा',
      viewDemo: 'डेमो पहा',
      viewDemoDesc: 'नमुना डेटासह पहा की कृषक कसे काम करते आणि सर्व वैशिष्ट्यांचा शोध घ्या',
      sampleReport: 'नमुना अहवाल',
      sampleReportDesc: 'तपशीलवार विश्लेषण स्वरूप पाहण्यासाठी नमुना PDF अहवाल डाउनलोड करा',
      downloadSample: 'नमुना डाउनलोड करा',
      allFeaturesFree: 'सर्व वैशिष्ट्ये विनामूल्य वापरा • कोणतेही नोंदणी आवश्यक नाही • तत्काळ परिणाम',
      
      // Navigation & Auth
      dashboard: 'डॅशबोर्ड',
      login: 'लॉगिन',
      signUp: 'साइन अप',
      logout: 'लॉगआउट',
      language: 'भाषा:',
      Language: 'भाषा',
      
      // Home Page Additional
      learnMore: 'अधिक जाणा',
      realTimeIntelligence: 'रिअल-टाइम शेती बुद्धिमत्ता',
      realTimeIntelligenceDesc: 'माहितीपूर्ण शेती निर्णय घेण्यासाठी हवामान डेटा आणि माती अंतर्दृष्टी मिळवा. आमची प्रणाली अचूक सूचनांसाठी वर्तमान परिस्थिती ऐतिहासिक डेटासह जोडते.',
      mlModels: 'ML मॉडेल्स',
      accuracy: 'अचूकता',
      dataPoints: 'डेटा पॉइंट्स',
      discoverWhy: 'हजारो शेतकरी आपल्या शेती निर्णयांसाठी कृषकवर विश्वास का ठेवतात ते जाणा',
      
      // Prediction Page Additional
      backToHome: 'मुख्यपृष्ठावर परत जा',
      analysisComplete: 'विश्लेषण पूर्ण!',
      analysisCompleteDesc: 'आपले माती विश्लेषण आणि खत सूचना तयार आहेत',
      downloadDetailedReport: 'तपशीलवार अहवाल डाउनलोड करा',
      getRecommendationDesc: 'आपल्या मातीच्या स्थिती आणि हवामान डेटावर आधारित AI-चालित खत सूचना मिळवा',
      
      // Demo Page
      krushakDemo: 'कृषक डेमो',
      seeHowWorks: 'नमुना डेटासह पहा की कृषक कसे काम करते',
      sampleInputData: 'नमुना इनपुट डेटा',
      mlModelPredictions: 'ML मॉडेल अंदाज',
      soilHealthAnalysis: 'माती आरोग्य विश्लेषण',
      healthScore: 'आरोग्य स्कोर',
      overallStatus: 'एकूण स्थिती',
      keyInsights: 'मुख्य अंतर्दृष्टी',
      insights: 'अंतर्दृष्टी',
      recommendations: 'सूचना',
      readyToTry: 'हे स्वतः वापरण्यासाठी तयार आहात?',
      enterOwnData: 'आपला माती डेटा प्रविष्ट करा आणि वैयक्तिकृत सूचना मिळवा',
      startPredictingNow: 'आता अंदाज सुरू करा',
      confidence: 'आत्मविश्वास',
      machineLearningModel: 'मशीन लर्निंग मॉडेल',
      
      // Auth Pages
      welcomeBack: 'परत स्वागत आहे',
      signInAccount: 'आपल्या कृषक खात्यात साइन इन करा',
      emailAddress: 'ईमेल पत्ता',
      enterEmail: 'आपला ईमेल प्रविष्ट करा',
      password: 'पासवर्ड',
      enterPassword: 'आपला पासवर्ड प्रविष्ट करा',
      signingIn: 'साइन इन होत आहे...',
      signIn: 'साइन इन करा',
      testCredentials: 'टेस्ट क्रेडेंशियल्स',
      dontHaveAccount: 'खाते नाही?',
      signUpHere: 'येथे साइन अप करा',
      joinKrushak: 'कृषकमध्ये सामील व्हा',
      createAccount: 'सुरुवात करण्यासाठी आपले खाते तयार करा',
      fullName: 'पूर्ण नाव',
      enterFullName: 'आपले पूर्ण नाव प्रविष्ट करा',
      confirmPassword: 'पासवर्डची पुष्टी करा',
      confirmYourPassword: 'आपल्या पासवर्डची पुष्टी करा',
      createPassword: 'पासवर्ड तयार करा (किमान 6 वर्ण)',
      creatingAccount: 'खाते तयार केले जात आहे...',
      createAccountBtn: 'खाते तयार करा',
      alreadyHaveAccount: 'आधीच खाते आहे?',
      signInHere: 'येथे साइन इन करा',
      
      // Dashboard
      welcomeBackUser: 'परत स्वागत आहे, {name}! 👋',
      personalizedDashboard: 'येथे आपला वैयक्तिकृत शेती अंतर्दृष्टी डॅशबोर्ड आहे',
      totalPredictions: 'एकूण अंदाज',
      avgSoilHealth: 'सरासरी माती आरोग्य',
      mostUsedFertilizer: 'सर्वात जास्त वापरले जाणारे खत',
      quickActions: 'द्रुत क्रिया',
      makeNewPrediction: 'नवीन अंदाज करा',
      analyzeSoilHealth: 'माती आरोग्याचे विश्लेषण करा',
      predictionHistory: 'आपला अंदाज इतिहास',
      refresh: 'रिफ्रेश करा',
      noPredictionsYet: 'अद्याप कोणतेही अंदाज नाहीत',
      startFarmingJourney: 'आपला पहिला अंदाज करून आपली शेती प्रवास सुरू करा!',
      makeFirstPrediction: 'आपला पहिला अंदाज करा',
      loadingDashboard: 'आपला डॅशबोर्ड लोड होत आहे...',
      errorLoadingDashboard: 'डॅशबोर्ड लोड करताना त्रुटी',
      tryAgain: 'पुन्हा प्रयत्न करा',
      
      // Crop Health
      cropHealth: 'पिकाचे आरोग्य',
      comingSoon: 'लवकरच येत आहे: आरोग्य विश्लेषणासाठी पिकाची प्रतिमा अपलोड करा.',
      
      // Form Labels
      soilCropParameters: 'माती आणि पिक पॅरामीटर्स',
      nutrientParameters: 'पोषक तत्व पॅरामीटर्स (ppm)',
      selectSoilType: 'मातीचा प्रकार निवडा',
      selectCropType: 'पिकाचा प्रकार निवडा',
      enterCityName: 'शहराचे नाव प्रविष्ट करा (उदा., पुणे, मुंबई, दिल्ली)',
      
      // Weather
      feelsLike: 'असे वाटते',
      high: 'उ',
      low: 'न',
      humidity: 'आर्द्रता',
      wind: 'वारा',
      pressure: 'दाब',
      visibility: 'दृश्यता',
      rain1h: 'पाऊस (1तास)',
      sunrise: 'सूर्योदय',
      
      // Testimonials
      hearFromFarmers: 'शेतकऱ्यांकडून ऐका ज्यांनी कृषकसह आपल्या शेती पद्धती बदलल्या आहेत',
      
      // Status Messages
      predictionSaved: 'अंदाज यशस्वीरित्या सेव्ह केला! ते पाहण्यासाठी आपला डॅशबोर्ड पहा.',
      nameRequired: 'नाव आवश्यक आहे',
      emailRequired: 'ईमेल आवश्यक आहे',
      passwordMinLength: 'पासवर्ड किमान 6 वर्णांचा असावा',
      passwordsDoNotMatch: 'पासवर्ड जुळत नाहीत',
      unexpectedError: 'अनपेक्षित त्रुटी आली. कृपया पुन्हा प्रयत्न करा.',
      networkError: 'नेटवर्क त्रुटी किंवा सर्व्हर उपलब्ध नाही',
      failedToFetch: 'अंदाज मिळविण्यात अयशस्वी',
      loading: 'लोड होत आहे...',
      
      // Future Vision
      whatsNext: 'पुढे काय?',
      constantlyInnovating: 'आम्ही सतत नवीन तंत्रज्ञान आणत आहोत जेणेकरून तुम्हाला सर्वात प्रगत शेती तंत्रज्ञान उपाय मिळतील',
      multilingualSupport: 'बहुभाषी समर्थन',
      multilingualSupportDesc: 'भारतभरातील शेतकऱ्यांना सेवा देण्यासाठी हिंदी, मराठी, तेलुगू आणि अधिक प्रादेशिक भाषांचे पूर्ण समर्थन।',
      aiDiseaseDetection: 'AI-चालित रोग ओळख',
      aiDiseaseDetectionDesc: 'स्मार्टफोन फोटोमधून पिकांचे रोग आणि कीटक ओळखण्यासाठी प्रगत कंप्यूटर विजन।',
      marketplaceIntegration: 'मार्केटप्लेस एकीकरण',
      marketplaceIntegrationDesc: 'खत पुरवठादारांशी थेट जोडा आणि शिफारस केलेल्या उत्पादनांसाठी सर्वोत्तम किंमती मिळवा।',
      mobileApp: 'मोबाइल अॅप',
      mobileAppDesc: 'ऑफलाइन क्षमता आणि GPS एकीकरणासह Android आणि iOS साठी नेटिव्ह मोबाइल अनुप्रयोग।',
      organicFarmingFocus: 'सेंद्रिय शेती फोकस',
      organicFarmingFocusDesc: 'सेंद्रिय शेती पद्धती आणि शाश्वत शेतीसाठी विशेष सूचना।',
      realTimeAlerts: 'रिअल-टाइम अलर्ट',
      realTimeAlertsDesc: 'इष्टतम शेती निर्णय आणि पिक संरक्षणासाठी हवामान-आधारित अलर्ट आणि सूचना।',
      availableNow: 'आता उपलब्ध',
      comingSoon: 'लवकरच येत आहे',
      inDevelopment: 'विकासात',
      planned: 'नियोजित',
      bePartOfFuture: 'भविष्याचा भाग व्हा',
      joinThousandsFarmers: 'हजारो शेतकऱ्यांसोबत सामील व्हा जे आधीच कृषक वापरून त्यांच्या शेती पद्धतींमध्ये क्रांती आणत आहेत'
    }
  },
  te: {
    translation: {
      // Navigation
      home: 'హోమ్',
      prediction: 'అంచనా',
      cropHealth: 'పంట ఆరోగ్యం',
      
      // Home Page
      title: 'కృషక్: ఎరువు సిఫార్సు వ్యవస్థ',
      subtitle: 'మెరుగైన దిగుబడికి ఖచ్చితమైన, డేటా-ఆధారిత ఎరువు సిఫార్సులు।',
      startPredicting: 'అంచనా ప్రారంభించండి',
      whyKrushak: 'కృషక్ ఎందుకు?',
      accurateRecommendations: 'ఖచ్చితమైన సిఫార్సులు',
      accurateDesc: 'బహుళ ML మోడళ్లచే నడుపబడుతుంది।',
      easyToUse: 'ఉపయోగించడంలో సులభం',
      easyDesc: 'సరళమైన ఫారమ్, తక్షణ ఫలితాలు।',
      basedOnData: 'డేటాపై ఆధారపడి',
      dataDesc: 'వాస్తవ ప్రపంచ డేటాసెట్ల నుండి నిర్మించబడింది।',
      whatFarmersSay: 'రైతులు ఏమి చెబుతారు',
      
      // Prediction Page
      fertilizerPrediction: 'ఎరువు అంచనా',
      temperature: 'ఉష్ణోగ్రత (°C)',
      humidity: 'తేమ (%)',
      moisture: 'ఆర్ద్రత (%)',
      soilType: 'నేల రకం',
      cropType: 'పంట రకం',
      nitrogen: 'నత్రజని (N)',
      potassium: 'పొటాషియం (K)',
      phosphorus: 'భాస్వరం (P)',
      getRecommendation: 'సిఫార్సు పొందండి',
      predicting: 'అంచనా వేస్తున్నారు...',
      
      // Soil Health
      soilHealthAnalysis: 'నేల ఆరోగ్య విశ్లేషణ',
      healthScore: 'ఆరోగ్య స్కోర్',
      overallStatus: 'మొత్తం స్థితి',
      insights: 'అంతర్దృష్టులు',
      recommendations: 'సిఫార్సులు',
      
      // Weather
      getWeatherData: 'వాతావరణ డేటా పొందండి',
      weatherFor: 'కోసం వాతావరణం',
      currentWeather: 'ప్రస్తుత వాతావరణం',
      
      // Reports
      downloadReport: 'రిపోర్ట్ డౌన్‌లోడ్ చేయండి',
      downloadPDF: 'PDF డౌన్‌లోడ్ చేయండి',
      downloadExcel: 'Excel డౌన్‌లోడ్ చేయండి',
      
      // Footer
      contactUs: 'మమ్మల్ని సంప్రదించండి',
      getRecommendations: 'సిఫార్సులు పొందండి',
      
      // Reviews
      review1: 'కృషక్ నాకు ఖర్చులు తగ్గించడంలో మరియు పంట ఆరోగ్యాన్ని పెంచడంలో సహాయపడింది!',
      review2: 'సరళమైన మరియు ఖచ్చితమైన సిఫార్సులు। అత్యంత సిఫార్సు చేయబడింది।',
      review3: 'అద్భుతమైన UI మరియు నా పొలాలకు చర్యగ్రహించదగిన సూచనలు।',
      
      // Status
      excellent: 'అద్భుతమైన',
      good: 'మంచిది',
      fair: 'సరసమైన',
      poor: 'చెడ్డది',
      
      // About Page
      backToHome: 'హోమ్‌కు తిరిగి వెళ్ళండి',
      aboutKrushak: 'కృషక్ గురించి',
      empoweringFarmers: 'రైతులను AI-ఆధారిత వ్యవసాయ అంతర్దృష్టులతో శక్తివంతం చేయడం',
      ourMission: 'మా లక్ష్యం',
      missionText: 'కృషక్ కట్టింగ్-ఎడ్జ్ టెక్నాలజీ ద్వారా వ్యవసాయంలో విప్లవం తీసుకురావడానికి అంకితమైనది. మేము రైతులకు తెలివైన ఎరువు సిఫార్సులు, నేల ఆరోగ్య విశ్లేషణ, మరియు వాతావరణ అంతర్దృష్టులను అందిస్తాము, ఇది స్థిరమైన వ్యవసాయ పద్ధతులను ప్రోత్సహిస్తూ పంట దిగుబడిని గరిష్టీకరించడానికి సహాయపడుతుంది.',
      aiPoweredAnalysis: 'AI-ఆధారిత విశ్లేషణ',
      aiAnalysisText: 'మా అధునాతన మెషిన్ లెర్నింగ్ మోడళ్లు నేల కూర్పు, వాతావరణ నమూనాలు, మరియు పంట అవసరాలను విశ్లేషించి ఖచ్చితమైన ఎరువు సిఫార్సులను అందిస్తాయి.',
      farmerCentricDesign: 'రైతు-కేంద్రీకృత డిజైన్',
      farmerCentricText: 'రైతులను మనస్సులో ఉంచుకొని నిర్మించబడిన, మా ప్లాట్‌ఫారమ్ బహుళ భాషలకు మద్దతు ఇస్తుంది మరియు అన్ని సాంకేతిక నేపథ్యాల వినియోగదారులకు సహజమైన ఇంటర్‌ఫేస్‌లను అందిస్తుంది.',
      realTimeInsights: 'రియల్-టైమ్ అంతర్దృష్టులు',
      realTimeText: 'తక్షణ వాతావరణ నవీకరణలు, నేల ఆరోగ్య అంచనాలు, మరియు వ్యక్తిగతీకరించిన సిఫార్సులను పొందండి, తద్వారా మీ పంటల కోసం సమాచార-ఆధారిత నిర్ణయాలు తీసుకోవచ్చు.',
      sustainableAgriculture: 'స్థిరమైన వ్యవసాయం',
      sustainableText: 'పర్యావరణ ప్రభావాన్ని తగ్గిస్తూ పంట ఉత్పాదకతను మెరుగుపరచడానికి ఆప్టిమైజ్ చేసిన ఎరువు వినియోగంతో పర్యావరణ-స్నేహపూర్వక వ్యవసాయ పద్ధతులను ప్రోత్సహించండి.',
      technologyStack: 'టెక్నాలజీ స్టాక్',
      machineLearning: 'మెషిన్ లెర్నింగ్',
      machineLearningText: 'డెసిజన్ ట్రీ, రాండమ్ ఫారెస్ట్, లాజిస్టిక్ రిగ్రెషన్, SVM, నైవ్ బేయస్',
      dataSources: 'డేటా వనరులు',
      dataSourcesText: 'ఓపెన్‌వెదర్ API, నేల విశ్లేషణ డేటా, వ్యవసాయ పరిశోధన డేటాసెట్‌లు',
      languages: 'భాషలు',
      languagesText: 'ఇంగ్లీష్, హిందీ, మరాఠీ, తెలుగు మరియు త్వరలో మరిన్ని',
      
      // How It Works
      howKrushakWorks: 'కృషక్ ఎలా పనిచేస్తుంది',
      howKrushakWorksDesc: 'మా AI-ఆధారిత వ్యవస్థ మీ నేల డేటాను విశ్లేషిస్తుంది మరియు కేవలం మూడు సాధారణ దశలలో ఖచ్చితమైన ఎరువు సిఫార్సులను అందిస్తుంది.',
      enterSoilValues: 'నేల విలువలను నమోదు చేయండి',
      enterSoilValuesDesc: 'మీ నేల పారామితులను నమోదు చేయండి: నత్రజని, భాస్వరం, పొటాషియం, ఉష్ణోగ్రత, మరియు తేమ స్థాయి.',
      mlModelsAnalyze: 'ML మోడళ్లు విశ్లేషణ',
      mlModelsAnalyzeDesc: 'మా అధునాతన మెషిన్ లెర్నింగ్ మోడళ్లు డెసిజన్ ట్రీ, రాండమ్ ఫారెస్ట్, మరియు ఇతర అల్గోరిథమ్‌లను ఉపయోగించి మీ డేటాను ప్రాసెస్ చేస్తాయి.',
      getRecommendations: 'సిఫార్సులు పొందండి',
      getRecommendationsDesc: 'విశ్వాస స్కోర్‌లు మరియు నేల ఆరోగ్య అంతర్దృష్టులతో వ్యక్తిగతీకరించిన ఎరువు సిఫార్సులను పొందండి.',
      
      // Weather Widget
      weatherData: 'వాతావరణ డేటా',
      cityName: 'నగరం పేరు',
      getWeather: 'వాతావరణం పొందండి',
      loading: 'లోడ్ అవుతోంది...',
      weatherDataUnavailable: 'వాతావరణ డేటా అందుబాటులో లేదు',
      temperature: 'ఉష్ణోగ్రత',
      humidity: 'తేమ',
      condition: 'స్థితి',
      wind: 'గాలి',
      rainfall: 'వర్షపాతం',
      lastHour: 'గత గంట',
      
      // Enhanced CTA
      readyToGetStarted: 'ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?',
      ctaDescription: 'కృషక్ యొక్క శక్తివంతమైన ఎరువు సిఫార్సు వ్యవస్థను ఎలా అనుభవించాలనుకుంటున్నారో ఎంచుకోండి',
      startPredicting: 'అంచనా ప్రారంభించండి',
      startPredictingDesc: 'మీ నేల డేటాను నమోదు చేయండి మరియు తక్షణ ఎరువు సిఫార్సులను పొందండి',
      viewDemo: 'డెమో చూడండి',
      viewDemoDesc: 'నమూనా డేటాతో కృషక్ ఎలా పనిచేస్తుందో చూడండి మరియు అన్ని లక్షణాలను అన్వేషించండి',
      sampleReport: 'నమూనా నివేదిక',
      sampleReportDesc: 'వివరణాత్మక విశ్లేషణ ఫార్మాట్ చూడటానికి నమూనా PDF నివేదికను డౌన్‌లోడ్ చేయండి',
      downloadSample: 'నమూనా డౌన్‌లోడ్ చేయండి',
      allFeaturesFree: 'అన్ని లక్షణాలు ఉచితంగా ఉపయోగించండి • నమోదు అవసరం లేదు • తక్షణ ఫలితాలు',
      
      // Navigation & Auth
      dashboard: 'డ్యాష్‌బోర్డ్',
      login: 'లాగిన్',
      signUp: 'సైన్ అప్',
      logout: 'లాగ్‌అవుట్',
      language: 'భాష:',
      Language: 'భాష',
      
      // Home Page Additional
      learnMore: 'మరింత తెలుసుకోండి',
      realTimeIntelligence: 'రియల్-టైమ్ వ్యవసాయ బుద్ధిమత్త',
      realTimeIntelligenceDesc: 'సమాచార-ఆధారిత వ్యవసాయ నిర్ణయాలు తీసుకోవడానికి వాతావరణ డేటా మరియు నేల అంతర్దృష్టులను పొందండి. మా వ్యవస్థ ఖచ్చితమైన సిఫార్సుల కోసం ప్రస్తుత పరిస్థితులను చారిత్రక డేటాతో కలుపుతుంది.',
      mlModels: 'ML మోడళ్లు',
      accuracy: 'ఖచ్చితత్వం',
      dataPoints: 'డేటా పాయింట్లు',
      discoverWhy: 'వేలాది రైతులు తమ వ్యవసాయ నిర్ణయాల కోసం కృషక్‌పై ఎందుకు నమ్మకం ఉంచుతారో తెలుసుకోండి',
      
      // Prediction Page Additional
      backToHome: 'హోమ్‌కు తిరిగి వెళ్ళండి',
      analysisComplete: 'విశ్లేషణ పూర్తయింది!',
      analysisCompleteDesc: 'మీ నేల విశ్లేషణ మరియు ఎరువు సిఫార్సులు సిద్ధంగా ఉన్నాయి',
      downloadDetailedReport: 'వివరణాత్మక నివేదికను డౌన్‌లోడ్ చేయండి',
      getRecommendationDesc: 'మీ నేల పరిస్థితులు మరియు వాతావరణ డేటాపై ఆధారపడి AI-ఆధారిత ఎరువు సిఫార్సులను పొందండి',
      
      // Demo Page
      krushakDemo: 'కృషక్ డెమో',
      seeHowWorks: 'నమూనా డేటాతో కృషక్ ఎలా పనిచేస్తుందో చూడండి',
      sampleInputData: 'నమూనా ఇన్‌పుట్ డేటా',
      mlModelPredictions: 'ML మోడల్ అంచనాలు',
      soilHealthAnalysis: 'నేల ఆరోగ్య విశ్లేషణ',
      healthScore: 'ఆరోగ్య స్కోర్',
      overallStatus: 'మొత్తం స్థితి',
      keyInsights: 'ముఖ్య అంతర్దృష్టులు',
      insights: 'అంతర్దృష్టులు',
      recommendations: 'సిఫార్సులు',
      readyToTry: 'దీన్ని మీరే ప్రయత్నించడానికి సిద్ధంగా ఉన్నారా?',
      enterOwnData: 'మీ నేల డేటాను నమోదు చేయండి మరియు వ్యక్తిగతీకరించిన సిఫార్సులను పొందండి',
      startPredictingNow: 'ఇప్పుడే అంచనా ప్రారంభించండి',
      confidence: 'విశ్వాసం',
      machineLearningModel: 'మెషిన్ లెర్నింగ్ మోడల్',
      
      // Auth Pages
      welcomeBack: 'మళ్లీ స్వాగతం',
      signInAccount: 'మీ కృషక్ ఖాతాలో సైన్ ఇన్ చేయండి',
      emailAddress: 'ఇమెయిల్ చిరునామా',
      enterEmail: 'మీ ఇమెయిల్‌ను నమోదు చేయండి',
      password: 'పాస్‌వర్డ్',
      enterPassword: 'మీ పాస్‌వర్డ్‌ను నమోదు చేయండి',
      signingIn: 'సైన్ ఇన్ అవుతోంది...',
      signIn: 'సైన్ ఇన్ చేయండి',
      testCredentials: 'పరీక్షా ధృవీకరణలు',
      dontHaveAccount: 'ఖాతా లేదా?',
      signUpHere: 'ఇక్కడ సైన్ అప్ చేయండి',
      joinKrushak: 'కృషక్‌లో చేరండి',
      createAccount: 'ప్రారంభించడానికి మీ ఖాతాను సృష్టించండి',
      fullName: 'పూర్తి పేరు',
      enterFullName: 'మీ పూర్తి పేరును నమోదు చేయండి',
      confirmPassword: 'పాస్‌వర్డ్‌ను నిర్ధారించండి',
      confirmYourPassword: 'మీ పాస్‌వర్డ్‌ను నిర్ధారించండి',
      createPassword: 'పాస్‌వర్డ్ సృష్టించండి (కనీసం 6 అక్షరాలు)',
      creatingAccount: 'ఖాతా సృష్టించబడుతోంది...',
      createAccountBtn: 'ఖాతా సృష్టించండి',
      alreadyHaveAccount: 'ఇప్పటికే ఖాతా ఉందా?',
      signInHere: 'ఇక్కడ సైన్ ఇన్ చేయండి',
      
      // Dashboard
      welcomeBackUser: 'మళ్లీ స్వాగతం, {name}! 👋',
      personalizedDashboard: 'ఇక్కడ మీ వ్యక్తిగతీకరించిన వ్యవసాయ అంతర్దృష్టి డ్యాష్‌బోర్డ్ ఉంది',
      totalPredictions: 'మొత్తం అంచనాలు',
      avgSoilHealth: 'సగటు నేల ఆరోగ్యం',
      mostUsedFertilizer: 'ఎక్కువగా ఉపయోగించిన ఎరువు',
      quickActions: 'త్వరిత చర్యలు',
      makeNewPrediction: 'కొత్త అంచనా చేయండి',
      analyzeSoilHealth: 'నేల ఆరోగ్యాన్ని విశ్లేషించండి',
      predictionHistory: 'మీ అంచనా చరిత్ర',
      refresh: 'రిఫ్రెష్ చేయండి',
      noPredictionsYet: 'ఇంకా అంచనాలు లేవు',
      startFarmingJourney: 'మీ మొదటి అంచనా చేసి మీ వ్యవసాయ ప్రయాణాన్ని ప్రారంభించండి!',
      makeFirstPrediction: 'మీ మొదటి అంచనా చేయండి',
      loadingDashboard: 'మీ డ్యాష్‌బోర్డ్ లోడ్ అవుతోంది...',
      errorLoadingDashboard: 'డ్యాష్‌బోర్డ్ లోడ్ చేయడంలో లోపం',
      tryAgain: 'మళ్లీ ప్రయత్నించండి',
      
      // Crop Health
      cropHealth: 'పంట ఆరోగ్యం',
      comingSoon: 'త్వరలో వస్తోంది: ఆరోగ్య విశ్లేషణ కోసం పంట చిత్రాన్ని అప్‌లోడ్ చేయండి.',
      
      // Form Labels
      soilCropParameters: 'నేల మరియు పంట పారామితులు',
      nutrientParameters: 'పోషక పదార్థ పారామితులు (ppm)',
      selectSoilType: 'నేల రకాన్ని ఎంచుకోండి',
      selectCropType: 'పంట రకాన్ని ఎంచుకోండి',
      enterCityName: 'నగరం పేరును నమోదు చేయండి (ఉదా., పూణే, ముంబై, ఢిల్లీ)',
      
      // Weather
      feelsLike: 'అనుభవపడుతోంది',
      high: 'ఎ',
      low: 'న',
      humidity: 'తేమ',
      wind: 'గాలి',
      pressure: 'ఒత్తిడి',
      visibility: 'దృశ్యత',
      rain1h: 'వర్షం (1గం)',
      sunrise: 'సూర్యోదయం',
      
      // Testimonials
      hearFromFarmers: 'కృషక్‌తో తమ వ్యవసాయ పద్ధతులను మార్చుకున్న రైతుల నుండి వినండి',
      
      // Status Messages
      predictionSaved: 'అంచనా విజయవంతంగా సేవ్ చేయబడింది! దాన్ని చూడటానికి మీ డ్యాష్‌బోర్డ్‌ను చూడండి.',
      nameRequired: 'పేరు అవసరం',
      emailRequired: 'ఇమెయిల్ అవసరం',
      passwordMinLength: 'పాస్‌వర్డ్ కనీసం 6 అక్షరాలుగా ఉండాలి',
      passwordsDoNotMatch: 'పాస్‌వర్డ్‌లు సరిపోవు',
      unexpectedError: 'అనుకోని లోపం సంభవించింది. దయచేసి మళ్లీ ప్రయత్నించండి.',
      networkError: 'నెట్‌వర్క్ లోపం లేదా సర్వర్ అందుబాటులో లేదు',
      failedToFetch: 'అంచనాలను పొందడంలో విఫలమయ్యింది',
      loading: 'లోడ్ అవుతోంది...',
      
      // Future Vision
      whatsNext: 'తదుపరి ఏమిటి?',
      constantlyInnovating: 'మీకు అత్యంత అధునాతన వ్యవసాయ సాంకేతిక పరిష్కారాలను అందించడానికి మేము నిరంతరం నవీకరిస్తున్నాము',
      multilingualSupport: 'బహుభాషా మద్దతు',
      multilingualSupportDesc: 'భారతదేశంలోని రైతులకు సేవ చేయడానికి హిందీ, మరాఠీ, తెలుగు మరియు మరిన్ని ప్రాంతీయ భాషలకు పూర్తి మద్దతు।',
      aiDiseaseDetection: 'AI-ఆధారిత వ్యాధి గుర్తింపు',
      aiDiseaseDetectionDesc: 'స్మార్ట్‌ఫోన్ ఫోటోల నుండి పంట వ్యాధులు మరియు కీటకాలను గుర్తించడానికి అధునాతన కంప్యూటర్ విజన్।',
      marketplaceIntegration: 'మార్కెట్‌ప్లేస్ ఇంటిగ్రేషన్',
      marketplaceIntegrationDesc: 'ఎరువు సరఫరాదారులతో నేరుగా కనెక్ట్ అవండి మరియు సిఫార్సు చేసిన ఉత్పాదకాలకు ఉత్తమ ధరలను పొందండి।',
      mobileApp: 'మొబైల్ అప్',
      mobileAppDesc: 'ఆఫ్‌లైన్ సామర్థ్యాలు మరియు GPS ఇంటిగ్రేషన్‌తో Android మరియు iOS కోసం నేటివ్ మొబైల్ అప్లికేషన్।',
      organicFarmingFocus: 'సేంద్రీయ వ్యవసాయ ఫోకస్',
      organicFarmingFocusDesc: 'సేంద్రీయ వ్యవసాయ పద్ధతులు మరియు స్థిరమైన వ్యవసాయం కోసం ప్రత్యేక సిఫార్సులు।',
      realTimeAlerts: 'రియల్-టైమ్ అలర్ట్‌లు',
      realTimeAlertsDesc: 'అనుకూల వ్యవసాయ నిర్ణయాలు మరియు పంట రక్షణ కోసం వాతావరణ-ఆధారిత అలర్ట్‌లు మరియు నోటిఫికేషన్‌లు।',
      availableNow: 'ఇప్పుడు అందుబాటులో',
      comingSoon: 'త్వరలో వస్తోంది',
      inDevelopment: 'అభివృద్ధిలో',
      planned: 'ప్లాన్ చేయబడింది',
      bePartOfFuture: 'భవిష్యత్తులో భాగం అవండి',
      joinThousandsFarmers: 'వేలాది రైతులతో చేరండి వారు ఇప్పటికే కృషక్‌ను ఉపయోగించి వారి వ్యవసాయ పద్ధతులలో విప్లవం తీసుకురావడానికి'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
