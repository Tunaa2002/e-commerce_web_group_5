import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './home.css';

function Items({title, backgroundColor, color, iconClass}){
    return(
        <div className='content-container'>
            <div className='title' style={{ borderTop: `2px solid ${backgroundColor}`}}>
                <h3 style={{backgroundColor: backgroundColor, color: color}}>
                    <i className={`bi ${iconClass}`} style={{color: color}}></i>
                    {title}
                </h3>
            </div>
            <div className='module-content'>
                
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

    return (
        <div className="body-container">
            <Container>
                <div className="row">
                    <div className="item-module">
                        <div className="vertical-name">
                            <h4 className="title">Danh mục sản phẩm</h4>
                            <div className="navbar-collapse">
                                <nav className="menu">
                                    <div className="tab">
                                        <i class="bi bi-suit-heart"></i>
                                        <NavLink to="/" className="nav-link">Hot Deal</NavLink>
                                        <span></span>
                                    </div>
                                    <div className="tab">
                                        <i class="bi bi-suit-heart"></i>
                                        <NavLink to="/" className="nav-link">Quần</NavLink>
                                        <span></span>
                                    </div>
                                    <div className="tab">
                                        <i class="bi bi-suit-heart"></i>
                                        <NavLink to="/" className="nav-link">Áo</NavLink>
                                        <span></span>
                                    </div>
                                    <div className="tab">
                                        <i class="bi bi-suit-heart"></i>
                                        <NavLink to="/" className="nav-link">Giày</NavLink>
                                        <span></span>
                                    </div>
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
                                <img src={bannerIMG[0]}/>
                            </div>
                            <div className='item2 poster'>
                                <img src={bannerIMG[1]}/>
                            </div>
                        </div>
                    </div>
                    <Items 
                        title="Hot Deal"
                        backgroundColor= "#ff5c00"
                        color = "#fff"
                        iconClass="bi-fire"
                    />
                    <Items 
                        title="Quần"
                        backgroundColor= "#dd3333"
                        color = "#fff"
                        iconClass="bi-emoji-kiss-fill"
                    />
                </div>
            </Container>
        </div>
    );
}

export default Home;
