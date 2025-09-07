from pathlib import Path
import os
from typing import Dict, Any, List

from flask import Flask, request, jsonify, send_file, g
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd
import io
import base64
from pymongo import MongoClient
from dotenv import load_dotenv
from flask_bcrypt import Bcrypt
import jwt
from datetime import datetime, timedelta
import pytz
from bson.objectid import ObjectId # Import ObjectId
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score

from soil_analysis import analyze_soil_health
from weather_service import get_weather_data, get_weather_for_coordinates
from report_generator import generate_pdf_report, generate_excel_report
from auth_middleware import auth_required


MODELS_DIR = Path(__file__).parent / "models"


# Load environment variables
load_dotenv()

# MongoDB connection with modern SSL handling
import certifi
import ssl

mongo_uri = os.getenv("MONGODB_URI")
if not mongo_uri:
    print("⚠️  MONGODB_URI environment variable not set. Using dummy value for build process.")
    mongo_uri = "mongodb://localhost:27017/krushak"  # Dummy value for build
else:
    # Clean the URI by removing any newline characters
    mongo_uri = mongo_uri.strip()
    print(f"🔗 Cleaned MongoDB URI: {mongo_uri[:50]}...")

print(f"🔗 Connecting to MongoDB Atlas...")

# Check if we're in build mode (no MONGODB_URI set)
if os.getenv("MONGODB_URI") is None:
    print("⚠️  Build mode detected - skipping MongoDB connection")
    print(f"⚠️  MONGODB_URI value: {os.getenv('MONGODB_URI')}")
    client = None
    db = None
else:
    try:
        # Method 1: Try with modern SSL using certifi
        print("🔄 Method 1: Using certifi for SSL certificates...")
        client = MongoClient(
            mongo_uri,
            tlsCAFile=certifi.where(),
            serverSelectionTimeoutMS=10000,
            connectTimeoutMS=10000,
            socketTimeoutMS=20000,
            retryWrites=True
        )
        client.admin.command("ping")
        print("✅ Connected to MongoDB Atlas with certifi SSL!")
        db = client.krushak_db
    
    except Exception as e:
        print(f"❌ Method 1 failed: {str(e)[:100]}...")
        
        try:
            # Method 2: Try with SSL bypass for LibreSSL compatibility
            print("🔄 Method 2: Using SSL bypass for LibreSSL compatibility...")
            client = MongoClient(
                mongo_uri,
                tlsAllowInvalidCertificates=True,
                tlsAllowInvalidHostnames=True,
                serverSelectionTimeoutMS=10000,
                connectTimeoutMS=10000,
                socketTimeoutMS=20000
            )
            client.admin.command("ping")
            print("✅ Connected to MongoDB Atlas with SSL bypass!")
            db = client.krushak_db
            
        except Exception as e2:
            print(f"❌ Method 2 failed: {str(e2)[:100]}...")
            
            try:
                # Method 3: Try with direct connection using shard hostnames
                print("🔄 Method 3: Direct connection to shard hosts...")
                import re
                
                # Extract credentials from the URI
                match = re.search(r'mongodb\+srv://([^:]+):([^@]+)@([^/]+)/(.+)', mongo_uri)
                if match:
                    username, password, cluster, db_name = match.groups()
                    
                    # Use the specific shard hostnames from the error messages
                    direct_uri = f"mongodb://{username}:{password}@ac-zkjmii8-shard-00-00.hco3xca.mongodb.net:27017,ac-zkjmii8-shard-00-01.hco3xca.mongodb.net:27017,ac-zkjmii8-shard-00-02.hco3xca.mongodb.net:27017/{db_name}?ssl=true&replicaSet=atlas-14b8vj-shard-0&authSource=admin&retryWrites=true&w=majority"
                    
                    client = MongoClient(
                        direct_uri,
                        tlsAllowInvalidCertificates=True,
                        tlsAllowInvalidHostnames=True,
                        serverSelectionTimeoutMS=10000
                    )
                    client.admin.command("ping")
                    print("✅ Connected to MongoDB Atlas with direct connection!")
                    db = client.krushak_db
                else:
                    raise Exception("Could not parse MongoDB URI")
                    
            except Exception as e3:
                print(f"❌ Method 3 failed: {str(e3)[:100]}...")
                print("💥 All MongoDB connection methods failed!")
                print("🔧 Troubleshooting suggestions:")
                print("   1. Check your internet connection")
                print("   2. Verify MongoDB Atlas cluster is running")
                print("   3. Check if your IP is whitelisted in MongoDB Atlas")
                print("   4. Verify MONGODB_URI in .env file")
                print("   5. Try using MongoDB Compass to test connection")
                raise e3

    # If we're in build mode, set dummy values
    if client is None:
        print("⚠️  Using dummy database connection for build process")
        client = None
        db = None

# Helper function to check if database is available
def check_database():
    if db is None:
        print("❌ Database not available - running in build mode")
        return jsonify({"error": "Database not available in build mode"}), 503
    return None

bcrypt = Bcrypt()

# JWT Configuration
SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")  # Replace with a strong, random key in .env
JWT_EXPIRATION_HOURS = 1

# Indian Standard Time zone
IST = pytz.timezone('Asia/Kolkata')

def get_ist_time():
    """Get current time in Indian Standard Time"""
    return datetime.now(IST)

def load_artifacts() -> Dict[str, Any]:
    artifacts: Dict[str, Any] = {}
    # Preprocessor for X and label encoder for y
    artifacts["preprocessor"] = joblib.load(MODELS_DIR / "preprocessor.joblib")
    artifacts["label_encoder"] = joblib.load(MODELS_DIR / "label_encoder.joblib")

    # Models
    artifacts["models"] = {
        "RandomForestClassifier": joblib.load(MODELS_DIR / "random_forest.joblib"),
        "DecisionTreeClassifier": joblib.load(MODELS_DIR / "decision_tree.joblib"),
        "LogisticRegression": joblib.load(MODELS_DIR / "logistic_regression.joblib"),
        "SVC": joblib.load(MODELS_DIR / "svm.joblib"),
        "GaussianNB": joblib.load(MODELS_DIR / "naive_bayes.joblib"),
    }
    return artifacts


def dataframe_from_payload(payload: Dict[str, Any]) -> pd.DataFrame:
    # Ensure column order matches training features
    columns = [
        "Temparature",
        "Humidity",
        "Moisture",
        "Soil_Type",
        "Crop_Type",
        "Nitrogen",
        "Potassium",
        "Phosphorous",
    ]
    row = {col: payload.get(col) for col in columns}
    return pd.DataFrame([row], columns=columns)


def make_predictions(artifacts: Dict[str, Any], input_df: pd.DataFrame) -> Dict[str, Any]:
    preprocessor = artifacts["preprocessor"]
    y_encoder = artifacts["label_encoder"]
    X_processed = preprocessor.transform(input_df)

    results: Dict[str, Any] = {}
    for model_name, model in artifacts["models"].items():
        preds = model.predict(X_processed)
        pred_label = y_encoder.inverse_transform(preds)[0]
        # Probabilities per label
        proba: List[float] = []
        labels: List[str] = []
        if hasattr(model, "predict_proba"):
            proba = model.predict_proba(X_processed)[0].tolist()
            # Map model classes (encoded) back to label strings
            labels = y_encoder.inverse_transform(model.classes_).tolist()
        # Build probability mapping
        prob_map = {label: float(p) for label, p in zip(labels, proba)}
        results[model_name] = {
            "prediction": pred_label,
            "probabilities": prob_map,
        }
    return results

# --- NEW FUNCTION TO EVALUATE MODELS ---
# --- CORRECTED FUNCTION TO EVALUATE MODELS ---
def evaluate_and_print_metrics(artifacts: Dict[str, Any]):
    """Loads test data, evaluates models, and prints metrics."""
    print("\n" + "="*50)
    print("EVALUATING MODEL PERFORMANCE ON TEST DATA")
    print("="*50)

    try:
        df = pd.read_csv("f2.csv")
    except FileNotFoundError:
        print("\n[ERROR] f2.csv not found. Skipping model evaluation.\n")
        return
        
    df.columns = [col.strip().replace(' ', '_') for col in df.columns]
    target_column = 'Fertilizer'
    
    X = df.drop(target_column, axis=1)
    y = df[target_column]
    
    _, X_test, _, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )

    preprocessor = artifacts["preprocessor"]
    # ✅ GET THE LABEL ENCODER FROM ARTIFACTS
    label_encoder = artifacts["label_encoder"]
    X_test_processed = preprocessor.transform(X_test)
    
    # ✅ CONVERT y_test STRINGS TO NUMBERS
    y_test_encoded = label_encoder.transform(y_test)

    for model_name, model in artifacts["models"].items():
        y_pred = model.predict(X_test_processed)
        
        # ✅ USE THE ENCODED y_test FOR COMPARISON
        accuracy = accuracy_score(y_test_encoded, y_pred)
        f1 = f1_score(y_test_encoded, y_pred, average='weighted')
        
        print(f"\n--- {model_name} ---")
        print(f"  Accuracy: {accuracy:.4f}")
        print(f"  F1 Score (Weighted): {f1:.4f}")
    
    print("="*50 + "\n")


# --- MODIFIED: Pass artifacts as an argument ---
def create_app(artifacts: Dict[str, Any]) -> Flask:
    app = Flask(__name__)
    # Allow all origins for API routes
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    # artifacts = load_artifacts() <-- This is now loaded outside

    @app.route("/api/health", methods=["GET"])
    def health() -> Any:
        return jsonify({"status": "ok"})
    

    @app.route("/api/predict", methods=["POST"])
    def predict() -> Any:
        try:
            payload = request.get_json(force=True)
            language = payload.get('language', 'en')  # Get language from request
            input_df = dataframe_from_payload(payload)
            results = make_predictions(artifacts, input_df)
            
            # Add soil health analysis with language support
            soil_health = analyze_soil_health(payload, language)
            
            # Check if user is authenticated (optional for predictions)
            user_id = None
            if "Authorization" in request.headers:
                try:
                    from auth_middleware import auth_required
                    # Try to get user ID from token
                    auth_header = request.headers["Authorization"]
                    token = auth_header.split(" ")[1]
                    data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
                    user_id = data["user_id"]
                except:
                    # Token is invalid or expired, but we still allow prediction
                    pass
            
            response_data = {
                "ok": True, 
                "results": results,
                "soil_health": soil_health,
                "user_authenticated": user_id is not None
            }
            
            return jsonify(response_data)
        except Exception as exc:  # noqa: BLE001
            return jsonify({"ok": False, "error": str(exc)}), 400

    # AUTHENTICATION ROUTES
    @app.route("/api/auth/signup", methods=["POST"])
    def signup():
        print("🔍 Signup endpoint reached")
        # Check if database is available
        db_check = check_database()
        if db_check:
            print("❌ Database check failed")
            return db_check
        print("✅ Database check passed")
            
        try:
            data = request.get_json(force=True)
            name = data.get("name", "").strip()
            email = data.get("email", "").strip().lower()
            password = data.get("password", "")

            # Validation
            if not all([name, email, password]):
                return jsonify({"message": "All fields are required"}), 400
            
            if len(password) < 6:
                return jsonify({"message": "Password must be at least 6 characters long"}), 400
            
            if "@" not in email or "." not in email:
                return jsonify({"message": "Please enter a valid email address"}), 400
            
            # Check if user already exists
            existing_user = db.users.find_one({"email": email})
            if existing_user:
                return jsonify({"message": "User with this email already exists"}), 409

            # Hash password and create user
            hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")
            
            user_doc = {
                "name": name,
                "email": email,
                "password": hashed_password,
                "predictions": [],
                "created_at": get_ist_time(),
                "last_login": None
            }
            
            result = db.users.insert_one(user_doc)
            user_id = result.inserted_id

            print(f"✅ New user created: {email} (ID: {user_id})")
            return jsonify({
                "message": "User created successfully", 
                "user_id": str(user_id),
                "user": {
                    "id": str(user_id),
                    "name": name,
                    "email": email
                }
            }), 201
            
        except Exception as e:
            import traceback
            print(f"❌ Error in /api/auth/signup: {e}")
            print(f"❌ Traceback: {traceback.format_exc()}")
            return jsonify({"message": "Internal server error. Please try again."}), 500

    @app.route("/api/auth/login", methods=["POST"])
    def login():
        print("🔍 Login endpoint reached")
        # Check if database is available
        db_check = check_database()
        if db_check:
            print("❌ Database check failed")
            return db_check
        print("✅ Database check passed")
            
        try:
            data = request.get_json(force=True)
            email = data.get("email", "").strip().lower()
            password = data.get("password", "")

            if not all([email, password]):
                return jsonify({"message": "Email and password are required"}), 400
            
            # Find user by email
            user = db.users.find_one({"email": email})
            if not user:
                return jsonify({"message": "Invalid email or password"}), 401

            # Verify password
            if not bcrypt.check_password_hash(user["password"], password):
                return jsonify({"message": "Invalid email or password"}), 401
            
            # Update last login
            db.users.update_one(
                {"_id": user["_id"]},
                {"$set": {"last_login": get_ist_time()}}
            )
            
            # Generate JWT token
            token_payload = {
                "user_id": str(user["_id"]),
                "email": user["email"],
                "exp": datetime.utcnow() + timedelta(hours=JWT_EXPIRATION_HOURS)
            }
            token = jwt.encode(token_payload, SECRET_KEY, algorithm="HS256")

            print(f"✅ User logged in: {email}")
            return jsonify({
                "token": token,
                "user": {
                    "id": str(user["_id"]),
                    "name": user["name"],
                    "email": user["email"]
                }
            }), 200
            
        except Exception as e:
            import traceback
            print(f"❌ Error in /api/auth/login: {e}")
            print(f"❌ Traceback: {traceback.format_exc()}")
            return jsonify({"message": "Internal server error. Please try again."}), 500

    # from auth_middleware import auth_required # Import here to avoid circular dependency

    @app.route("/api/auth/me", methods=["GET"])
    @auth_required
    def get_current_user():
        # Check if database is available
        db_check = check_database()
        if db_check:
            return db_check
            
        try:
            user_id = g.user_id
            user = db.users.find_one({"_id": ObjectId(user_id)}, {"password": 0}) # Exclude password
            if user:
                user["_id"] = str(user["_id"])
                return jsonify(user), 200
            return jsonify({"message": "User not found"}), 404
        except Exception as e:
            return jsonify({"message": str(e)}), 500

    # PREDICTION ROUTES (protected)
    @app.route("/api/predictions", methods=["POST"])
    @auth_required
    def save_prediction():
        # Check if database is available
        db_check = check_database()
        if db_check:
            return db_check
            
        try:
            user_id = g.user_id
            prediction_data = request.get_json(force=True)
            
            # Validate prediction data
            required_fields = ['input_data', 'results', 'soil_health']
            missing_fields = []
            for field in required_fields:
                if field not in prediction_data:
                    missing_fields.append(field)
            
            if missing_fields:
                return jsonify({"message": f"Missing required fields: {', '.join(missing_fields)}"}), 400
            
            # Add metadata to prediction data
            prediction_doc = {
                **prediction_data,
                "timestamp": get_ist_time(),
                "user_id": user_id,
                "prediction_id": str(ObjectId())  # Generate unique ID for this prediction
            }

            # Save prediction to user's predictions array
            result = db.users.update_one(
                {"_id": ObjectId(user_id)},
                {"$push": {"predictions": prediction_doc}}
            )
            
            if result.modified_count == 0:
                return jsonify({"message": "Failed to save prediction"}), 500
            
            return jsonify({
                "message": "Prediction saved successfully", 
                "prediction_id": prediction_doc["prediction_id"],
                "timestamp": prediction_doc["timestamp"].isoformat()
            }), 201
            
        except Exception as e:
            print(f"❌ Error in /api/predictions (POST): {e}")
            return jsonify({"message": "Failed to save prediction"}), 500

    @app.route("/api/predictions", methods=["GET"])
    @auth_required
    def get_predictions():
        # Check if database is available
        db_check = check_database()
        if db_check:
            return db_check
            
        try:
            user_id = g.user_id
            # Get user with predictions, sorted by timestamp (newest first)
            user = db.users.find_one(
                {"_id": ObjectId(user_id)}, 
                {"predictions": 1, "_id": 0}
            )
            
            if user:
                predictions = user.get("predictions", [])
                
                # Sort predictions by timestamp (newest first)
                predictions.sort(key=lambda x: x.get("timestamp", datetime.min), reverse=True)
                
                # Convert timestamps to ISO format and ObjectIds to strings
                for pred in predictions:
                    if 'timestamp' in pred and isinstance(pred['timestamp'], datetime):
                        # Ensure the timestamp is timezone-aware and in IST
                        if pred['timestamp'].tzinfo is None:
                            # If naive, assume it's UTC and convert to IST
                            utc_timestamp = pytz.UTC.localize(pred['timestamp'])
                            ist_timestamp = utc_timestamp.astimezone(IST)
                        else:
                            # If timezone-aware, convert to IST
                            ist_timestamp = pred['timestamp'].astimezone(IST)
                        pred['timestamp'] = ist_timestamp.isoformat()
                    if '_id' in pred:
                        pred['_id'] = str(pred['_id'])
                
                return jsonify({
                    "predictions": predictions,
                    "count": len(predictions)
                }), 200
            else:
                return jsonify({"predictions": [], "count": 0}), 200
            
        except Exception as e:
            print(f"❌ Error in /api/predictions (GET): {e}")
            return jsonify({"message": "Failed to fetch predictions"}), 500


    @app.route("/api/weather", methods=["GET"])
    def weather() -> Any:
        try:
            city = request.args.get('city')
            lat = request.args.get('lat', type=float)
            lon = request.args.get('lon', type=float)
            
            if city:
                weather_data = get_weather_data(city)
            elif lat and lon:
                weather_data = get_weather_for_coordinates(lat, lon)
            else:
                return jsonify({"ok": False, "error": "City name or coordinates required"}), 400
            
            if weather_data:
                return jsonify({"ok": True, "weather": weather_data})
            else:
                return jsonify({"ok": False, "error": "Failed to fetch weather data"}), 500
                
        except Exception as exc:  # noqa: BLE001
            return jsonify({"ok": False, "error": str(exc)}), 400

    @app.route("/api/download-report/pdf", methods=["POST"])
    def download_pdf_report() -> Any:
        try:
            data = request.get_json(force=True)
            input_data = data.get('input_data', {})
            predictions = data.get('predictions', {})
            soil_health = data.get('soil_health', {})
            weather_data = data.get('weather_data')
            language = data.get('language', 'en')  # Get language from request
            
            pdf_content = generate_pdf_report(input_data, predictions, soil_health, weather_data, language)
            
            return send_file(
                io.BytesIO(pdf_content),
                mimetype='application/pdf',
                as_attachment=True,
                download_name='krushak_report.pdf'
            )
        except Exception as exc:  # noqa: BLE001
            return jsonify({"ok": False, "error": str(exc)}), 400

    @app.route("/api/download-report/excel", methods=["POST"])
    def download_excel_report() -> Any:
        try:
            data = request.get_json(force=True)
            input_data = data.get('input_data', {})
            predictions = data.get('predictions', {})
            soil_health = data.get('soil_health', {})
            weather_data = data.get('weather_data')
            language = data.get('language', 'en')  # Get language from request
            
            excel_content = generate_excel_report(input_data, predictions, soil_health, weather_data, language)
            
            return send_file(
                io.BytesIO(excel_content),
                mimetype='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                as_attachment=True,
                download_name='krushak_report.xlsx'
            )
        except Exception as exc:  # noqa: BLE001
            return jsonify({"ok": False, "error": str(exc)}), 400

    return app


if __name__ == "__main__":
    # 1. Load artifacts once at the start
    print("Loading models and artifacts...")
    artifacts = load_artifacts()

    # 2. Evaluate models and print scores to the console
    evaluate_and_print_metrics(artifacts)

    # 3. Create the app, passing the loaded artifacts
    app = create_app(artifacts)
    port = int(os.getenv("PORT", "5000"))
    
    print(f"Starting Flask server at http://localhost:{port}")
    app.run(host="0.0.0.0", port=port, debug=False)