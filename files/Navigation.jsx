/*********************************************
 * navigation
 *********************************************/
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navigationItems from "src/data/navigation";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [navigationData] = useState(navigationItems);

  const toggleNavigation = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navigation-container ${isSticky ? "sticky" : ""}`}>
      <div className="navigation">
        <div className="row">
          <div className="navigation__logo">
            <Link smooth to="/" duration={50}>
              <img src="/images/logo.jpg" alt="logo" />
            </Link>
          </div>

          <div
            className={`navigation__toggle ${isNavOpen ? "open" : ""}`}
            onClick={toggleNavigation}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`outer-menu ${isNavOpen ? "collapse-outer" : ""}`}>
          <div
            className={`navigation__menu ${isNavOpen ? "collapse-inner" : ""}`}
          >
            {navigationData.map((navItem, i) => (
              <motion.div key={i}>
                <Link
                  smooth
                  to={navItem.to}
                  className="navigation__menu__item"
                  onClick={toggleNavigation}
                  duration={50}
                >
                  {navItem.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
