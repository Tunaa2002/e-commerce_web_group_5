from src.config.mysqlConnection import my_sql_config
from passlib.hash import sha256_crypt

class SignUpService:
    def __init__(self):
        self.connection = my_sql_config.get_connection()

    def sign_up_user(self, name, username, password, phone, email):
        try:
            hashed_password = sha256_crypt.hash(password)
            # print("Mật khẩu đã mã hóa:", hashed_password)
            with self.connection.cursor() as cursor:
                query = "INSERT INTO user (name, username, password, phone, email, role) VALUES (%s, %s, %s, %s, %s, 0)"
                cursor.execute(query, (name, username, hashed_password, phone, email))
                self.connection.commit()
                return True
        except Exception as e:
            print("Lỗi khi thêm người dùng mới:", e)
            return False

class SignInService:
    def __init__(self):
        self.connection = my_sql_config.get_connection()

    def sign_in_user(self, username, password):
        try:
            with self.connection.cursor() as cursor:
                query = "SELECT username, password, role FROM user WHERE username = %s"
                cursor.execute(query, (username,))
                result = cursor.fetchone()
                if result:
                    stored_password = result[1]
                    if sha256_crypt.verify(password, stored_password):
                        return {'username': result[0], 'role': result[2]}
                return None
        except Exception as e:
            print("Error:", e)
            return None