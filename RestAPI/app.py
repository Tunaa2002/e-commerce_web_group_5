from bookstore import create_app
import mysql.connector

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)

connection = mysql.connector.connect(
    host='localhost',
    user='root',
    password='123456',
    database='ecommerce'
)

@app.route('/api/books/<category_name>', methods=['GET'])
def get_books_by_category(category_name):
    try:
        cursor = connection.cursor()

        # Truy vấn MySQL để lấy dữ liệu các cuốn sách từ một danh mục cụ thể
        query = """
            SELECT b.book_id, b.title, b.author_id, b.producer_id, b.category_id, b.price, b.description
            FROM books b
            JOIN category c ON b.category_id = c.category_id
            WHERE c.name = %s
        """
        cursor.execute(query, (category_name,))

        # Lấy kết quả từ truy vấn
        books = cursor.fetchall()

        # Chuyển đổi kết quả thành định dạng JSON và trả về
        return jsonify({'books': books})

    except Exception as e:
        return jsonify({'error': str(e)})

    finally:
        # Đóng kết nối
        if connection.is_connected():
            cursor.close()