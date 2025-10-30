import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={close}>
          Chinna<span>Studio</span>
        </Link>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={close}>Home</Link>
          <Link to="/portfolio" onClick={close}>Portfolio</Link>
          <Link to="/aboutus" onClick={close}>About Us</Link>
          <Link to="/contactus" onClick={close}>Contact Us</Link>
        </div>

        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)} aria-hidden>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
