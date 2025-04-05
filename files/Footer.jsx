/*********************************************
 * footer section
 *********************************************/
import { useState } from "react";
import { Link } from "react-router-dom";
import data from "src/data/nav";

function Footer() {
  const today = new Date();
  const [navigationData] = useState(data);

  return (
    <div className="footer-wrap">
      <footer className="footer">
        <div className="footer__info">
          <img src="../images/logo.jpg" alt="logo" />

          <p>slogan</p>
        </div>

        <div className="footer__links">
          <h3>Navigace</h3>

          <ul>
            {navigationData.map((navItem, i) => (
              <li key={i}>
                <Link smooth to={navItem.to} className="footer__links__item">
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <div className="address">
            <h3>Adresa</h3>
            <p>
              address
            </p>
          </div>

          <div className="phone">
            <h3>Telefon</h3>
            <p>
              <a href="tel:+420123">+420123</a>
            </p>
          </div>

          <div className="email">
            <h3>Email</h3>
            <p>
              <a href="mailto:e.cz">e.cz</a>
            </p>
          </div>
        </div>
      </footer>

      <p className="copyright">&copy; {today.getFullYear()} 123</p>
    </div>
  );
}

export default Footer;
