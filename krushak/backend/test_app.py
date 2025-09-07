#!/usr/bin/env python3
"""
Simple test app for Render deployment
"""
from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({
        "message": "Krushak Backend Test App",
        "status": "running",
        "python_version": os.sys.version
    })

@app.route('/api/health')
def health():
    return jsonify({
        "status": "ok",
        "message": "Test app is healthy"
    })

if __name__ == '__main__':
    port = int(os.getenv("PORT", 5000))
    print(f"Starting test app on port {port}")
    app.run(host="0.0.0.0", port=port, debug=False)
