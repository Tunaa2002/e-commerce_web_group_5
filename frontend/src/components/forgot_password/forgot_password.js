import "./forgot_password.css";
import { NavLink } from "react-router-dom";

function ForgotPassword(){
    return(
        <div className="forgot-password-container">
            <div className="forgot-password">
                <form action="#">
                    <h2>Quên mật khẩu</h2>
                    <div class="form-group">
                        <label for="username">Tài khoản:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Mật khẩu:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <NavLink to="/dang-nhap" className="nav-link">Đến đăng nhập</NavLink>
                    <button type="submit">Xác nhận</button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;