#!/usr/bin/env python3
"""
Quick test to verify prediction saving is working correctly.
Run this after making a prediction to check if it's being saved.
"""

import requests
import json

# Configuration
BASE_URL = "http://localhost:5000"
API_URL = f"{BASE_URL}/api"

def test_prediction_save():
    """Test the complete prediction save flow"""
    
    # First, login to get a token
    print("🔄 Logging in...")
    login_data = {
        "email": "test@example.com",
        "password": "testpassword123"
    }
    
    try:
        response = requests.post(f"{API_URL}/auth/login", json=login_data)
        if response.status_code != 200:
            print(f"❌ Login failed: {response.status_code} - {response.text}")
            return False
        
        data = response.json()
        token = data["token"]
        print("✅ Login successful")
        
    except Exception as e:
        print(f"❌ Login error: {e}")
        return False
    
    # Test saving a prediction
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
            save_result = response.json()
            print(f"   Prediction ID: {save_result.get('prediction_id', 'N/A')}")
        else:
            print(f"❌ Prediction save failed: {response.status_code} - {response.text}")
            return False
    except Exception as e:
        print(f"❌ Prediction save error: {e}")
        return False
    
    # Test fetching predictions
    print("\n🔄 Testing prediction fetch...")
    try:
        response = requests.get(f"{API_URL}/predictions", headers=headers)
        if response.status_code == 200:
            data = response.json()
            predictions = data.get("predictions", [])
            print(f"✅ Prediction fetch successful - Found {len(predictions)} predictions")
            
            if predictions:
                latest = predictions[0]
                print(f"   Latest prediction:")
                print(f"   - Timestamp: {latest.get('timestamp', 'N/A')}")
                print(f"   - Fertilizer: {latest.get('results', {}).get('RandomForestClassifier', {}).get('prediction', 'N/A')}")
                print(f"   - Soil Health: {latest.get('soil_health', {}).get('score', 'N/A')}")
            else:
                print("   ⚠️ No predictions found in database")
            
            return True
        else:
            print(f"❌ Prediction fetch failed: {response.status_code} - {response.text}")
            return False
    except Exception as e:
        print(f"❌ Prediction fetch error: {e}")
        return False

if __name__ == "__main__":
    print("🧪 Testing Prediction Save Flow")
    print("=" * 40)
    
    if test_prediction_save():
        print("\n🎉 All tests passed! Prediction saving is working correctly.")
        print("\nIf the dashboard still doesn't show predictions:")
        print("1. Check browser console for errors")
        print("2. Try refreshing the dashboard page")
        print("3. Check if the frontend is calling the correct API endpoint")
    else:
        print("\n❌ Tests failed. Check the backend logs for errors.")
