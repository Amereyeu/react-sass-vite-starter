/*********************************************
 * home page
 *********************************************/

import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import Navigation from "../components/layout/Navigation";



function Home() {
  return (
    <motion.div
      className="content-wrap"
      id="top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Navigation />

      <main>

      </main>
    </motion.div>
  );
}

export default Home;
