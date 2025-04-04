/*********************************************
 * scroll to top button
 *********************************************/
import { useState } from "react";

function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 200) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 200) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div className="top-wrap">
      <div
        className="top"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
       // icon here
      </div>
    </div>
  );
}

export default ScrollToTop;

