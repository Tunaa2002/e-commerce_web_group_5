from flask import Flask, request, Blueprint
from .book.controller import books
from .extension import db
from .model import Category
import os

def create_db(app):
    if os.path.exists("/bookstore/bookstore.db"):
        db.create_all(app = app)
        print("Created DB!")

def create_app(config_file = "config.py"):
    app = Flask(__name__)
    db.init_app(app)
    app.config.from_pyfile(config_file)
    create_db(app)
    app.register_blueprint(books)
    return app