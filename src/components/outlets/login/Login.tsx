import { useState } from "react";
import user from "../../../assets/login/user.svg";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="login-wrap">
      <div className="login-container">
            <div className="user-logo-container">
            <div className="user-img-container">
                <img src={user} alt="user-logo" />
            </div>
            <p id="login-text">ADMIN LOGIN</p>
            </div>
            <form action="#" className="login-form-wrap">
                <div className="input-container">
                    <input type="text" id="username" name="username" required />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="input-container password-container">
                    <input type= {showPassword ? "text" : "password"}
                    id="password" name="password" required />
                    <label htmlFor="password">Password</label>
                    <button
                        type="button"
                        className="toggle-password"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                <div className="log-btn-container">
                    <button type="submit">LOGIN</button>
                </div>
            </form>
            <Link to={'/forgot-password'} id="forgot-pass">Forgot Password?</Link>
      </div>
    </div>
  );
}

export default Login;