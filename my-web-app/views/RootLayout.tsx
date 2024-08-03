import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import MobileMessage from "../components/MobileMessage";

const statusWork: string = "not open";

const RootLayout: React.FC = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const closeMessage = () => {
    setShowMessage(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const statusStyle = statusWork === "open" 
    ? { backgroundColor: isDarkMode ? "rgba(46, 125, 50, 0.2)" : "rgba(255, 255, 255, 0.9)", border: `2px solid ${isDarkMode ? "#4CAF50" : "#2E7D32"}` }
    : { backgroundColor: isDarkMode ? "rgba(198, 40, 40, 0.2)" : "rgba(255, 200, 200, 0.9)", border: `2px solid ${isDarkMode ? "#EF5350" : "#C62828"}` };

  const lightColor = statusWork === "open" ? "green-light" : "red-light";
  const statusText = statusWork === "open" ? "open to work" : "not open to work";

  return (
    <div className={`root-layout ${isDarkMode ? 'dark' : ''}`}>
      <MobileMessage showMessage={showMessage} closeMessage={closeMessage} />
      <div className="nav-head-status" style={statusStyle}>
        <span className={lightColor} />
        <span className="open-to-work-text" style={{ color: statusWork === "open" ? (isDarkMode ? "#4CAF50" : "#2E7D32") : (isDarkMode ? "#EF5350" : "#C62828") }}>
          {statusText}
        </span>
      </div>
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <section
        className={`main-content ${isDarkMode ? 'dark' : ''}`}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          border: isDarkMode ? "1px solid #555" : "1px solid black",
          borderRadius: "0.25rem",
        }}
      >
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;