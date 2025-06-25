# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

conn = psycopg2.connect(
    dbname="health_app",
    user="your_db_user",
    password="your_db_password",
    host="localhost",
    port="5432"
)
cur = conn.cursor()

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    cur.execute("""
        INSERT INTO users (username, email, password, age, gender, dietary_preference, health_goal, allergies, activity_level)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """,
        (
            data['username'],
            data['email'],
            data['password'],  # Hash in production!
            data.get('age'),
            data.get('gender'),
            data.get('dietaryPreference'),
            data.get('healthGoal'),
            data.get('allergies'),
            data.get('activityLevel')
        )
    )
    conn.commit()
    return jsonify({"message": "User registered successfully!"})

@app.route('/api/users', methods=['GET'])
def get_users():
    cur.execute("SELECT username, email, age, gender, dietary_preference, health_goal, allergies, activity_level FROM users")
    users = cur.fetchall()
    user_list = [
        {
            "username": u[0],
            "email": u[1],
            "age": u[2],
            "gender": u[3],
            "dietaryPreference": u[4],
            "healthGoal": u[5],
            "allergies": u[6],
            "activityLevel": u[7]
        }
        for u in users
    ]
    return jsonify(user_list)

if __name__ == "__main__":
    app.run(debug=True)