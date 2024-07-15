import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  return (
    <section className="about-container">
      <div className="about-card">
        <h1 className="about-heading">CONTACT ME</h1>
        <p className="about-intro">
          If you have any questions or would like to get in touch, feel free to reach out through the following channels:
        </p>
        <ul className="space-y-6">
          <li className="flex items-center hover:bg-gray-100 p-3 rounded-lg transition-colors duration-300">
            <FaEnvelope className="text-blue-500 mr-4 text-2xl" />
            <a href="mailto:mf.ihbs@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-lg"> mf.ihbs@gmail.com</a>
          </li>
          <li className="flex items-center hover:bg-gray-100 p-3 rounded-lg transition-colors duration-300">
            <FaLinkedin className="text-blue-700 mr-4 text-2xl" />
            <a href="https://www.linkedin.com/in/mfaishal82/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-lg"> Muhammad Faisal </a>
          </li>
          <li className="flex items-center hover:bg-gray-100 p-3 rounded-lg transition-colors duration-300">
            <FaGithub className="text-gray-800 mr-4 text-2xl" />
            <a href="https://github.com/mfaishal82" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-lg"> @mfaishal82</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ContactPage;