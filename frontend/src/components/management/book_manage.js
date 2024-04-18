import React, { useState } from "react";
import "./book_manage.css";
import BookPopup from "./book_popup.js";

function ManageBooks() {
  const [books, setBooks] = useState([
    {
      id: "1",
      title: "abcd",
      author: "abcd",
      producer: "abcd",
      category: "aaa",
      price: "100000",
      des: "test",
    },
  ]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [popupBook, setPopupBook] = useState(null);
  const [popupType, setPopupType] = useState("");

  const handleEditBook = (book) => {
    setPopupType("edit");
    setPopupBook(book);
  };

  const handleAddBook = () => {
    setPopupType("add");
    setPopupBook(null);
  };

  const handleClosePopup = () => {
    setPopupType("");
    setPopupBook(null);
  };

  const handleSearchBooks = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      book.author.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <input
          className="search-book"
          placeholder="Tìm kiếm theo tên sách hoặc tác giả"
          value={searchKeyword}
          onChange={handleSearchBooks}
        />
      </div>
      <div className="books-container">
        <table className="books-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sách</th>
              <th>Tác giả</th>
              <th>Thể loại</th>
              <th>Giá tiền</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.slice(0, 10).map((book, index) => (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.price}</td>
                <td className="button">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEditBook(book)}
                  >
                    Chỉnh sửa
                  </button>
                  <button className="btn btn-danger">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredBooks.length > 10 && (
        <div className="page-selection">
          <button>Trang trước</button>
          <button>Trang sau</button>
        </div>
      )}
      <div className="add-book-container">
        <button className="btn btn-primary" onClick={handleAddBook}>
          Thêm sách mới
        </button>
      </div>
      {popupType && (
        <div className="popup-container" onClick={handleClosePopup}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <BookPopup
              book={popupBook}
              type={popupType}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageBooks;
