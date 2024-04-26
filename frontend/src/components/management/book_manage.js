import React, { useState } from "react";
import "./book_manage.css";
import BookPopup from "./book_popup.js";
import { json } from "react-router-dom";

function ManageBooks() {
  const [books, setBooks] = useState([
    {
      id: "1",
      title: "abcd",
      author: "abcd",
      producer: "abcd",
      category: "aaa",
      price: "100000",
      description: "test",
    },
    {
      id: "2",
      title: "abcde",
      author: "abcda",
      producer: "abcdb",
      category: "aaak",
      price: "100000",
      description: "test1",
    }
  ]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [popupBook, setPopupBook] = useState(null);
  const [popupType, setPopupType] = useState("");
  const [cover, setCover] = useState(['https://s3-sgn09.fptcloud.com/codelearnstorage/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg'])

  const handleEditBook = async (book) => {
    setPopupType("edit");
    setPopupBook(book);
    console.log(book)
    // try {
    //   const response = await fetch(`https://api.example.com/${book.id}`);
    //   if (!response.ok) {
    //     throw new Error('Failed to fetch data');
    //   }
    //   const json = await response.json();
    //   setCover(json)
    // } catch (error) {
    //   console.log(error)
    // }
  };

  const handleAddBook = () => {
    setPopupType("add");
    setPopupBook(null);
    setCover(null);
  };

  const handleClosePopup = () => {
    setPopupType("");
    setPopupBook(null);
  };

  const handleDeleteBook = (id) => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => {
        setBooks(values => {
          return values.filter(books => books.id !== id)
        })
        console.log("Book deleted successfully");
      })
      
    } catch (error) {
      console.log(error)
    }
  }

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
                  <button className="btn btn-danger" onClick={() => handleDeleteBook(book.id)}>Xóa</button>
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
            <BookPopup
              book={popupBook}
              type={popupType}
              cover={cover}
              onClose={handleClosePopup}
            />
      )}
    </div>
  );
}

export default ManageBooks;
