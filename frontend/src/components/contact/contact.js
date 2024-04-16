import React, { useState } from "react";
import { NavLink, Container } from "react-bootstrap";
import "./contact.css";

function TabBar({ iconClass, title }) {
  return (
      <div className="tab">
          <i className={`bi ${iconClass}`}></i>
          <NavLink to="/" className="nav-link">{title}</NavLink>
          <span></span>
      </div>
  );
}

function Contact() {

  const tabData = [
    { iconClass: "bi-suit-heart", title: "Hot Deal" },
    { iconClass: "bi-suit-heart", title: "Tiểu thuyết" },
    { iconClass: "bi-suit-heart", title: "Sách kỹ năng" },
    { iconClass: "bi-suit-heart", title: "Sách thiếu nhi" },
    { iconClass: "bi-suit-heart", title: "Sách học thuật" },
    { iconClass: "bi-suit-heart", title: "Sách nấu ăn & ẩm thực" },
    { iconClass: "bi-suit-heart", title: "Sách y học & sức khỏe" },
    { iconClass: "bi-suit-heart", title: "Sách văn hóa & du lịch" },
    { iconClass: "bi-suit-heart", title: "Sách học ngoại ngữ" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi dữ liệu
    console.log(formData);
    // Đặt mã xử lý gửi dữ liệu ở đây (ví dụ: sử dụng fetch để gửi dữ liệu đến API)
  };

  return (
    <div className="contact-container clear-fix">
      <Container>
        <div className="menu-category">
          <div className="vertical-name">
            <h4 className="title">Danh mục sản phẩm</h4>
              <div className="navbar-collapse">
                <nav className="menu">
                    {tabData.map((tab, index) => (
                        <TabBar key={index} iconClass={tab.iconClass} title={tab.title} />
                    ))}
                </nav>
              </div>
          </div>
        </div>
        <div className="content-detail">
          <div className="show-pro"></div>
          <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Họ tên (*)"
                  required
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Địa chỉ (*)"
                />
              </div>
              <div className="row">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Điện thoại (*)"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email (*)"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Tiêu đề (*)"
                required
                className="contact-title"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Nội dung (*)"
                rows="6"
                required
                className="contact-content"
              ></textarea>
              <input type="submit" value="Gửi đi" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
