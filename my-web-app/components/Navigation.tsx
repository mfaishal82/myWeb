import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaImage, FaEnvelope, FaHome, FaMoon, FaSun, FaBars } from 'react-icons/fa';

interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-head">
      {isMobile && (
        <div className="burger-menu" onClick={toggleMenu}>
          <FaBars />
        </div>
      )}
      <ul ref={menuRef} className={`flex flex-col gap-2 list-none p-0 m-0 ${isMobile ? (isMenuOpen ? 'menu-open' : 'menu-closed') : ''}`}>
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
        <li style={{display: 'none'}}>
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