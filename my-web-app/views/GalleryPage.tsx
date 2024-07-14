import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../src/App.css";

const projects = [
    {
        title: "Tasmi' App",
        description: "A simple mobile app for Qur'an recitation",
        url: "https://github.com/mfaishal82/murattal-quran",
        date: "July 2024",
        image: ["./public/Tasmi'.png"],
        techStack: "React-Native, Expo, Axios, NodeJS, ExpressJS"
    },
    {
        title: "Mini Project",
        description: "Mini Coding Live Project Assignment. A simple web-based project with responsive design",
        url: "https://github.com/revou-fundamental-course/27-may-24-mfaishal82",
        date: "June 2024",
        image: ["./public/Mini Project 1.png", "./public/Mini Project 2.png"],
        techStack: "Semantic HTML, CSS, JavaScript"
    },
    {
        title: "MediChat Rx",
        description:
            "This is a chat-based AI mobile app where users can share health issues and receive real-time advice. It offers information on medications, including nearby pharmacies, hospital, etc",
        url: "https://github.com/Medichat-Rx/frontend",
        date: "April 2024",
        image: ["./public/MediChat.png"],
        techStack: "GraphQL, MongoDB, Node.js, React Native, Expo, Expo Location, Expo Map, HercAI API, Google Place API"
    },
    {
        title: "My eCommerce App",
        description: "A web-based e-commerce app made with NextJS",
        url: "https://mf-ecommerce.vercel.app/",
        date: "March 2024",
        image: ["./public/e-commerce 1.png", "./public/e-commerce 2.png"],
        techStack: "Javascript, Tailwind CSS, NextJS, Vercel"
    },
    {
        title: "Tic Tac Toe Multiplayer",
        description:
            "A web-based mini game Tic Tac Toe using Firebase Realtime Database",
        url: "https://github.com/H8-RMT46-GroupProject/tictactoe-multiplayer",
        date: "March 2024",
        image: ["./public/Tic Tac Toe 1.png", "./public/Tic Tac Toe 2.png"],
        techStack: "Javascript, HTML & CSS, React JS, Firebase"
    },
    {
        title: "My Social Media App",
        description: "A mobile social app similar to YouTube using Expo",
        url: "https://expo.dev/preview/update?message=fixed&updateRuntimeVersion=1.0.0&createdAt=2024-03-31T22%3A21%3A06.794Z&slug=exp&projectId=2b93fbfb-fd6c-49e4-86cc-378364242f65&group=347e911f-696d-4cfd-8eb5-fe6b117ff53b",
        date: "March 2024",
        image: ["./public/MySocMed.png"],
        techStack: "Javascript, React Native, MongoDb, Apollo server, Expo, Android Studio"
    },
    {
        title: "EduTech",
        description: "A web based educational course platform",
        url: "https://github.com/mfaishal82/Pro-EduTech",
        date: "February 2024",
        image: ["./public/EduTech 1.png", "./public/EduTech 2.png"],
        techStack: "Javascript, HTML & CSS, Express.js, PostgreSQL"
    },
    {
        title: "Fact Guard",
        description: "A web based social media app",
        url: "https://github.com/mfaishal82/PairPro-SocMed",
        date: "January 2024",
        image: ["./public/FG 1.png", "./public/FG 2.png"],
        techStack: "Javascript, HTML & CSS, Express.js, PostgreSQL"
    },
];

const ProjectCard: React.FC<{ project: any }> = ({ project }) => (
    <div className="card bg-base-100 shadow-xl m-4" style={{maxHeight: "590px", overflowY: "auto"}}>
        <figure>
            {project.image && project.image.length > 0 && (
                <Carousel autoPlay showThumbs={false} infiniteLoop={true} showStatus={true} showIndicators={false} interval={1500} showArrows={true} >
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

const GalleryPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <>
      <div
        className="flex flex-wrap justify-center"
        style={{ width: "60%", margin: "0 auto" }}
      >
        {selectedProject !== null ? (
          <ProjectCard project={projects[selectedProject]} />
        ) : (
          <center> Click on a project link below to view details </center>
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