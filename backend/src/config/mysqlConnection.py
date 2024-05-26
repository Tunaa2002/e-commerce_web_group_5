import pymysql

# Cấu hình kết nối đến cơ sở dữ liệu MySQL
db_config = {
    'host': '127.0.0.1',
    'user': 'root',
    'password': '123456',
    'database': 'ecommerce',
}

class MySQLConfig:
    def __init__(self):
        try:
            # Tạo kết nối đến cơ sở dữ liệu
            self.connection = pymysql.connect(**db_config)
            print('Đã kết nối đến cơ sở dữ liệu MySQL')
        except pymysql.Error as e:
            print('Lỗi kết nối đến cơ sở dữ liệu MySQL:', e)

    def get_connection(self):
        return self.connection

# Tạo một đối tượng MySQLConfig để thực hiện kết nối đến cơ sở dữ liệu
my_sql_config = MySQLConfig()
