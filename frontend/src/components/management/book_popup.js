import React , { useState } from "react";

function BookPopup(props) {
  const [formData, setFormData] = useState(props.book);

  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditBook = () => {
    try {
        fetch("https", {
          method: 'PUT',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.log(error)
        });
    } catch (error) {
        console.log(error)
    }
  }

  const handleAddBook = () => {
    try {
        fetch("https", {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
          console.log(error)
        });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>{props.book ? "Chỉnh sửa sách" : "Thêm sách mới"}</h2>
        <div>
          <label>
            Mã sách:
            <input
              type="number"
              name="bookCode"
              value={formData ? formData.id : ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Tên sách:
            <input
              type="text"
              name="title"
              value={formData ? formData.title : ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Tác giả:
            <input
              type="text"
              name="author"
              value={formData ? formData.author : ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Nhà xuất bản:
            <input
              type="text"
              name="producer"
              value={formData ? formData.producer : ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Thể loại:
            <input
              type="text"
              name="category"
              value={formData ? formData.category : ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Giá tiền:
            <input
              type="number"
              name="price"
              value={formData ? formData.price : ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Mô tả:
            <textarea
              name="description"
              value={formData ? formData.description : ""}
              onChange={handleChange}
            />
          </label>
          <button onClick={props.type === "edit" ? handleEditBook : handleAddBook}>{props.book ? "Lưu" : "Thêm sách"}</button>
        </div>
      </div>
    </div>
  );
}

export default BookPopup;
