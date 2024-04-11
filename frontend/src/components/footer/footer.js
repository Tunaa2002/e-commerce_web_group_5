import { NavLink, Container } from 'react-bootstrap';
import './footer.css';

function FooterMenu({ title, categories }) {
  return (
    <div className='footer-menu'>
      <div className='menu_vertical'>
        <div className='vertical-name'>
          <h4 className='title'>
            <NavLink to="/" className="nav-link">{title}</NavLink>
            <span></span>
          </h4>
          <div className='category'>
            <ul>
              {categories.map((category, index) => (
                <li key={index}><NavLink to={`/category/${category}`} className="nav-link">{category}</NavLink></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  // Danh sách các danh mục sách
  const bookCategories = [
    { title: "Tiểu thuyết", categories: ["Tiểu thuyết lãng mạn", "Tiểu thuyết kinh điển", "Tiểu thuyết hài hước", "Tiểu thuyết khoa học viễn tưởng", "Tiểu thuyết kỳ ảo"] },
    { title: "Sách kỹ năng", categories: ["Kỹ năng giao tiếp", "Kỹ năng quản lý thời gian", "Phát triển bản thân", "Kỹ năng lãnh đạo", "Kỹ năng sáng tạo"] },
    { title: "Sách thiếu nhi", categories: ["Truyện cổ tích", "Truyện tranh", "Sách học tiếng Anh cho trẻ em", "Sách học vẽ và màu sắc", "Sách học toán cho trẻ em"]},
    { title: "Sách học thuật", categories: ["Khoa học", "Kinh tế", "Lịch sử", "Toán học", "Triết học"]},
    { title: "Sách nấu ăn & ẩm thực", categories: ["Công thức nấu ăn", "Sách làm bánh", "Sách về ẩm thực Việt Nam", "Sách ẩm thực thế giới", "Sách về rượu vang và đồ uống"],},
    { title: "Sách y học & sức khỏe", categories: ["Sách dinh dưỡng và lối sống lành mạnh", "Sách về bệnh lý và chăm sóc sức khỏe", "Sách về yoga và thiền", "Sách về phòng tránh bệnh và phẫu thuật", "Sách về tâm lý học và tâm thần học"]},
    { title: "Sách văn hóa & du lịch", categories: ["Sách văn hóa Việt Nam", "Sách du lịch châu Á", "Sách về lịch sử và văn hóa các quốc gia", "Sách hướng dẫn du lịch tự túc", "Sách về các địa điểm du lịch nổi tiếng"]},
    { title: "Sách học ngoại ngữ", categories: ["Sách học tiếng Anh", "Sách học tiếng Pháp", "Sách học tiếng Hàn", "Sách học tiếng Trung", "Sách học tiếng Nhật"]},
  ];

  return (
    <div className='footer-container clear-fix'>
        <div className='dv-builder-full'>
            <Container>
                <div className='dv-module-container'>
                    <div className='dv-module-content coupon'>
                        <i className='bi bi-send'></i>
                        <span className='text-1-coupon'>ĐĂNG KÝ VÀ NHẬN</span>
                        <span>
                            VÀ NHẬN
                            <span>500K</span>
                            COUPON CHO ĐƠN HÀNG ĐẦU TIÊN
                        </span>
                    </div>
                    <div className='dv-module-content coupon-email'>
                        <span className='wpcf7-form-control-wrap text-1'>
                            <input type="text" name="text-1" value="" size="40" className="wpcf7-form-control wpcf7-text form-control" id="txtemail" aria-invalid="false" placeholder="Nhập email" />
                            <input type="submit" value="Đăng ký" className="wpcf7-form-control wpcf7-submit newsletters-btn"></input>
                        </span>
                    </div>
                    <div className='dv-module-content quang-cao'>
                        <i className='bi bi-facebook'></i>
                        <i className='bi bi-twitter'></i>
                        <i className='bi bi-google'></i>
                        <i className='bi bi-dribbble'></i>
                        <i className='bi bi-instagram'></i>
                        <i className='bi bi-pinterest'></i>
                        <i className='bi bi-linkedin'></i>
                    </div>
                </div>
            </Container>
        </div>
        <div className='footer-menu-container clear-fix'>
            <Container className='clear-fix'>
                {bookCategories.map((category, index) => (
                    <FooterMenu key={index} title={category.title} categories={category.categories} />
                ))}
            </Container>
        </div>
    </div>
  );
}

export default Footer;
