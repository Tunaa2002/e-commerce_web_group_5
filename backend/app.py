from flask import Flask
from flask_cors import CORS
from src.router.router import router

app = Flask(__name__)
CORS(app)

app.register_blueprint(router)

# Khởi tạo server
if __name__ == "__main__":
    app.run(debug=True, port=5000)
