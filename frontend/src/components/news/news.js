import { NavLink, Container } from "react-bootstrap";
import "./news.css";

function TabBar({ iconClass, title }) {
  return (
    <div className="tab">
      <i className={`bi ${iconClass}`}></i>
      <NavLink to="/" className="nav-link">
        {title}
      </NavLink>
      <span></span>
    </div>
  );
}

function News() {
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

  return (
    <div className="news-container">
      <Container className="clear-fix">
        <div className="menu-category">
          <div className="vertical-name">
            <h4 className="title">Danh mục sản phẩm</h4>
            <div className="navbar-collapse">
              <nav className="menu">
                {tabData.map((tab, index) => (
                  <TabBar
                    key={index}
                    iconClass={tab.iconClass}
                    title={tab.title}
                  />
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="content-detail">

        </div>
      </Container>
    </div>
  );
}

export default News;
