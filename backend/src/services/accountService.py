from src.config.mysqlConnection import my_sql_config

class SignUpService:
    def __init__(self):
        self.connection = my_sql_config.get_connection()

    def sign_up_user(self, name, username, password, phone, email):
        try:
            with self.connection.cursor() as cursor:
                # Thực hiện truy vấn INSERT
                query = "INSERT INTO user (name, username, password, phone, email, role) VALUES (%s, %s, %s, %s, %s, 0)"
                cursor.execute(query, (name, username, password, phone, email))
                # Commit thay đổi vào cơ sở dữ liệu
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
                query = "SELECT username, password, role FROM user WHERE username = %s AND password = %s"
                cursor.execute(query, (username, password))
                result = cursor.fetchone()
                if result:
                    return {'username': result[0], 'password': result[1], 'role': result[2]}  # trả về username và password nếu tìm thấy
                else:
                    return None  # trả về none nếu không thấy
        except Exception as e:
            print("Error:", e)
            return None