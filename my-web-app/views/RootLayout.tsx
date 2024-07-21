import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import MobileMessage from "../components/MobileMessage";

const statusWork: string = "not open";

const RootLayout: React.FC = () => {
  const [showMessage, setShowMessage] = useState(true);

  const closeMessage = () => {
    setShowMessage(false);
  };

  const statusStyle = statusWork === "open" 
    ? { backgroundColor: "rgba(255, 255, 255, 0.9)", border: "2px solid #2E7D32" }
    : { backgroundColor: "rgba(255, 200, 200, 0.9)", border: "2px solid #C62828" };

  const lightColor = statusWork === "open" ? "green-light" : "red-light";
  const statusText = statusWork === "open" ? "open to work" : "not open to work";

  return (
    <>
      <MobileMessage showMessage={showMessage} closeMessage={closeMessage} />
      <div className="nav-head-status" style={statusStyle}>
        <span className={lightColor} />
        <span className="open-to-work-text" style={{ color: statusWork === "open" ? "#2E7D32" : "#C62828" }}>
          {statusText}
        </span>
      </div>
      <Navigation />
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
        <Outlet />
      </section>
    </>
  );
};

export default RootLayout;