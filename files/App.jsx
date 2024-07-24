import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";


import Home from "./pages/Home";
import NoPage from "./pages/NoPage";


import Footer from "./components/layout/Footer";
import ScrollTo from "./components/misc/ScrollTo";

import "./App.scss";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="*" element={<NoPage />} exact />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <ScrollTo />
    </div>
  );
}

export default App;
