import "./Footer.css"
import { Link } from "react-router-dom"

import location from "../../assets/footer/location.svg";
import phone from "../../assets/footer/phone.svg";
import email from "../../assets/footer/email.svg";
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
      <footer className="footer-container">
        <div className="containers">
          {/* upper containers  */}

          <div className="upper-containers">
            {/* first upper container  */}
            <div className="upc first-container">
              <div className="quick-links-container">
                <Link to={'/about'}>About</Link>
                <Link to={'/service'}>Services</Link>
                <Link to={'/carrer'}>Carrer</Link>
                <Link to={'/request-a-demo'}>Contact Us</Link>
                <Link to={'/privacy-and-policy'}>Privacy & Policy</Link>
                <Link to={'/terms-and-conditions'}>Terms & Conditions</Link>
                <Link to={'/payment-terms'}>Payment Terms</Link>
              </div>
            </div>

            {/* second upper containers */}

            <div className="upc second-container">
              <div className="details">
                <div className="detail-logo-container">
                  <img src={location} alt="location" />
                </div>
                <address>
                  Dev Rajiya Bhawan, 1st Floor, Chandmari Road, Kankarbagh, Patna, Bihar, 800020 (India)
                </address>
              </div>

              <div className="details">
                <div className="detail-logo-container">
                  <img src={phone} alt="phone" id="phone-img"/>
                </div>
                <a href="tel:+916203395765">+91 62033 95765</a>
              </div>

              <div className="details">
                <div className="detail-logo-container">
                  <img src={email} alt="phone" id="phone-img"/>
                </div>
                <a href="mailto:sales@indianainfotech.in">sales@indianainfotech.in</a>
              </div>
            </div>

            {/* third upper container  */}

            <div className="upc google-map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.2310720707706!2d85.14436769999999!3d25.597236799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a7acd989416b%3A0x61bb5162d6d1ad35!2sIndiana%20Infotech!5e0!3m2!1sen!2sin!4v1742033305369!5m2!1sen!2sin" width="600" height="450" style={{border: "0"}} loading="lazy"></iframe>
            </div>
          </div>

          {/* down containers  */}

          <div className="down-containers">
            <div className="social-media-links">
              <div className="links">
                <Link to={'#'}>
                  <img src={facebook} alt="facebook-img" />
                </Link>
              </div>
              <div className="links">
                <Link to={'#'}>
                  <img src={instagram} alt="instagram-img" />
                </Link>
              </div>
              <div className="links">
                <Link to={'#'}>
                  <img src={x} alt="x-img" />
                </Link>
              </div>
              <div className="links">
                <Link to={'#'}>
                  <img src={linkedin} alt="linkedin-img" />
                </Link>
              </div>
              <div className="links">
                <Link to={'#'}>
                  <img src={playstore} alt="playstore-img" />
                </Link>
              </div>
              <div className="links">
                <Link to={'#'}>
                  <img src={appstore} alt="appstore-img" />
                </Link>
              </div>
            </div>

            {/* copyright  */}
            <div className="copyright">
              &#169; 2025 Indiana Infotech Pvt. Ltd. 
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer