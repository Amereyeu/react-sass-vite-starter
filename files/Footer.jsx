/*********************************************
 * footer section
 *********************************************/

import { useState } from "react";
import { HashLink } from "react-router-hash-link";

import data from "../../data/nav";


function Footer() {
  const today = new Date();
  const [navigationData] = useState(data);

  return (
    <div className="footer-wrap">
      <footer className="footer">
        <div className="footer__info">
          {/* <span></span> */}
          <div className="footer__info__title">

            <h3>Tornado Garage</h3>
          </div>
          <p>
            Nostra sapien quis dictumst integer non vitae torquent. Posuere orci
            enim quam cursus nam fusce convallis elementum consequat.
          </p>

        </div>

        <div className="footer__links">
          <h3>Links</h3>

          <ul>
            {navigationData.map((navItem, i) => (
              <li key={i}>
                <HashLink
                  smooth
                  to={navItem.to}
                  className="footer__links__item">
                  {navItem.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h3>Address</h3>
          <p>
            Broadway 418 <br /> Nashville, TN 38040
          </p>

          <h3>Phone</h3>
          <p>+420 123 456 789</p>

          <h3>Email</h3>
          <p>info@tornadogarage.com</p>
        </div>

        <div className="footer__hours">
          <h3>Opening hours</h3>

          <ul>
            <li>Mon - Fri: 9:00 - 17:00</li>
            <li>Saturday: 09.00 - 12.00</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </footer>

      <p className="copy">&copy; 2008 - {today.getFullYear()} Tornado Garage</p>
    </div>
  );
}

export default Footer;
