import "./Forgot.css"
import { Link } from "react-router-dom"

function Forgot() {
  return (
    <div className="forgot-password-container">
        <form action="#" className="reset-form-wrap">
            <div className="input-container">
                <input type="text" id="username" name="username" required />
                <label htmlFor="username">Email ID</label>
            </div>
            <div className="log-btn-container">
                <button type="submit">RESET PASSWORD</button>
            </div>
            <Link to={'/login'} id="forgot-pass">SIGN IN?</Link>
        </form>
    </div>
  )
}

export default Forgot