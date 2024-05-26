from flask import Blueprint, request, jsonify
from src.controllers.accountController import SignUpController
from src.controllers.accountController import SignInController
from src.controllers.bookController import GetAllBooksController
from src.controllers.bookController import GetBookByIDController

router = Blueprint('router', __name__)
sign_up_controller = SignUpController()

@router.route('/sign_up', methods=['POST'])
def sign_up():
    data = request.json
    name = data.get('name')
    username = data.get('username')
    password = data.get('password')
    phone = data.get('phone')
    email = data.get('email')

    if not all([name, username, password, phone, email]):
        return jsonify({'error': 'Missing required fields'}), 400

    success = sign_up_controller.sign_up(name, username, password, phone, email)
    if success:
        return jsonify({'message': 'User signed up successfully'}), 200
    else:
        return jsonify({'error': 'Failed to sign up user'}), 500


sign_in_controller = SignInController()

@router.route('/sign_in', methods=['POST'])
def sign_in():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not all([username, password]):
        return jsonify({'error': 'Missing required fields'}), 400

    user_info = sign_in_controller.sign_in_user(username, password)
    if user_info:
        if user_info['role'] == 0:
            return jsonify({'message': 'User signed in successfully', 'role': user_info['role']}), 200
        elif user_info['role'] == 1:
            return jsonify({'message': 'Admin signed in successfully', 'role': user_info['role']}), 200
        else:
            return jsonify({'error': 'Invalid role'}), 500
    else:
        return jsonify({'error': 'Failed to sign in'}), 401


get_all_books_controller = GetAllBooksController()

@router.route('/book-list', methods=['GET'])
def get_all_books():
    return get_all_books_controller.get_all_books()


get_book_by_id_controller = GetBookByIDController()

@router.route('/book/<int:book_id>', methods=['GET'])
def get_book(book_id):
    return get_book_by_id_controller.get_book()

