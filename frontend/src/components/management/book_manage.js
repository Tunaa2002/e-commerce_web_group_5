import React, { useState, useEffect } from "react";
// import axios from 'axios';
import "./book_manage.css";

function ManageBooks() {
    const [books, setBooks] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");

    // useEffect(() => {
    //     fetchBooks();
    // }, []);

    // const fetchBooks = async () => {
    //     try {
    //         const response = await axios.get('');
    //         setBooks(response.data);
    //     } catch (error) {
    //         console.error('Error fetching books:', error);
    //     }
    // };

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
                <button className="btn-search">Tìm kiếm</button>
            </div>
            <div className="book-container">
                <table className="books-table">
                    <thead>
                        <tr>
                            <th>Tên sách</th>
                            <th>Tác giả</th>
                            <th>Thể loại</th>
                            <th>Giá tiền</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book.id} class="">
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.genre}</td>
                                <td>{book.price}</td>
                                <td>
                                    <button>Chỉnh sửa</button>
                                    <button>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="add-book-container">
                <button className="btn-add-book">Thêm sách mới</button>
            </div>
        </div>
    );
}

export default ManageBooks;
