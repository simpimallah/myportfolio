


import React from 'react';


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
        <div className="about-image">
          <img src="/img/simpi.jpg" alt="Profile" />
        </div>
        <div className="about-content">
          <h2 className="about-heading">About Me</h2>
          <p>
            Hello! I’m <span className="highlight">Simpi Mallah</span>, a passionate frontend developer with a Master’s degree in Information Technology.
            I specialize in creating clean, responsive, and user-focused web applications using HTML, CSS, JavaScript, and React.
          </p>
          <p>
            As a fresher, I’ve already built projects like a Todo App, Weather App, and Portfolio Website using modern tools such as React Hooks, Router, Git, and Framer Motion.
          </p>
          <p>
            I’m continuously learning advanced technologies like TypeScript, Tailwind CSS, and animation libraries to build better and scalable UI systems.
            My goal is to join a company that values innovation, mentorship, and continuous growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
