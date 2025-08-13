import React from "react";
import "./Skills.css";
import { usePortfolio } from "../../context/PortfolioContext";

const Skills = () => {
  const { skills, LoaderComponent } = usePortfolio();

  if (!skills || skills.length === 0) {
    return <LoaderComponent />;
  }


  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
