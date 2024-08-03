import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaImage, FaEnvelope, FaHome, FaMoon, FaSun } from 'react-icons/fa';

interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="nav-head">
      <ul className="flex flex-col gap-2 list-none p-0 m-0">
        <li>
          <Link to="/about-me" style={linkStyle} className="nav-link">
            <FaUser className="mr-2" /> <span>About Me</span>
          </Link>
        </li>
        <li>
          <Link to="/gallery" style={linkStyle} className="nav-link">
            <FaImage className="mr-2" /> <span>Gallery</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyle} className="nav-link">
            <FaEnvelope className="mr-2" /> <span>Contact</span>
          </Link>
        </li>
        <li>
          <Link to="/" style={linkStyle} className="nav-link">
            <FaHome className="mr-2" /> <span>Main Screen</span>
          </Link>
        </li>
        <li>
          <button onClick={toggleDarkMode} style={linkStyle} className="nav-link">
            {isDarkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  fontWeight: "bold",
  padding: "0.5rem 1rem",
  borderRadius: "0.25rem",
  transition: "all 0.3s ease",
  display: "flex",
  alignItems: "center",
};

export default Navigation;