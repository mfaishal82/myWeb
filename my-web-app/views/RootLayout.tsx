import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginRight: "20px",
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "3px",
            borderRadius: "1.5rem",
            border: "1px solid #4CAF50",
            backgroundColor: "#E8F5E9",
            padding: "5px 10px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <span className="green-light" />
          <span
            style={{ marginLeft: "5px", color: "#2E7D32", fontWeight: "bold" }}
          >
            open to work
          </span>
        </div>
      </div>

      <nav
        className="nav-head"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          margin: "2%",
          padding: "1rem",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "0.5rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
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
              About Me
            </Link>
          </li>
          <li>
            <Link to="/gallery" style={linkStyle}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/" style={linkStyle}>
              Main Screen
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
