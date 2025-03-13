import "./Footer.css"
import { Link } from "react-router-dom"

import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import x from "../../assets/icons/x.png";
import linkedin from "../../assets/icons/linkedin.png";
import playstore from "../../assets/icons/play-store.png";
import appstore from "../../assets/icons/app-store.png";

function Footer() {
  return (
    <section className="footer-section-wrap">
      <div className="back-to-top">
        <a href="#home">Back to top</a>
      </div>
      <footer className="footer-content-wrap">

        {/* copyright  */}

        <div className="copyright-container">
          <span id="copyright">&#169; 2025 | Indiana Infotech Pvt. Ltd.</span>  
        </div>

        {/* footer navigations  */}

        <div className="footer-navigation-container">
          <Link to={'/about'}>About Us</Link>
          <Link to={'/services'}>Services</Link>
          <Link to={'/contact-us'}>Contact Us </Link>
          <Link to={'/privacy-policy'}>Privacy Policy</Link>
          <Link to={'/term-and-conditions'}>T&C</Link>
          <Link to={'/payment-terms'}>Payment Terms</Link>
        </div>

        {/* social media links */}

        <div className="social-media-container">
          <Link to={'https://facebook.com'}>
            <img src={facebook} alt="facebook" />
          </Link>
          <Link to={'https://instagram.com'}>
            <img src={instagram} alt="instagram" />
          </Link>
          <Link to={'https://x.com'}>
            <img src={x} alt="x" />
          </Link>
          <Link to={'https://linkedin.com'}>
            <img src={linkedin} alt="linkedin" />
          </Link>
          <Link to={'https://playstore.com'}>
            <img src={playstore} alt="playstore" />
          </Link>
          <Link to={'https://appstore.com'}>
            <img src={appstore} alt="appstore" />
          </Link>
        </div>
      </footer>
    </section>
  )
}

export default Footer