import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const project = [
    {
        title: "MediChat Rx",
        description:
            "This is a chat-based AI mobile app where users can share health issues and receive real-time advice. It offers information on medications, including nearby pharmacies, hospital, etc",
        url: "https://github.com/Medichat-Rx/frontend",
        date: "April 2024",
        image: ["./public/MediChat.png"],
    },
    {
        title: "My eCommerce App",
        description: "A web-based e-commerce app made with NextJS",
        url: "https://mf-ecommerce.vercel.app/",
        date: "March 2024",
        image: ["./public/e-commerce 1.png", "./public/e-commerce 2.png"],
    },
    {
        title: "Tic Tac Toe Multiplayer",
        description:
            "A web-based mini game Tic Tac Toe using Firebase Realtime Database",
        url: "https://github.com/H8-RMT46-GroupProject/tictactoe-multiplayer",
        date: "March 2024",
        image: ["./public/Tic Tac Toe 1.png", "./public/Tic Tac Toe 2.png"],
    },
    {
        title: "My Social Media App",
        description: "A mobile social app similar to YouTube using Expo",
        url: "https://expo.dev/preview/update?message=fixed&updateRuntimeVersion=1.0.0&createdAt=2024-03-31T22%3A21%3A06.794Z&slug=exp&projectId=2b93fbfb-fd6c-49e4-86cc-378364242f65&group=347e911f-696d-4cfd-8eb5-fe6b117ff53b",
        date: "March 2024",
        image: ["./public/MySocMed.png"],
    },
    {
        title: "EduTech",
        description: "A web based educational course platform",
        url: "https://github.com/mfaishal82/Pro-EduTech",
        date: "February 2024",
        image: ["./public/EduTech 1.png", "./public/EduTech 2.png"],
    },
    {
        title: "Fact Guard",
        description: "A web based social media app",
        url: "https://github.com/mfaishal82/PairPro-SocMed",
        date: "January 2024",
        image: ["./public/FG 1.png", "./public/FG 2.png"],
    },
];

const ProjectCard: React.FC<{ project: any }> = ({ project }) => (
    <div className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
            {project.image && project.image.length > 0 && (
                <Carousel showThumbs={false} infiniteLoop={true} showStatus={true} showIndicators={false} interval={1000}>
                    {project.image.map((img: string, index: number) => (
                        <div key={index}>
                            <img src={img} alt={`${project.title} - ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
            )}
        </figure>
        <div className="card-body flex flex-col justify-between bg-white dark:bg-gray-800 p-6 rounded-b-lg shadow-md">
            <h2 className="card-title text-2xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">({project.date})</p>
            <div className="card-actions justify-end">
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                >
                    View Project
                </a>
            </div>
        </div>
    </div>
);

const GalleryPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <>
      <div
        className="flex flex-wrap justify-center"
        style={{ width: "50%", margin: "0 auto" }}
      >
        {selectedProject !== null ? (
          <ProjectCard project={project[selectedProject]} />
        ) : (
          <center> Click on a project link below to view details </center>
        )}
      </div>

      <nav
        className="nav-bottom"
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          border: "1px solid #ccc",
          borderRadius: "10px 0 0 0",
          margin: "2%",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
          maxHeight: "200px",
          overflowY: "auto",
        }}
      >
        {project.map((proj, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(index)}
            style={{
              cursor: "pointer",
              color: "#3498db",
              textDecoration: "none",
              padding: "8px 0",
              borderBottom: "1px solid #eee",
              transition: "background-color 0.3s ease",
            }}
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