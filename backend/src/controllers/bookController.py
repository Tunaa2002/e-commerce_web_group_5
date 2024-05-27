from flask import jsonify
from src.services.bookService import GetAllBooksService
from src.services.bookService import GetBookByIDService


class GetAllBooksController:
    def __init__(self):
        self.book_service = GetAllBooksService()

    def get_all_books(self):
        return self.book_service.get_all_books()
    
class GetBookByIDController:
    def __init__(self):
        self.get_book_by_id_service = GetBookByIDService()
    
    def get_book(self, book_id):
        book = self.get_book_by_id_service.get_book_by_id(book_id)
        if book:
            return jsonify(book), 200
        else:
            return jsonify({"error": "book not found"}), 404
