import logo from "../../assets/logo/CompanyLogo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import menu from "../../assets/resicons/menu.png";
import close from "../../assets/resicons/close.png";
import { useState } from "react";

function Header() {
  const [menuStatus, setMenuStatus] = useState(false);

  function changeMenuMode(){
    if(menuStatus){
      setMenuStatus(false)
    }else {
      setMenuStatus(true)
    }
  }

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

          {/* menu icon  */}

          <div className="menu-icon-wrap" onClick={changeMenuMode}>
            <img src={menuStatus ? close : menu} alt="menu-icon" />
          </div>

          {/* responsive navigation options  */}

          <div className="res-nav-wrap" style={{display: menuStatus ? "block" : "none"}}>
            <div className="res-nav-container">
                <Link to={'/'} onClick={changeMenuMode}>Home</Link>
                <Link to={'/about'} onClick={changeMenuMode}>About Us</Link>
                <Link to={'/services'} onClick={changeMenuMode}>Services</Link>
                <Link to={'/carrer'} onClick={changeMenuMode}>Carrer</Link>
            </div>
            <div className="res-btn-container">
                <Link to={'/login'} id="res-req" onClick={changeMenuMode}>Login</Link>
                <Link to={'/request-a-demo'} id="res-req" onClick={changeMenuMode}>Request A Demo</Link>
            </div>
          </div>

        </div>
      </header>
    </section>
  )
}

export default Header