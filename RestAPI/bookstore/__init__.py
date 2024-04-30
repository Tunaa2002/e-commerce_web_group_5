from flask import Flask, request, Blueprint
from .book.controller import books
import os

def create_app():
    app = Flask(__name__)
    app.register_blueprint(books)
    return app