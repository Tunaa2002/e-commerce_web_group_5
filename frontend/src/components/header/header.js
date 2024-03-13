import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css';


function Header(){
    return(
        <div>
            <div className="top-header">
                <div>Nhóm 5</div>
            </div>
            <div className="bottom-header">
                <Container>
                    <Nav className="me-auto">
                        <NavLink to="/trang-chu" className="nav-link">Trang chủ</NavLink>
                        <NavLink to="/gioi-thieu" className="nav-link">Giới thiệu</NavLink>
                        <NavDropdown title="Cửa hàng" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/quan" className="nav-link nav-products">Quần</NavDropdown.Item>
                            <NavDropdown.Item href="/ao" className="nav-link nav-products">Áo</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to="/tin-tuc" className="nav-link">Tin tức</NavLink>
                        <NavLink to="/lien-he" className="nav-link">Liên hệ</NavLink>
                        <div className="account">
                            <NavLink to="/dang-nhap" className="sign-in">Đăng nhập</NavLink>
                            <i>|</i>
                            <NavLink to="/dang-ki" className="sign-up">Đăng kí</NavLink>
                        </div>
                    </Nav>
                </Container>
            </div>
        </div>
    );
}

export default Header;