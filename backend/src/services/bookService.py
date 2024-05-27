from src.config.mysqlConnection import my_sql_config

class GetAllBooksService:
    def __init__(self):
        self.connection = my_sql_config.get_connection()

    def get_all_books(self):
        try:
            with self.connection.cursor() as cursor:
                query = "SELECT * FROM book"
                cursor.execute(query)
                books = cursor.fetchall()
                return books
        except Exception as e:
            print("Lỗi khi truy vấn dữ liệu sách:", e)
            return None
        
class GetBookByIDService:
    
    def __init__(self):
        self.connection = my_sql_config.get_connection()
        
    def get_book_by_id(self, clothing_id):
        try:
            with self.connection.cursor() as cursor:
                query = "SELECT * FROM book WHERE id = %s"
                cursor.execute(query, (clothing_id,))
                clothing = cursor.fetchone()
                cursor.close()
                return clothing
        except Exception as e:
            print("Error:", e)
            return None
        
    