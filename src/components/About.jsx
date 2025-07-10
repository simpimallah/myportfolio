// import React from 'react';


// const About = () => {
//   return (
//     <section id="about" className="about-section">
//       <div className="about-container">
//         <h2 className="about-heading">About Me</h2>
//         {/* <p className="about-text">
//           I’m a passionate <strong>React developer</strong> focused on building beautiful user experiences. I have experience with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and modern React tooling like <strong>Hooks</strong>, <strong>Router</strong>, and <strong>Framer Motion</strong>.
//         </p> */}
//          <p className="about-text">
//           Hello! I'm <span className="highlight">Simpi Mallah</span>, a dedicated and detail-oriented frontend developer
//           with a strong foundation in web technologies and a passion for building intuitive, accessible, and engaging user experiences.
//         </p>
//         <p className="about-text">
//           I recently completed my <strong>Master’s in Information Technology</strong>, where I built hands-on projects
//           using <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, and modern frameworks like <strong>React.js</strong>. I have also worked with <strong>Git</strong>, <strong>Bootstrap</strong>,
//           and <strong>responsive design principles</strong> to create mobile-friendly web applications.
//         </p>
//         <p className="about-text">
//           Although I’m a fresher in the industry, I have worked on personal and academic projects such as a <em>Todo App</em>, 
//           <em> Weather App</em>, and <em>Portfolio Website</em>, all built with <strong>React</strong> and deployed using Netlify and GitHub.
//         </p>
//         <p className="about-text">
//           I’m continuously learning advanced tools like <strong>Framer Motion</strong> for animations, <strong>React Router</strong> for routing, 
//           and experimenting with <strong>TypeScript</strong> and <strong>Tailwind CSS</strong> for scalable UI development.
//         </p>
//         <p className="about-text">
//           My goal is to join a company where I can grow as a frontend engineer, contribute to real-world applications, and stay updated with
//           the latest technologies in the JavaScript ecosystem.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from 'react';
// import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
        {/* Left Side – Image */}
        <div className="about-image">
          <img src="/img/simpi.jpg" alt="Profile" />
        </div>

        {/* Right Side – Text */}
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
