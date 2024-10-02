import React, { useEffect } from "react";
import TypeIt from "typeit";
import "../src/App.css";

const MainScreen: React.FC = () => {

  useEffect(() => {
    new TypeIt("#callback", {
      strings: ["Hi I'm Full Stack Developer"],
      afterStep: function (instance: TypeIt) {
        instance.getElement().style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      },
    }).go();
  }, []);

  return (
    <section className="home-container">
      <div className="home-card">
        {/* <h1 className="home-heading">HELLO</h1> */}
        <p id="callback" style={{fontSize: "30px", marginBottom: "10px"}}></p>
        <p className="home-intro">
          Passionate about creating innovative web solutions and turning ideas into reality.
          Explore my journey through code and creativity.
        </p>
        <div className="cta-container">
          <a href="/about-me" className="cta-button">Discover My Story</a>
          <a href="/gallery" className="cta-button">View My Projects</a>
          <a href="/contact" className="cta-button">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default MainScreen;