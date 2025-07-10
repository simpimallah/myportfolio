import React from 'react';
import { motion } from 'framer-motion';


const projects = [
  {
    title: "Todo App",
    tech_used:"Vue.js,Node.js, Express.js, Mongoose, JWT, bcryptjs,MongoDB",
    description: "A task manager using React",
    github: "https://github.com/simpimallah/todoAppWeb",
    demo: "https://todoappweb.onrender.com/"
  },
  {
    title: "Weather App",
    tech_used:"Vue.js,Node.js, Express.js, TypeScript, TypeORM,PostgreSQL",
    description: "Shows weather using API",
    github: "https://github.com/simpimallah/weatherAppWeb",
    demo: "https://weatherappweb-h1ya.onrender.com/"
  },
  {
    title: "Quiz App",
    tech_used:"React.js, Node.js, Express.js, Mongoose, JWT ,bcrypt,MongoDB",
    description: "Interactive quiz with score tracking",
    github: "https://github.com/simpimallah/QuizAppWeb",
    demo: "https://quizappweb-ffnj.onrender.com/"
  },
  {
    title: "Voting App",
    tech_used:"React.js,MongoDB,Mongoose, JWT ,bcrypt, Node.js,Express.js",
    description: "Real-time voting app with results display",
    github: "https://github.com/simpimallah/votingAppWeb",
    demo: "https://votingappweb.onrender.com/"
  },
  {
    title: "E-Commerce App",
    tech_used:"Angular Node.js, Express.js, TypeScript, TypeORM, PostgreSQL",
    description: "Full-featured shopping cart and checkout system",
    github: "https://github.com/simpimallah/ecommerce-admin-frontend",
    demo: "https://ecommerce-admin-frontend.onrender.com/"
  }
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="projects-heading">My Projects</h2>
    <div className="project-grid">
      {projects.map((p, index) => (
        <motion.div
          className="project-card"
          key={index}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <h3 className="project-title">{p.title}</h3>
          <span className="project-tech">{p.tech_used}</span>
          <p className="project-desc">{p.description}</p>
          <div className="project-links">
            <a href={p.demo} target="_blank" rel="noopener noreferrer" className="link-btn">Live Demo</a>
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="link-btn outline">GitHub</a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
