import "./sign_in.css";
import { NavLink } from "react-router-dom";

function SignIn(){
    return(
        <div className="sign-in-container">
            <div className="sign-in">
                <form action="#">
                    <h2>Đăng nhập</h2>
                    <div class="form-group">
                        <label for="username">Tài khoản:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Mật khẩu:</label>
                        <input type="password" id="password" name="password" required />
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