import { NavLink } from "react-router-dom";
import "./sign_up.css";

function SignUp(){
    return(
        <div className="sign-up-container">
            <div className="sign-up">
                <form action="#">
                    <h2>Đăng kí</h2>
                    <div class="form-group">
                        <label for="username">Họ tên:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Email:</label>
                        <input type="password" id="email" name="email" required />
                    </div>
                    <div class="form-group">
                        <label for="username">Số điện thoại:</label>
                        <input type="text" id="phone" name="phone" required />
                    </div>
                    <div class="form-group">
                        <label for="username">Tên đăng nhập</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div class="form-group">
                        <label for="username">Mật khẩu</label>
                        <input type="text" id="password" name="password" required />
                    </div>
                    <div class="form-group">
                        <label for="username">Nhập lại mật khẩu</label>
                        <input type="text" id="repassword" name="repassword" required />
                    </div>
                    <NavLink to="/dang-nhap" className="nav-link">Nhấn vào đây nếu đã có tài khoản</NavLink>
                    <button type="submit">Đăng kí</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
