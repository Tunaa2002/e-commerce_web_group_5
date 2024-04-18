import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Home from "./components/home/home.js";
import Introduction from "./components/introduction/introduction.js";
import Contact from "./components/contact/contact";
import App from './App';
import News from './components/news/news.js';
import SignUp from './components/sign_up/sign_up.js';
import SignIn from './components/sign_in/sign_in.js';
import ForgotPassword from './components/forgot_password/forgot_password.js';
import ManageBooks from './components/management/book_manage.js';
import OrderManage from './components/management/oder_manage.js';
import BookPopup from './components/management/book_popup.js';

const root = ReactDOM.createRoot((document.getElementById('root')));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='/trang-chu' element={<Home />} />
                    <Route path="/gioi-thieu" element={<Introduction />} />
                    <Route path='/sach-hoc-thuat' element={<Home />}/>
                    <Route path='/tieu-thuyet' element={<Home />}/>
                    <Route path='/sach-ky-nang' element={<Home />}/>
                    <Route path='/sach-nau-an-va-am-thuc' element={<Home />}/>
                    <Route path='/sach-thieu-nhi' element={<Home />}/>
                    <Route path='/sach-y-hoc-va-suc-khoe' element={<Home />}/>
                    <Route path='/sach-van-hoa-va-du-lich' element={<Home />}/>
                    <Route path='/sach-hoc-ngoai-ngu' element={<Home />}/>
                    <Route path='/tin-tuc' element={<News />}/>
                    <Route path="/lien-he" element={<Contact />} />
                    <Route path="/dang-nhap" element={<SignIn />} />
                    <Route path="/dang-ki" element={<SignUp />} />
                    <Route path="/quen-mat-khau" element={<ForgotPassword />} />
                    <Route path="/quan-ly-sach" element={<ManageBooks />} />
                    <Route path="/quan-ly-don-hang" element={<OrderManage />} />
                    <Route path="/test" element={<BookPopup />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);