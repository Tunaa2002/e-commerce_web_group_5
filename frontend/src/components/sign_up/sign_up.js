import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./sign_up.css";

function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        username: "",
        password: "",
        repassword: ""
    });
    const [isSignUpSuccess, setIsSignUpSuccess] = useState(false); // State để kiểm soát hiển thị thông báo

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Kiểm tra mật khẩu nhập lại
        if (formData.password !== formData.repassword) {
            console.error("Mật khẩu nhập lại không khớp");
            return; // Ngăn chặn việc gửi yêu cầu nếu mật khẩu nhập lại không khớp
        }
    
        // Tạo đối tượng chứa chỉ các trường dữ liệu cần gửi
        const requestData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            username: formData.username,
            password: formData.password
        };
    
        // Gọi API và gửi dữ liệu từ requestData
        fetch("http://127.0.0.1:5000/sign_up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        })
        .then(response => {
            if (response.ok) {
                console.log("User signed up successfully");
                setIsSignUpSuccess(true); // Đặt isSignUpSuccess thành true nếu đăng ký thành công
                // Xử lý khi đăng ký thành công, ví dụ: chuyển hướng đến trang đăng nhập
                
            } else {
                console.error("Failed to sign up user");
                // Xử lý khi đăng ký không thành công
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    };
    

    return (
        <div className="sign-up-container">
            <div className="sign-up">
                <form onSubmit={handleSubmit}>
                    <h2>Đăng kí</h2>
                    {isSignUpSuccess && <p>Đăng ký thành công!</p>} {/* Hiển thị thông báo nếu đăng ký thành công */}
                    <div className="form-group">
                        <label htmlFor="name">Họ tên:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Số điện thoại:</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="repassword">Nhập lại mật khẩu</label>
                        <input type="password" id="repassword" name="repassword" value={formData.repassword} onChange={handleChange} required />
                    </div>
                    <NavLink to="/dang-nhap" className="nav-link">Nhấn vào đây nếu đã có tài khoản</NavLink>
                    <button type="submit">Đăng kí</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
