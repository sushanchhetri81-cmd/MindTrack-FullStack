from flask import Flask, request, jsonify
from flask_cors import CORS
from supabase import create_client
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

@app.route("/")
def home():
    return {"message": "MindTrack backend is running"}

@app.route("/submit", methods=["POST"])
def submit_wellness():
    try:
        data = request.json

        response = supabase.table("wellness_entries").insert({
            "Name": data.get("name"),
            "Sleep_hours": int(data.get("sleep_hours")),
            "stress_level": int(data.get("stress_level")),
            "wellbeing_score": int(data.get("wellbeing_score"))
        }).execute()

        return jsonify({
            "message": "Data saved successfully",
            "data": response.data
        })

    except Exception as error:
        return jsonify({
            "message": "Error saving data",
            "error": str(error)
        }), 500

@app.route("/records", methods=["GET"])
def get_records():
    response = supabase.table("wellness_entries").select("*").execute()

    return jsonify({
        "message": "Records retrieved successfully",
        "data": response.data
    })

if __name__ == "__main__":
    app.run(debug=True)
    