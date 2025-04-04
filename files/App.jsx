import { AnimatePresence } from "framer-motion";
import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/misc/ScrollToTop";

import "./App.scss";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [location.pathname]);

    return children;
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Wrapper>
          <Routes>
            <Route path="*" element={<NoPage />} exact />
            <Route path="/" element={<Home />} />
          </Routes>
        </Wrapper>
      </AnimatePresence>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
