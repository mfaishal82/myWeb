import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import "../src/App.css";
import projects from "../projects";

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

  return (
    <>
      <div
        className="flex flex-wrap justify-center"
        style={{ width: "60%", margin: "0 auto" }}
      >
        {selectedProject !== null ? (
          <ProjectCard project={projects[selectedProject]} />
        ) : (
          <center className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">Click on a project link below to view details</center>
        )}
      </div>

      <nav className="nav-bottom">
        {projects.map((proj, index) => (
          <div className="nav-bottom-link"
            key={index}
            onClick={() => setSelectedProject(index)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f0f0f0")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            {proj.title}
          </div>
        ))}
      </nav>
    </>
  );
};

export default GalleryPage;