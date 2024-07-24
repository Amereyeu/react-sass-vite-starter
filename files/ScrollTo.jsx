/*********************************************
 * scroll to top button
 *********************************************/

import { useState } from "react";
import Icon from "../../svg/Icon";

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
      <Icon id={"up"} />
    </div>
  );
}

export default ScrollTo;
