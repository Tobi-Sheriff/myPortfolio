import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">my<span className="pink">Portfolio</span></Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto navlinks">
            <Link className={`nav-link ${location.pathname === '/' && location.hash === '#projects' ? 'active' : ''}`} to="/#projects">Projects</Link>
            <Link className={`nav-link ${location.pathname === '/' && location.hash === '#skill-sets' ? 'active' : ''}`} to="/#skill-sets">Skills</Link>
            <Link className={`nav-link ${location.pathname === '/' && location.hash === '#contact' ? 'active' : ''}`} to="/#contact">Contact</Link>
          </div>
        </div>

        {/* Mobile Menu Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="d-lg-none w-100 bg-dark position-absolute start-0 top-100 p-3"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navVariants}
              style={{ borderBottom: '1px solid var(--glass-border)' }}
            >
              <div className="navbar-nav">
                <Link className="nav-link" to="/#projects" onClick={() => setIsOpen(false)}>Projects</Link>
                <Link className="nav-link" to="/#skill-sets" onClick={() => setIsOpen(false)}>Skills</Link>
                <Link className="nav-link" to="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
