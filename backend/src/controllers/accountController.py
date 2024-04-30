from src.services.accountService import SignUpService
from src.services.accountService import SignInService

class SignUpController:
    def __init__(self):
        self.sign_up_service = SignUpService()

    def sign_up(self, name, username, password, phone, email):
        return self.sign_up_service.sign_up_user(name, username, password, phone, email)

class SignInController:
    def __init__(self):
        self.sign_in_service = SignInService()

    def sign_in_user(self, username, password):
        return self.sign_in_service.sign_in_user(username, password)