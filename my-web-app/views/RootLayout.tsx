import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import MobileMessage from "../components/MobileMessage";

const RootLayout: React.FC = () => {
  const [showMessage, setShowMessage] = useState(true);

  const closeMessage = () => {
    setShowMessage(false);
  };

  return (
    <>
      <MobileMessage showMessage={showMessage} closeMessage={closeMessage} />
      <div className="nav-head-status">
        <span className="green-light" />
        <span className="open-to-work-text">
          open to work
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