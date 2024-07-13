import React, { useState, useEffect } from "react";
import "../src/App.css";

const MainScreen: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "Welcome, I'm Faisal, a FullStack Developer";
  const typingSpeed = 100; // milliseconds per character

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
    <div className="flex items-center justify-center h-screen bg-transparent">
      <h1 className="text-gray-800 typing-text">{text}</h1>
    </div>
  );
};

export default MainScreen;