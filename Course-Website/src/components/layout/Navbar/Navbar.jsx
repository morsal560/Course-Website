import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          Course Website
        </NavLink>

        <button
          className="navbar-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/courses" onClick={closeMenu}>
            Courses
          </NavLink>

          <NavLink to="/registration" onClick={closeMenu}>
            Registration
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;