/*********************************************
 * scroll to top button
 *********************************************/

import { useState } from "react";

function ScrollTo() {
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
    <div
      className="top"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}>
     //add icon here
    </div>
  );
}

export default ScrollTo;
