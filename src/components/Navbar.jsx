import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">...SIMPI...</div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="education">Education</Link></li>
        <li><Link to="skills">Skills</Link></li>
        <li><Link to="projects">Projects</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
