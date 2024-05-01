import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./sign_in.css";

function SignIn() {
    // const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [signInSuccess, setSignInSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const requestData = {
        username: formData.username,
        password: formData.password
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://127.0.0.1:5000/sign_in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        })
        .then(response => {
            if (response.ok) {
                setSignInSuccess(true); // Đặt signInSuccess thành true nếu đăng nhập thành công
                return response.json();
            } else {
                throw new Error("Failed to sign in");
            }
        })
        // .then(data => {
        //     // Kiểm tra role và chuyển hướng tương ứng
        //     if (data.role === 0) {
        //         history.push("/trang-chu");
        //     } else if (data.role === 1) {
        //         history.push("/admin");
        //     } else {
        //         throw new Error("Invalid role");
        //     }
        // })
        .catch(error => {
            console.error("Error:", error);
            // Xử lý thông báo đăng nhập thất bại
        });
    };

    return (
        <div className="sign-in-container">
            <div className="sign-in">
                <form onSubmit={handleSubmit}>
                    <h2>Đăng nhập</h2>
                    {signInSuccess && <p className="success-message">Đăng nhập thành công!</p>} {/* Hiển thị thông báo nếu đăng nhập thành công */}
                    <div className="form-group">
                        <label htmlFor="username">Tài khoản:</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <NavLink to="/quen-mat-khau" className="nav-link">Quên mật khẩu?</NavLink>
                    <NavLink to="/dang-ki" className="nav-link">Nhấn vào đây nếu chưa có tài khoản</NavLink>
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
