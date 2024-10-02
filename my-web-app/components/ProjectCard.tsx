import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    url: string;
    date: string;
    image: string[];
    techStack: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="card bg-base-100 shadow-xl m-4" style={{maxHeight: "590px", overflowY: "auto"}}>
    <figure>
      {project.image && project.image.length > 0 && (
        <Carousel autoPlay showThumbs={false} infiniteLoop={true} showStatus={true} showIndicators={false} interval={3000} showArrows={true} >
          {project.image.map((img: string, index: number) => (
            <div key={index}>
              <img style={{ padding: 80 }} src={img} alt={`${project.title} - ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      )}
    </figure>
    <div className="card-body flex flex-col justify-between bg-white dark:bg-gray-800 p-6 rounded-b-lg shadow-md" style={{ maxHeight: "200px" }}>
      <div className="flex justify-between items-center mb-2">
        <h2 className="card-title text-2xl font-bold text-gray-800 dark:text-white" style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.05em' }}>{project.title}</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400" style={{ fontFamily: 'Courier New, monospace' }}>({project.date})</p>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>{project.description}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1" style={{ fontFamily: 'Verdana, sans-serif' }}>
        <span className="font-semibold">Tech Stack:</span> {project.techStack}
      </p>
      <div className="card-actions justify-end mt-auto">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          style={{ fontFamily: 'Tahoma, sans-serif' }}
        >
          View Project
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;