import React from "react";
import Navbar from "../components/Navbar";
import "../src/App.css";

const HomePage: React.FC = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <h1>Welcome to my web app</h1>
        <p>Here you can find all the information you need</p>
      </main>
    </>
  );
};

export default HomePage;
