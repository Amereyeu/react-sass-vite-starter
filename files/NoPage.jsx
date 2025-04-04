/*********************************************
 * 404 page
 *********************************************/
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <motion.div
      className="no-page"
      id="top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <h2>Stránka nenalezena</h2>

      <Link to="/" className="no-page__link">
        Zpět na úvodní stránku
      </Link>
    </motion.div>
  );
}

export default NoPage;
