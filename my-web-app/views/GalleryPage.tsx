import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import "../src/App.css";
import projects from "../projects";
import { FaChevronUp } from 'react-icons/fa';
import '../src/index.css'

const preloadImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      resolve(img);
    }
    img.onerror = img.onabort = function() {
      reject(src);
    }
    img.src = src;
  });
}

const GalleryPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagePromises = projects.flatMap(project => 
          project.image.map(img => preloadImage(img))
        );
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };

    loadImages();
  }, []);

  if (!imagesLoaded) {
    return <div>Loading images...</div>;
  }

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className="gallery-container flex flex-wrap justify-center">
        {selectedProject !== null ? (
          <ProjectCard project={projects[selectedProject]} />
        ) : (
          <center className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">Click on a project link below to view details</center>
        )}
      </div>

      <nav className={`nav-bottom ${showNav ? 'show' : ''}`}>
        {projects.map((proj, index) => (
          <div className="nav-bottom-link"
            key={index}
            onClick={() => {
              setSelectedProject(index);
              setShowNav(false);
            }}
          >
            {proj.title}
          </div>
        ))}
      </nav>

      {!showNav && (
        <div className="nav-toggle-container">
          <span className="nav-toggle-text">Click to see list Project</span>
          <button className="nav-toggle" onClick={toggleNav}>
            <FaChevronUp />
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryPage;