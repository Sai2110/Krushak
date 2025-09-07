from functools import wraps
from flask import request, jsonify, g
import jwt
import os

# Load the secret key from environment variables
SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")

def auth_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        # JWT is sent in the Authorization header as "Bearer <token>"
        if "Authorization" in request.headers:
            auth_header = request.headers["Authorization"]
            try:
                token = auth_header.split(" ")[1]
            except IndexError:
                return jsonify({"message": "Token is missing or malformed!"}), 401

        if not token:
            return jsonify({"message": "Token is missing!"}), 401

        try:
            data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            g.user_id = data["user_id"]
        except jwt.ExpiredSignatureError:
            return jsonify({"message": "Token has expired!"}), 401
        except jwt.InvalidTokenError:
            return jsonify({"message": "Token is invalid!"}), 401
        except Exception as e:
            return jsonify({"message": str(e)}), 401

        return f(*args, **kwargs)

    return decorated
