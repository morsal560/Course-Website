import { FiMail, FiPhone } from "react-icons/fi";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Course Website</h2>
          <p>
            Learn new skills and build your future with our courses.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>
            <FiPhone />
            +93 700 000 000
          </p>

          <p>
            <FiMail />
            info@coursewebsite.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Course Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;