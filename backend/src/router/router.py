from flask import Blueprint, request, jsonify
from src.controllers.accountController import SignUpController
from src.controllers.accountController import SignInController


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
