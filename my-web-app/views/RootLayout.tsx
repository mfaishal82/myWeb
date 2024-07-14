import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUser, FaImage, FaEnvelope, FaHome } from 'react-icons/fa';

const RootLayout: React.FC = () => {
  return (
    <>
      <div className="nav-head-status">
          <span className="green-light" />
          <span
            style={{ marginLeft: "5px", color: "#2E7D32" }}
          >
            open to work
          </span>
      </div>

      <nav className="nav-head">
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <li>
            <Link to="/about-me" style={linkStyle}>
              <FaUser style={{ marginRight: '5px' }} /> About Me
            </Link>
          </li>
          <li>
            <Link to="/gallery" style={linkStyle}>
              <FaImage style={{ marginRight: '5px' }} /> Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" style={linkStyle}>
              <FaEnvelope style={{ marginRight: '5px' }} /> Contact
            </Link>
          </li>
          <li>
            <Link to="/" style={linkStyle}>
              <FaHome style={{ marginRight: '5px' }} /> Main Screen
            </Link>
          </li>
        </ul>
      </nav>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          border: "1px solid black",
          borderRadius: "0.25rem",
        }}
      >
        {/* <img src="public/vite.svg" alt="" /> 
                Ini tampilan utama */}
        <Outlet />
      </section>
    </>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "bold",
  padding: "0.5rem 1rem",
  borderRadius: "0.25rem",
  transition: "background-color 0.3s ease",
  display: "block",
};

export default RootLayout;