# Krushak Authentication Setup Guide

This guide will help you set up and test the complete authentication system with MongoDB Atlas integration.

## 🚀 Quick Start Commands

### 1. Backend Setup
```bash
# Navigate to backend directory
cd krushak/backend

# Install dependencies (if not already done)
pip3 install -r requirements.txt

# Create .env file with your MongoDB Atlas credentials
echo "MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/krushak_db?retryWrites=true&w=majority" > .env
echo "SECRET_KEY=your-super-secret-jwt-key-here" >> .env
echo "PORT=5000" >> .env

# Start the backend server
python3 app.py
```

### 2. Frontend Setup
```bash
# Navigate to frontend directory (in a new terminal)
cd krushak/frontend

# Install dependencies (if not already done)
npm install

# Start the frontend development server
npm run dev
```

### 3. Test Authentication Flow
```bash
# In a new terminal, run the test script
cd krushak
python3 test_auth_flow.py
```

## 🔧 Configuration

### Backend Environment Variables (.env)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/krushak_db?retryWrites=true&w=majority
SECRET_KEY=your-super-secret-jwt-key-here
PORT=5000
FLASK_ENV=development
```

### Frontend Environment Variables (.env)
```env
VITE_API_URL=http://localhost:5000
```

## 🧪 Testing the System

### 1. Backend Tests
Run the test script to verify all authentication endpoints:
```bash
python3 test_auth_flow.py
```

### 2. Frontend Tests
1. Open http://localhost:5173
2. Click "Sign Up" to create a new account
3. Fill in the signup form and submit
4. Click "Sign In" and login with your credentials
5. Navigate to "Dashboard" to see your profile
6. Go to "Prediction" to make a fertilizer prediction
7. Return to "Dashboard" to see your saved predictions

## 🔍 Troubleshooting

### MongoDB Connection Issues
If you see SSL handshake errors:
1. Ensure your MongoDB Atlas cluster is running
2. Check if your IP is whitelisted in MongoDB Atlas
3. Verify your connection string is correct
4. The backend will try multiple connection methods automatically

### Frontend Issues
If the frontend can't connect to the backend:
1. Ensure the backend is running on port 5000
2. Check the VITE_API_URL in frontend/.env
3. Look for CORS errors in browser console

### Authentication Issues
If login/signup fails:
1. Check backend logs for error messages
2. Verify JWT_SECRET_KEY is set in backend/.env
3. Ensure MongoDB is accessible and user collection exists

## 📋 Features Implemented

### Backend Features
- ✅ MongoDB Atlas connection with SSL handling
- ✅ User registration with password hashing
- ✅ JWT-based authentication
- ✅ Protected routes with middleware
- ✅ User prediction history storage
- ✅ Comprehensive error handling

### Frontend Features
- ✅ Modern signup/login forms with validation
- ✅ Protected routes with automatic redirects
- ✅ User dashboard with prediction history
- ✅ Responsive navigation with user profile
- ✅ Automatic prediction saving for logged-in users
- ✅ Loading states and error handling

### Security Features
- ✅ Password hashing with bcrypt
- ✅ JWT token expiration (1 hour)
- ✅ Protected API endpoints
- ✅ Input validation and sanitization
- ✅ Secure MongoDB connection

## 🎯 User Flow

1. **Signup**: User creates account with name, email, password
2. **Login**: User authenticates with email/password
3. **Dashboard**: Personalized view with prediction history and stats
4. **Prediction**: Make fertilizer predictions (automatically saved)
5. **History**: View all past predictions with details
6. **Logout**: Secure logout with token cleanup

## 🔄 Next Steps

After successful setup:
1. Test all user flows end-to-end
2. Customize the UI/UX as needed
3. Add additional features like user profile editing
4. Implement password reset functionality
5. Add email verification for new accounts

## 📞 Support

If you encounter issues:
1. Check the backend logs for detailed error messages
2. Verify all environment variables are set correctly
3. Ensure MongoDB Atlas cluster is accessible
4. Test individual API endpoints using the test script
