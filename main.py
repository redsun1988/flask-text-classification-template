from flask import Flask, jsonify, render_template, request

import numpy as np
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/check_text", methods=["POST"])
def check_text():
    json = request.get_json(force=True)
    text = json.get('text')

    print(text)

    result = ["tag1", "tag3"]
    return jsonify(result)

app.run(host="localhost", port=5005, debug=True)