# 🚀 Krushak Deployment Guide

This guide will help you deploy the Krushak application to production using:
- **Backend (Flask API)** → **Render** (Free tier)
- **Frontend (React)** → **Vercel** (Free tier)
- **Database** → **MongoDB Atlas** (Free tier)

## 📋 Prerequisites

1. **GitHub Repository**: Your code should be pushed to GitHub
2. **MongoDB Atlas Account**: [Sign up here](https://www.mongodb.com/atlas)
3. **Render Account**: [Sign up here](https://render.com)
4. **Vercel Account**: [Sign up here](https://vercel.com)

## 🗄️ Step 1: Setup MongoDB Atlas

### 1.1 Create MongoDB Atlas Cluster
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new account or sign in
3. Click "Create" → "Cluster"
4. Choose "FREE" tier (M0 Sandbox)
5. Select a region close to your users
6. Name your cluster (e.g., "krushak-cluster")
7. Click "Create Cluster"

### 1.2 Configure Database Access
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create a username and password (save these!)
5. Set privileges to "Atlas admin" or "Read and write to any database"
6. Click "Add User"

### 1.3 Configure Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Choose "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### 1.4 Get Connection String
1. Go to "Clusters" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string (it looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
5. Replace `<password>` with your actual password
6. Add database name: `?retryWrites=true&w=majority&appName=krushak`

**Final connection string format:**
```
mongodb+srv://username:password@cluster.mongodb.net/krushak?retryWrites=true&w=majority
```

## 🔧 Step 2: Deploy Backend to Render

### 2.1 Connect GitHub Repository
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub account
4. Select your "Krushak" repository
5. Click "Connect"

### 2.2 Configure Backend Service
1. **Name**: `krushak-backend`
2. **Root Directory**: `krushak/backend`
3. **Environment**: `Python 3`
4. **Build Command**: `pip install -r requirements.txt && python train.py`
5. **Start Command**: `python app.py`

### 2.3 Set Environment Variables
In the Render dashboard, go to "Environment" tab and add:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/krushak?retryWrites=true&w=majority
SECRET_KEY=your-super-secret-jwt-key-here-make-it-long-and-random
PORT=10000
```

### 2.4 Deploy
1. Click "Create Web Service"
2. Wait for deployment to complete (5-10 minutes)
3. Note your backend URL (e.g., `https://krushak-backend.onrender.com`)

### 2.5 Test Backend
```bash
curl https://your-backend-url.onrender.com/api/health
```

## ⚛️ Step 3: Deploy Frontend to Vercel

### 3.1 Connect GitHub Repository
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Select "Krushak" repository

### 3.2 Configure Frontend Project
1. **Framework Preset**: `Vite`
2. **Root Directory**: `krushak/frontend`
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`

### 3.3 Set Environment Variables
In Vercel dashboard, go to "Settings" → "Environment Variables" and add:

```
VITE_API_URL=https://your-backend-url.onrender.com
```

### 3.4 Deploy
1. Click "Deploy"
2. Wait for deployment to complete (2-3 minutes)
3. Note your frontend URL (e.g., `https://krushak-frontend.vercel.app`)

## 🔗 Step 4: Update CORS Settings

### 4.1 Update Backend CORS
In your `krushak/backend/app.py`, ensure CORS is configured for your frontend domain:

```python
CORS(app, origins=[
    "http://localhost:5173",  # Development
    "https://your-frontend-url.vercel.app"  # Production
])
```

### 4.2 Redeploy Backend
1. Push changes to GitHub
2. Render will automatically redeploy

## 🧪 Step 5: Test Complete Application

### 5.1 Test Frontend
1. Open your Vercel URL
2. Try creating an account
3. Test the prediction functionality
4. Verify all features work

### 5.2 Test API Endpoints
```bash
# Health check
curl https://your-backend-url.onrender.com/api/health

# Test prediction
curl -X POST https://your-backend-url.onrender.com/api/predict \
  -H 'Content-Type: application/json' \
  -d '{
    "Temparature": 25,
    "Humidity": 60,
    "Moisture": 40,
    "Soil_Type": "Loamy",
    "Crop_Type": "Wheat",
    "Nitrogen": 20,
    "Potassium": 20,
    "Phosphorous": 20
  }'
```

## 🔧 Step 6: Configure Custom Domains (Optional)

### 6.1 Backend Custom Domain (Render)
1. Go to your service in Render dashboard
2. Click "Settings" → "Custom Domains"
3. Add your domain (e.g., `api.krushak.com`)
4. Update DNS records as instructed

### 6.2 Frontend Custom Domain (Vercel)
1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `krushak.com`)
4. Update DNS records as instructed

## 📊 Step 7: Monitor and Maintain

### 7.1 Monitor Backend (Render)
- Check logs in Render dashboard
- Monitor resource usage
- Set up alerts for downtime

### 7.2 Monitor Frontend (Vercel)
- Check deployment status
- Monitor performance metrics
- Set up analytics

### 7.3 Monitor Database (MongoDB Atlas)
- Check cluster status
- Monitor storage usage
- Set up alerts

## 🚨 Troubleshooting

### Common Issues

#### Backend Issues
- **Build fails**: Check requirements.txt and Python version
- **Database connection fails**: Verify MongoDB URI and network access
- **CORS errors**: Update CORS origins with frontend URL

#### Frontend Issues
- **API calls fail**: Check VITE_API_URL environment variable
- **Build fails**: Check for TypeScript errors and dependencies
- **Routing issues**: Ensure vercel.json is configured correctly

#### Database Issues
- **Connection timeout**: Check network access settings
- **Authentication fails**: Verify username/password in connection string
- **Database not found**: Ensure database name is correct

### Debug Commands

```bash
# Check backend logs
# (In Render dashboard → Logs)

# Check frontend build
cd krushak/frontend
npm run build

# Test API locally
curl http://localhost:5000/api/health
```

## 📈 Performance Optimization

### Backend Optimization
- Enable gzip compression
- Add caching headers
- Optimize database queries
- Use connection pooling

### Frontend Optimization
- Enable Vercel's edge functions
- Optimize images and assets
- Use CDN for static files
- Implement lazy loading

## 🔒 Security Considerations

### Backend Security
- Use strong JWT secrets
- Implement rate limiting
- Validate all inputs
- Use HTTPS only

### Frontend Security
- Sanitize user inputs
- Use HTTPS only
- Implement proper error handling
- Validate API responses

## 📞 Support

If you encounter issues:
1. Check the logs in Render/Vercel dashboards
2. Verify environment variables
3. Test API endpoints individually
4. Check MongoDB Atlas cluster status

## 🎉 Success!

Once deployed, your Krushak application will be available at:
- **Frontend**: `https://your-frontend-url.vercel.app`
- **Backend API**: `https://your-backend-url.onrender.com`
- **Database**: MongoDB Atlas cluster

Your AI-powered fertilizer recommendation system is now live and accessible to farmers worldwide! 🌱
