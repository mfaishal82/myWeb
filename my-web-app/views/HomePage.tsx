import React from "react";
// import Navbar from "../components/Navbar";
import "../src/App.css";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    // <div className="container">
    <>
      <nav className="nav-head" style={{ position: "absolute", top: 0, left: 0, border: "1px solid black", margin: "2%", padding: "5%" }}>
      <div>About Me</div>
      <div>Gallery</div>
      <div>Contact</div>
      <Link to="/"><div>Main Screen</div></Link>
      </nav>

      <section style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", border: "1px solid black" }}>
      <img src="public/vite.svg" alt="" /> 
      Ini tampilan utama
      </section>

      <nav className="nav-bottom" style={{ position: "absolute", bottom: 0, right: 0, border: "1px solid black", margin: "2%", padding: "5%" }}>
      <div>Link 1</div>
      <div>Link 2</div>
      <div>Link 3</div>
      </nav>
    </>
    // </div>

  );
};

export default HomePage;
