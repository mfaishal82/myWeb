import React from "react";
// import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../src/App.css';

const AboutPage: React.FC = () => {
  return (
    <section className="about-container">
      <div className="about-card">
        <h1 className="about-heading">ABOUT ME</h1>
        <p className="about-intro">
          Hello! I'm <span className="highlight">Muhammad Faisal</span>, a <span className="highlight">Fullstack Developer</span> from Depok, Indonesia. My journey into software development began out of sheer curiosity, and I quickly realized that this is my true calling. The process of learning new technologies has not only equipped me with technical skills but also fostered a <span className="highlight">growth mindset</span> that I cherish.
        </p>
        
        {/* <div className="contact-links">
          <a href="mailto:mf.ihbs@gmail.com"><FaEnvelope /> Email</a>
          <a href="https://www.linkedin.com/in/mfaishal82/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
          <a href="https://github.com/mfaishal82" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
        </div> */}

        <div className="section">
          <h3>Key Skills</h3>
          <ul className="skills-list">
            <li>JavaScript & TypeScript</li>
            <li>React & Next.js</li>
            <li>Node.js & Express</li>
            <li>MongoDB & PostgreSQL</li>
            <li>RESTful APIs & GraphQL</li>
            <li>Git & Version Control</li>
          </ul>
        </div>

        <div className="section">
          <h3>Education</h3>
          <ul>
            <li>
              <div className="education-item">
                <div className="school">Hacktiv8</div>
                <div className="program">Full Stack JavaScript Immersive Program</div>
                <div className="date">November 2023 – April 2024</div>
              </div>
            </li>
            <li>
              <div className="education-item">
                <div className="school">Institut Agama Islam Persis</div>
                <div className="program">Bachelor of Education</div>
                <div className="date">2019 – 2023 | GPA: 3.71/4.00</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="section">
          <h3>Interests</h3>
          <p>
            When not coding, I enjoy exploring new technologies, contributing to open-source projects, and blending my background in education with innovative tech solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;