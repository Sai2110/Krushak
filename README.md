# 🌱 Krushak: AI-Powered Fertilizer Recommendation System

[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://python.org)
[![React](https://img.shields.io/badge/React-18+-61dafb.svg)](https://reactjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38b2ac.svg)](https://tailwindcss.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green.svg)](https://mongodb.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Online-brightgreen.svg)](https://krushak-app.vercel.app)

A comprehensive full-stack application that uses machine learning to provide intelligent fertilizer recommendations for farmers. Built with Flask backend, React frontend, and MongoDB Atlas integration.

## 🌐 Live Demo

**🚀 [Try the Application Live](https://krushak-app.vercel.app)**

Experience the full functionality of Krushak with real-time predictions, multi-language support, and comprehensive reporting.

## ✨ Features

### 🤖 **Machine Learning**
- **5 ML Models**: Random Forest, Decision Tree, Logistic Regression, SVM, and Naive Bayes
- **High Accuracy**: 92%+ prediction accuracy with confidence scoring
- **Soil Health Analysis**: Comprehensive soil parameter analysis with health scoring
- **Real-time Predictions**: Instant fertilizer recommendations based on soil and weather data

### 🌍 **Multi-Language Support**
- **4 Languages**: English, Hindi, Marathi, and Telugu
- **Dynamic Translation**: Real-time language switching across the entire application
- **Regional Focus**: Designed specifically for Indian farmers

### 📱 **Responsive Design**
- **Mobile-First**: Fully responsive across all devices (mobile, tablet, desktop)
- **Touch-Friendly**: Optimized for mobile farming environments
- **Modern UI**: Clean, intuitive interface with Tailwind CSS

### 🔐 **User Authentication**
- **Secure Login/Signup**: JWT-based authentication system
- **User Dashboard**: Personalized prediction history and analytics
- **Data Persistence**: MongoDB Atlas integration for user data storage

### 🌤️ **Weather Integration**
- **Real-time Weather**: OpenWeather API integration for current conditions
- **Location-based**: City-specific weather data for accurate recommendations
- **Auto-fill**: Weather data automatically populates form fields

### 📊 **Comprehensive Reporting**
- **PDF Reports**: Detailed analysis reports with charts and recommendations
- **Excel Export**: Data export for further analysis
- **Multi-language Reports**: Reports generated in user's preferred language

## 🚀 Quick Start

### Option 1: Try the Live Demo
**🌐 [Access the deployed application](https://krushak-app.vercel.app)** - No setup required!

### Option 2: Run Locally

### Prerequisites
- Python 3.9+
- Node.js 18+
- MongoDB Atlas account

### 1. Clone the Repository
```bash
git clone https://github.com/Sai2110/Krushak.git
cd Krushak
```

### 2. Backend Setup
```bash
cd krushak/backend

# Install dependencies
pip install -r requirements.txt

# Create environment file
echo "MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/krushak_db?retryWrites=true&w=majority" > .env
echo "SECRET_KEY=your-super-secret-jwt-key-here" >> .env

# Train ML models
python train.py

# Start the server
python app.py
```

### 3. Frontend Setup
```bash
cd krushak/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Access the Application
Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
Krushak/
├── krushak/
│   ├── backend/
│   │   ├── app.py                 # Flask API server
│   │   ├── train.py              # ML model training
│   │   ├── requirements.txt      # Python dependencies
│   │   ├── models/               # Trained ML models
│   │   └── f2.csv               # Training dataset
│   └── frontend/
│       ├── src/
│       │   ├── pages/            # React pages
│       │   ├── components/       # Reusable components
│       │   ├── i18n/            # Translation files
│       │   └── context/         # React context providers
│       └── package.json
└── README.md
```

## 🎯 How It Works

1. **Data Input**: Farmers enter soil parameters, crop type, and weather data
2. **ML Processing**: 5 machine learning models analyze the data
3. **Prediction**: Models provide fertilizer recommendations with confidence scores
4. **Analysis**: Soil health analysis with insights and recommendations
5. **Reporting**: Generate detailed reports in PDF or Excel format

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Predictions
- `POST /api/predict` - Get fertilizer recommendations
- `GET /api/predictions` - Get user's prediction history
- `POST /api/predictions` - Save prediction to user history

### Weather
- `GET /api/weather?city=XYZ` - Get weather data for a city

### Reports
- `POST /api/download-report/pdf` - Generate PDF report
- `POST /api/download-report/excel` - Generate Excel report

## 🛠️ Technologies Used

### Backend
- **Python 3.9+**
- **Flask** - Web framework
- **scikit-learn** - Machine learning
- **MongoDB Atlas** - Database
- **JWT** - Authentication
- **OpenWeather API** - Weather data

### Frontend
- **React 18+**
- **Tailwind CSS** - Styling
- **react-i18next** - Internationalization
- **Recharts** - Data visualization
- **Vite** - Build tool

## 📱 Screenshots

### Desktop View
![Desktop View](https://via.placeholder.com/800x400/22c55e/ffffff?text=Desktop+View)

### Mobile View
![Mobile View](https://via.placeholder.com/400x800/22c55e/ffffff?text=Mobile+View)

### Dashboard
![Dashboard](https://via.placeholder.com/800x400/16a34a/ffffff?text=User+Dashboard)

## 🌍 Multi-Language Support

The application supports 4 languages:
- **English** (EN)
- **Hindi** (हिन्दी)
- **Marathi** (मराठी)
- **Telugu** (తెలుగు)

Language switching is available throughout the application and affects all text, including generated reports.

## 📊 Machine Learning Models

| Model | Accuracy | Use Case |
|-------|----------|----------|
| Random Forest | 92%+ | Primary recommendation engine |
| Decision Tree | 87%+ | Interpretable predictions |
| Logistic Regression | 84%+ | Linear relationship analysis |
| SVM | 89%+ | Complex pattern recognition |
| Naive Bayes | 82%+ | Probabilistic classification |

## 🔧 Configuration

### Environment Variables
```bash
# Backend (.env)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/krushak_db
SECRET_KEY=your-super-secret-jwt-key-here

# Frontend (.env)
VITE_API_URL=http://localhost:5000
```

### Weather API
Get your free API key from [OpenWeather](https://openweathermap.org/api) and update the `API_KEY` in `weather_service.py`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Sai2110** - *Initial work* - [GitHub](https://github.com/Sai2110)

## 🙏 Acknowledgments

- OpenWeather API for weather data
- scikit-learn for machine learning algorithms
- React and Tailwind CSS communities
- Indian farming community for feedback and requirements

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact us at [your-email@example.com]
- Check the [documentation](docs/) for detailed guides

---

**Made with ❤️ for Indian Farmers**

*Empowering agriculture through artificial intelligence and modern technology.*
