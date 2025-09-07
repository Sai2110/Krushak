#!/usr/bin/env python3
"""
Test script to verify the complete authentication flow and MongoDB connection.
Run this after starting the backend server to test the authentication system.
"""

import requests
import json
import time

# Configuration
BASE_URL = "http://localhost:5000"
API_URL = f"{BASE_URL}/api"

def test_health():
    """Test if the server is running"""
    try:
        response = requests.get(f"{API_URL}/health")
        if response.status_code == 200:
            print("✅ Server is running")
            return True
        else:
            print(f"❌ Server health check failed: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Server is not running: {e}")
        return False

def test_signup():
    """Test user signup"""
    print("\n🔄 Testing user signup...")
    
    user_data = {
        "name": "Test User",
        "email": "test@example.com",
        "password": "testpassword123"
    }
    
    try:
        response = requests.post(f"{API_URL}/auth/signup", json=user_data)
        if response.status_code == 201:
            print("✅ User signup successful")
            return True
        else:
            print(f"❌ User signup failed: {response.status_code} - {response.text}")
            return False
    except Exception as e:
        print(f"❌ Signup request failed: {e}")
        return False

def test_login():
    """Test user login"""
    print("\n🔄 Testing user login...")
    
    login_data = {
        "email": "test@example.com",
        "password": "testpassword123"
    }
    
    try:
        response = requests.post(f"{API_URL}/auth/login", json=login_data)
        if response.status_code == 200:
            data = response.json()
            if "token" in data and "user" in data:
                print("✅ User login successful")
                return data["token"]
            else:
                print("❌ Login response missing token or user data")
                return None
        else:
            print(f"❌ User login failed: {response.status_code} - {response.text}")
            return None
    except Exception as e:
        print(f"❌ Login request failed: {e}")
        return None

def test_protected_route(token):
    """Test accessing protected route"""
    print("\n🔄 Testing protected route access...")
    
    headers = {"Authorization": f"Bearer {token}"}
    
    try:
        response = requests.get(f"{API_URL}/auth/me", headers=headers)
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Protected route access successful - User: {data.get('name', 'Unknown')}")
            return True
        else:
            print(f"❌ Protected route access failed: {response.status_code} - {response.text}")
            return False
    except Exception as e:
        print(f"❌ Protected route request failed: {e}")
        return False

def test_prediction_save(token):
    """Test saving a prediction"""
    print("\n🔄 Testing prediction save...")
    
    prediction_data = {
        "input_data": {
            "Temparature": 25,
            "Humidity": 60,
            "Moisture": 40,
            "Soil_Type": "Loamy",
            "Crop_Type": "Wheat",
            "Nitrogen": 50,
            "Potassium": 30,
            "Phosphorous": 20
        },
        "results": {
            "RandomForestClassifier": {
                "prediction": "Urea",
                "probabilities": {"Urea": 0.8, "DAP": 0.2}
            }
        },
        "soil_health": {
            "score": 75,
            "recommendations": ["Add organic matter", "Test pH levels"]
        },
        "weather_data": {
            "temperature": 25,
            "humidity": 60,
            "description": "Sunny"
        }
    }
    
    headers = {"Authorization": f"Bearer {token}"}
    
    try:
        response = requests.post(f"{API_URL}/predictions", json=prediction_data, headers=headers)
        if response.status_code == 201:
            print("✅ Prediction save successful")
            return True
        else:
            print(f"❌ Prediction save failed: {response.status_code} - {response.text}")
            return False
    except Exception as e:
        print(f"❌ Prediction save request failed: {e}")
        return False

def test_prediction_fetch(token):
    """Test fetching predictions"""
    print("\n🔄 Testing prediction fetch...")
    
    headers = {"Authorization": f"Bearer {token}"}
    
    try:
        response = requests.get(f"{API_URL}/predictions", headers=headers)
        if response.status_code == 200:
            data = response.json()
            predictions = data.get("predictions", [])
            print(f"✅ Prediction fetch successful - Found {len(predictions)} predictions")
            return True
        else:
            print(f"❌ Prediction fetch failed: {response.status_code} - {response.text}")
            return False
    except Exception as e:
        print(f"❌ Prediction fetch request failed: {e}")
        return False

def main():
    """Run all tests"""
    print("🚀 Starting Krushak Authentication Flow Test")
    print("=" * 50)
    
    # Test 1: Server Health
    if not test_health():
        print("\n❌ Server is not running. Please start the backend server first.")
        print("Command: cd krushak/backend && python3 app.py")
        return
    
    # Test 2: User Signup
    if not test_signup():
        print("\n❌ Signup test failed. Check MongoDB connection and backend logs.")
        return
    
    # Test 3: User Login
    token = test_login()
    if not token:
        print("\n❌ Login test failed. Check user creation and authentication.")
        return
    
    # Test 4: Protected Route Access
    if not test_protected_route(token):
        print("\n❌ Protected route test failed. Check JWT middleware.")
        return
    
    # Test 5: Save Prediction
    if not test_prediction_save(token):
        print("\n❌ Prediction save test failed. Check prediction saving logic.")
        return
    
    # Test 6: Fetch Predictions
    if not test_prediction_fetch(token):
        print("\n❌ Prediction fetch test failed. Check prediction retrieval logic.")
        return
    
    print("\n" + "=" * 50)
    print("🎉 All tests passed! Authentication system is working correctly.")
    print("\nNext steps:")
    print("1. Start the frontend: cd krushak/frontend && npm run dev")
    print("2. Open http://localhost:5173 in your browser")
    print("3. Test the complete user flow: signup → login → make prediction → view dashboard")

if __name__ == "__main__":
    main()
