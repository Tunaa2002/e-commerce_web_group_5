import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './home.css';

function Product() {
    return (
        <div className='product-container'>
            {/* Nội dung sản phẩm */}
        </div>
    );
}

function TabBar({ iconClass, title }) {
    return (
        <div className="tab">
            <i className={`bi ${iconClass}`}></i>
            <NavLink to="/" className="nav-link">{title}</NavLink>
            <span></span>
        </div>
    );
}

function Items({ title, backgroundColor, color, iconClass }) {
    return (
        <div className='content-container'>
            <div className='title' style={{ borderTop: `2px solid ${backgroundColor}` }}>
                <h3 style={{ backgroundColor: backgroundColor, color: color }}>
                    <i className={`bi ${iconClass}`} style={{ color: color }}></i>
                    {title}
                </h3>
            </div>
            <div className='module-content'>
                {/* Nội dung module */}
            </div>
        </div>
    );
}

function Home() {
    const images = [
        'https://sieuthigiamgia.langsonweb.com/wp-content/uploads/2018/10/banner_03.jpg',
        // 'https://up-anh.vi-vn.vn/img/1711604333_895ccad090229a9a948af0a5b4fd826f.jpg',
        'https://sieuthigiamgia.langsonweb.com/wp-content/uploads/2018/10/banner_01.jpg'
    ];

    const bannerIMG = [
        'https://sieuthigiamgia.langsonweb.com/wp-content/uploads/2018/10/bn-2-1.jpg',
        'https://sieuthigiamgia.langsonweb.com/wp-content/uploads/2018/10/bn-1-1.jpg'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Thay đổi hình ảnh mỗi 3 giây

        return () => clearInterval(intervalId); // Dừng interval khi component bị unmount
    }, [images.length]);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const tabData = [
        { iconClass: "bi-suit-heart", title: "Hot Deal" },
        { iconClass: "bi-suit-heart", title: "Tiểu thuyết" },
        { iconClass: "bi-suit-heart", title: "Hot Deal" },
        { iconClass: "bi-suit-heart", title: "Hot Deal" },
        { iconClass: "bi-suit-heart", title: "Hot Deal" },
        { iconClass: "bi-suit-heart", title: "Hot Deal" },
        { iconClass: "bi-suit-heart", title: "Hot Deal" },
        { iconClass: "bi-suit-heart", title: "Hot Deal" },
        { iconClass: "bi-suit-heart", title: "Hot Deal" },
        { iconClass: "bi-suit-heart", title: "Hot Deal" }
    ];

    const itemsData = [
        { title: "Hot Deal", backgroundColor: "#ff5c00", color: "#fff", iconClass: "bi-fire" },
        { title: "Tiểu thuyết", backgroundColor: "#dd3333", color: "#fff", iconClass: "bi-emoji-kiss-fill" },
        { title: "Sách kỹ năng", backgroundColor: "#dd3333", color: "#fff", iconClass: "bi-emoji-kiss-fill" },
        { title: "Sách thiếu nhi", backgroundColor: "#dd3333", color: "#fff", iconClass: "bi-emoji-kiss-fill" },
        { title: "Sách học thuật", backgroundColor: "#dd3333", color: "#fff", iconClass: "bi-emoji-kiss-fill" },
        { title: "Sách nấu ăn & ẩm thực", backgroundColor: "#dd3333", color: "#fff", iconClass: "bi-emoji-kiss-fill" }
    ];

    return (
        <div className="body-container">
            <Container>
                <div className="row">
                    <div className="item-module">
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
                    <div className='banner-container'>
                        <div className="slider-container">
                            <div className="slider">
                                <img
                                    src={images[currentImageIndex]}
                                    alt={`Slide ${currentImageIndex}`}
                                    onClick={handleNext}
                                />
                                <i
                                    className="bi bi-chevron-compact-left"
                                    onClick={handlePrev}
                                ></i>
                                <i
                                    className="bi bi-chevron-compact-right"
                                    onClick={handleNext}
                                ></i>
                            </div>
                        </div>
                        <div className='banner'>
                            <div className='item1 poster'>
                                <img src={bannerIMG[0]} alt="banner 1" />
                            </div>
                            <div className='item2 poster'>
                                <img src={bannerIMG[1]} alt="banner 2" />
                            </div>
                        </div>
                    </div>
                    {itemsData.map((item, index) => (
                        <Items key={index} title={item.title} backgroundColor={item.backgroundColor} color={item.color} iconClass={item.iconClass} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
