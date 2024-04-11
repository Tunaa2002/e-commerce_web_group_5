import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";

function DeliveryInfo({ iconClass, info }) {
  return (
    <div className="delivery">
      <i className={`bi ${iconClass}`}></i>
      <div className="text">
        {info.map((line, index) => (
          <React.Fragment key={index}>
            <span>{line}</span>
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function Header() {
  window.addEventListener("scroll", function () {
    var bottomHeader = document.querySelector(".bottom-header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      bottomHeader.classList.add("scrolled");
    } else {
      bottomHeader.classList.remove("scrolled");
    }
  });
  return (
    <div>
      <div className="top-header">
        <div className="header-logo">Nhóm 5</div>
        <div className="header-info">
          <DeliveryInfo
            iconClass="bi-house"
            info={["96A Đường Trần Phú, P. Mộ Lao", "Hà Đông, Hà Nội"]}
          />
          <DeliveryInfo
            iconClass="bi-envelope-plus"
            info={["nhom5ec@gmail.com", "0999999999"]}
          />
          <DeliveryInfo
            iconClass="bi-send"
            info={["Miễn Phí Vận Chuyển", "Đơn hàng trên 500k"]}
          />
          <DeliveryInfo iconClass="bi-cart" info={["Giỏ Hàng", "₫"]} />
        </div>
      </div>
      <div className="bottom-header">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/trang-chu" className="nav-link">
              Trang chủ
            </NavLink>
            <NavLink to="/gioi-thieu" className="nav-link">
              Giới thiệu
            </NavLink>
            <NavDropdown title="Cửa hàng" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="/tieu-thuyet"
                className="nav-link nav-products"
              >
                Tiểu thuyết
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/sach-ky-nang"
                className="nav-link nav-products"
              >
                Sách kỹ năng
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/sach-thieu-nhi"
                className="nav-link nav-products"
              >
                Sách thiếu nhi
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/sach-hoc-thuat"
                className="nav-link nav-products"
              >
                Sách học thuật
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/sach-nau-an-va-am-thuc"
                className="nav-link nav-products"
              >
                Sách nấu ăn & ẩm thực
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/sach-y-hoc-va-suc-khoe"
                className="nav-link nav-products"
              >
                Sách y học & sức khỏe
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/sach-van-hoa-va-du-lich"
                className="nav-link nav-products"
              >
                Sách văn hóa & du lịch
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/sach-hoc-ngoai-ngu"
                className="nav-link nav-products"
              >
                Sách học ngoại ngữ
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/tin-tuc" className="nav-link">
              Tin tức
            </NavLink>
            <NavLink to="/lien-he" className="nav-link">
              Liên hệ
            </NavLink>
            <div className="search"></div>
          </Nav>
          <div class="input-group rounded">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Tìm kiếm"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="bi bi-search"></i>
            </span>
          </div>
          <div className="account">
            <NavLink to="/dang-nhap" className="sign-in">
              Đăng nhập
            </NavLink>
            <i>|</i>
            <NavLink to="/dang-ki" className="sign-up">
              Đăng kí
            </NavLink>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Header;
