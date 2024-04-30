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

function NewsContent({image,title,releaseDate,detail}){
  return (
    <div className="news-content clear-fix">
      <div className="news-img">
        <NavLink to="/tin-tuc"><img src={image}/></NavLink>
      </div>
      <div className="news-text">
        <h2 className="title">
          <NavLink to="/tin-tuc">{title}</NavLink>
        </h2>
        <p className="release-date">{releaseDate}</p>
        <p className="detail">{detail}</p>
      </div>
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

  const newsData = [
    {image: "https://bizweb.dktcdn.net/100/398/603/articles/wedding-door-gifts-01.jpg?v=1596534125967", title: "Tặng gì cho một nửa ngày 20-10?", releaseDate: "25/04/2024", detail: "Ngày Quốc tế phụ nữ đang đến gần, cánh nam giới đang băn khoăn không biết chọn mua món quà gì", },
    {image: "https://bizweb.dktcdn.net/100/398/603/articles/wedding-door-gifts-01.jpg?v=1596534125967", title: "Tặng gì cho một nửa ngày 20-10?", releaseDate: "25/04/2024", detail: "Ngày Quốc tế phụ nữ đang đến gần, cánh nam giới đang băn khoăn không biết chọn mua món quà gì", },

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
            {newsData.map((news, index) => (
              <NewsContent 
                key={index}
                image={news.image}
                title={news.title}
                releaseDate={news.releaseDate}
                detail={news.detail}
              />
            ))}
        </div>
      </Container>
    </div>
  );
}

export default News;
