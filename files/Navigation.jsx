/*********************************************
 * navigation
 *********************************************/

import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import navigationItems from "../../data/nav";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [navigationData] = useState(navigationItems);

  const toggleNavigation = () => {
    const body = document.getElementById("body");
    setIsNavOpen((prevState) => !prevState);
    // body.classList.toggle("fixed_body");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 23);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navigation-container ${isSticky ? "sticky2" : ""}`}>
      <div className="navigation">
        <div className="row">
          <div className="navigation__logo">Tornado Garage</div>

          <div
            className={`navigation__toggle ${isNavOpen ? "open" : ""}`}
            onClick={toggleNavigation}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`navigation__menu ${isNavOpen ? "collapse" : ""}`}>
          {navigationData.map((navItem, i) => (
            <HashLink
              key={i}
              smooth
              to={navItem.to}
              className="navigation__menu__item"
              onClick={toggleNavigation}
              duration={50}>
              {navItem.name}
            </HashLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
