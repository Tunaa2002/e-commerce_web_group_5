import React, { useState } from "react";

function BookPopup(props) {
  const [formData, setFormData] = useState(props.book);
  const [coverImages, setCoverImages] = useState([props.cover]);

  // console.log(formData);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "bookCover" && files && files[0]) {
      const newCoverImages = [...coverImages, URL.createObjectURL(files[0])];
      setCoverImages(newCoverImages);
      setFormData({
        ...formData,
        [name]: URL.createObjectURL(files[0]),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleRemoveCover = (index) => {
    const newCoverImages = [...coverImages];
    newCoverImages.splice(index, 1);
    setCoverImages(newCoverImages);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleEditBook = () => {
    try {
      fetch("https", {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddBook = () => {
    try {
      fetch("https", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="popup-container">
      <div className="book-popup">
        <div className="popup-head">
          <h2>{props.book ? "Chỉnh sửa sách" : "Thêm sách mới"}</h2>
          <button
            type="button"
            class="bi bi-x-square-fill"
            onClick={props.onClose}
          ></button>
        </div>
        <div className="popup-content">
          <div className="book-img">
            <label>
              Ảnh bìa sách:
              <input type="file" name="bookCover" onChange={handleChange} />
            </label>
            {coverImages.map((coverImage, index) => (
              <div key={index} className="cover-image-container">
                <img
                  src={coverImage}
                  alt={`Cover ${index + 1}`}
                  style={{ width: "100px", height: "100px" }}
                />
                <button
                  className="remove-cover-button"
                  onClick={() => handleRemoveCover(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <div className="book-inf">
            <div className="book-inf-container">
              <div className="book-inf-left">
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
              </div>
              <div className="book-inf-right">
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
              </div>
            </div>
            <div className="book-des">
              <label>
                Mô tả:
                <textarea
                  name="description"
                  value={formData ? formData.description : ""}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>
        <button
          class="btn-add btn btn-primary"
          onClick={props.type === "edit" ? handleEditBook : handleAddBook}
        >
          {props.book ? "Lưu" : "Thêm sách"}
        </button>
      </div>
    </div>
  );
}

export default BookPopup;
