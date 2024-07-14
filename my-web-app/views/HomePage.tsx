import React, { useState, useEffect } from "react";
import "../src/App.css";

const MainScreen: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "I'm a FullStack Developer";
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="home-container">
      <div className="home-card">
        {/* <h1 className="home-heading">HELLO</h1> */}
        <div className="typing-container">
          <h2 className="typing-text">{text}</h2>
        </div>
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