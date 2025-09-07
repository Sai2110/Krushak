#!/bin/bash

# Krushak Deployment Script
echo "🌱 Krushak Deployment Script"
echo "=============================="

# Check if we're in the right directory
if [ ! -f "README.md" ]; then
    echo "❌ Error: Please run this script from the root directory of the Krushak project"
    exit 1
fi

echo "✅ Found Krushak project directory"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Git repository not found. Please initialize git first:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial commit'"
    exit 1
fi

echo "✅ Git repository found"

# Check if all files are committed
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Warning: You have uncommitted changes. Please commit them first:"
    echo "   git add ."
    echo "   git commit -m 'Prepare for deployment'"
    echo ""
    read -p "Do you want to continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "✅ Git status clean"

# Check if remote origin is set
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ Error: No remote origin found. Please add your GitHub repository:"
    echo "   git remote add origin https://github.com/yourusername/Krushak.git"
    exit 1
fi

echo "✅ Remote origin found"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub"
else
    echo "❌ Failed to push to GitHub"
    exit 1
fi

echo ""
echo "🚀 Deployment Preparation Complete!"
echo "=============================="
echo ""
echo "Next steps:"
echo "1. 📊 Set up MongoDB Atlas:"
echo "   - Create a free cluster at https://www.mongodb.com/atlas"
echo "   - Get your connection string"
echo ""
echo "2. 🔧 Deploy Backend to Render:"
echo "   - Go to https://render.com"
echo "   - Connect your GitHub repository"
echo "   - Create a new Web Service"
echo "   - Root Directory: krushak/backend"
echo "   - Build Command: pip install -r requirements.txt && python train.py"
echo "   - Start Command: python app.py"
echo "   - Set environment variables (MONGODB_URI, SECRET_KEY)"
echo ""
echo "3. ⚛️ Deploy Frontend to Vercel:"
echo "   - Go to https://vercel.com"
echo "   - Import your GitHub repository"
echo "   - Root Directory: krushak/frontend"
echo "   - Set VITE_API_URL to your Render backend URL"
echo ""
echo "4. 📖 Follow the detailed guide in DEPLOYMENT.md"
echo ""
echo "Good luck with your deployment! 🌱"
