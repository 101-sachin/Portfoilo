import React, { useState, useEffect } from "react";
import "./Project.css";
import { usePortfolio } from "../../context/PortfolioContext";

const Project = () => {
  const {projects} = usePortfolio()

  return (
    <section className="project-section" id="projects">
      <h2 className="project-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img 
              src="edu_minds.jpeg"
              alt={project.name} 
              className="project-image"
              draggable="false"
            />
            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.github_links && (
                  <a href={project.github_links} className="project-link" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {project.website_url && (
                  <a href={project.website_url} className="project-link" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
