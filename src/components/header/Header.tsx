import logo from "../../assets/logo/CompanyLogo.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header-section-wrap">
      <header className="header-container-wrap">
        <div className="header-content-wrap">

          {/* company logo */}

          <div className="logo-container-wrap">
            <Link to={'/'}>
              <img src={logo} alt="company-logo" />
            </Link>
          </div>

          {/* navigation options  */}

          <div className="navigation-container-wrap">
            <nav>
              <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About Us</Link></li>
                <li><Link to={'/services'}>Services</Link></li>
                <li><Link to={'/carrer'}>Carrer</Link></li>
              </ul>
            </nav>
          </div>

          {/* header buttons  */}

          <div className="header-btn-wrap">
            <div className="header-btn-cont">
              <div className="btn-container request-btn-container">
                <Link to={'/request-a-demo'} id="head-btn">Request A Demo</Link>
              </div>
              <div className="btn-container login-btn-container">
                <Link to={'/login'} id="head-btn">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Header