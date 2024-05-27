import { assets } from "../../assets/assets";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            doloremque eos sed veniam? Sint consequatur praesentium itaque
            ullam. Deleniti temporibus facilis perspiciatis totam dolor odit a
            exercitationem neque asperiores unde.
          </p>
          <div className="footer-social-icons">
            <FaInstagram />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@foodiexpress.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright {year} &copy; foodiexpress.com - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
