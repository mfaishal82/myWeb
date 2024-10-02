import React from "react";
import { FaHeart, FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import '../src/App.css';

const AboutPage: React.FC = () => {
  return (
    <section className="about-container">
      <div className="about-card">
        <h1 className="about-heading">ABOUT ME</h1>
        <p className="about-intro">
          Hello! I'm <span className="highlight">Muhammad Faisal</span>, a <span className="highlight">Fullstack Developer</span>. My journey into software development began out of sheer curiosity, and I quickly realized that this is my true calling. The process of learning new technologies has not only equipped me with technical skills but also fostered a <span className="highlight">growth mindset</span> that I cherish.
        </p>

        <div className="section">
          <h3>
            <FaCode className="inline-block mr-2 text-blue-500" /> Key Skills
          </h3>
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
          <h3>
            <FaGraduationCap className="inline-block mr-2 text-green-500" /> Education
          </h3>
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
          <h3>
            <FaBriefcase className="inline-block mr-2 text-yellow-500" /> Experience
          </h3>
          <ul>
            <li>
              <div className="education-item">
                <div className="school">Eduwork</div>
                <div className="program">Programmer (Intern)</div>
                <div className="date">July 2024 – Present</div>
                <div className="description">
                  Currently working as a Frontend Developer, specializing in React and TypeScript. 
                  Developing responsive and interactive web applications while also gaining exposure to PHP. 
                  Collaborating with cross-functional teams to deliver high-quality software solutions.
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="section">
          <h3>
            <FaHeart className="inline-block mr-2 text-red-500" /> Interests
          </h3>
          <p>
            When not coding, I enjoy exploring new technologies and blending my background in education with innovative tech solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;