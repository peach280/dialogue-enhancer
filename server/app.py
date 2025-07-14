from flask import Flask,request,jsonify
from flask_cors import CORS
from openai import OpenAI
import os
import json
from dotenv import load_dotenv
load_dotenv()
client = OpenAI(
    api_key=os.getenv("API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)
app = Flask(__name__)
CORS(app)
@app.route("/dialogue",methods=["POST"])
def convert():
    data=request.get_json()
    dialogue=data.get("dialogue")
    tone = data.get("tone","friendly")

    prompt = f"""Rewrite the following dialogue in a {tone} tone:\n\"{dialogue}\".Keep it short without missing 
    necessary information"""
    try:
        response = client.chat.completions.create(
            model="mistralai/mixtral-8x7b-instruct",  
            messages=[
                {"role":"system","content":"You are a helpful dialogue enhancer."},
                {"role":"user","content":prompt}
            ],
            max_tokens=60,
            temperature=0.7
        )
        rewritten = response.choices[0].message.content.strip()
        return jsonify({"enhanced": rewritten})
    except Exception as e:
        print("Error occured",str(e))
        return jsonify({"error": str(e)}), 500
if __name__ == "__main__":
    app.run(debug=True)