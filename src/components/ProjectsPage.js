import React from "react";
import "./ProjectsPage.css";
import "aos/dist/aos.css";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Weather Dashboard",
      description: "A simple Weather Dashboard app that shows real-time weather updates using API. Built with HTML, CSS, and JavaScript.",
      link: "https://weather-dashboard-nine-liard.vercel.app/",
    },
    {
      id: 2,
      title: "Festive-web-site",
      description: "A responsible web application Built with react.js And tailwind CSS To celebrate Lord Krishna Birthday.(Janmastami)",
      link: "https://festive-web-project.vercel.app/",
    },
    {
      id: 3,
      title: "Currency converter",
      description: "JavaScript currency converter web app with live exchange rates, offline support, and zero dependencies.",
      link: "https://currency-converter-gamma-swart.vercel.app/",
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-title"  data-aos="fade-up">My  <span className='skill'>Projects</span> </h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2 className="project-title1">{project.title}</h2>
            <p className="project-desc">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
