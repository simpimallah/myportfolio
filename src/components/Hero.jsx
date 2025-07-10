import React from 'react';
// import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';
const Hero = () => {
  return (
    <section className="hero-section">
       <div className="hero-content">
        <p className="hero-subtitle">HEY! I AM</p>
        <h1 className="hero-name">Simpi <span className="highlight">Mallah</span></h1>
        <h2 className="hero-role">
          I'm a{' '}
          <span className="typewriter">
            <Typewriter
              words={['Full Stack Developer.', 'Freelancer.', 'Web Developer.']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
      </div>

       
      {/* Right Section */}
      {/* <div className="hero-right">
        <img src="/img/simpi.jpg" alt="Hero" className="hero-image" />
      </div> */}
    </section>
  );
};

export default Hero;
