import React, { useState, useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const API_URL = "https://portfoilo-be.onrender.com/skills";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data && data.skills) {
          setSkills(data.skills);
        } else {
          setSkills([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
