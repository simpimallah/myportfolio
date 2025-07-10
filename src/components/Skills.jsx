import React from 'react';
import { skills } from '../assets/skillsData';


const Skills = () => (
  <section id="skills" className="skills-section">
    <h2 className="skills-heading">Skills</h2>
    <div className="skills-grid">
      {skills.map((skill, i) => (
        <div key={i} className="skill-card">
          <img src={skill.icon} alt={skill.name} className="skill-icon" />
          <div className="skill-name">{skill.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
