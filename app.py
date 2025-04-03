from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# Database config
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'vuhatb4XT2@@',
    'database': 'formup'
}

def save_db(text):
    con = mysql.connector.connect(**db_config)
    cursor = con.cursor()
    try:
        cursor.execute("INSERT INTO questions (text) VALUES (%s)", (text,))
        con.commit()
    finally:
        cursor.close()
        con.close()  # Close after use

@app.route('/register', methods=['POST'])
def register():
    username = data.get('username')
    email = data.get('email')
    password = data.get('password') 
    try:
        data = request.get_json()
        con = mysql.connector.connect(**db_config)
        cursor = con.cursor()
        cursor.execute("INSERT INTO client_db (1,username, email, password) VALUES (%s, %s, %s)", (username, email, password))
        con.commit()
    finally:
        cursor.close()
        con.close()  # Close after use



@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({"error": "No text received"}), 400
    
    save_db(data['text'])
    return jsonify({"message": "Question saved successfully!"})

if __name__ == '__main__':
    app.run(debug=True)
