import React from 'react';


const educationData = [
  {
    icon: '/img/icons8-graduate-48.png', // Use your graduation hat icon
    year: '2023–2025',
    degree: 'Master of Science in Information Technology',
    institution: 'G.R Patil Science & Commerce College, Dombivli',
    description: 'Focused on full-stack development, cloud computing, and modern web technologies.',
  },
  {
    icon: '/img/icons8-graduate-48.png',
    year: '2016–2019',
    degree: 'Bachelor of Science in Information Technology',
    institution: ' J. K Tilak Science and Commerce College, Ghansoli, Navi Mumbai',
    description: 'Studied algorithms, software engineering, and front-end technologies.',
  },
   {
    icon: '/img/icons8-graduate-48.png',
    year: '2014–2016',
    degree: 'H.S.C – Mulund Vidya Mandir Science & Commerce Jr. College',
    institution: 'Mumbai University, Mulund, Mumbai',
    description: 'Studied science with an emphasis on computer fundamentals and logic building.',
  },
  {
    icon: '/img/icons8-graduate-48.png',
    year: '2004–2014',
    degree: 'S.S.C – St. Merry Primary & Secondary School',
    institution: 'Mumbai University, Diva, Mumbai',
    description: 'Completed foundational education with strong interest in mathematics and computers.',
  }
 
];

const Education = () => (
  <section id="education" className="edu-section">
    <h2 className="edu-heading">Education</h2>
    <div className="edu-grid">
      {educationData.map((edu, index) => (
        <div key={index} className="edu-card">
          <div className="edu-icon-wrapper">
            <img src={edu.icon} alt="icon" className="edu-icon" />
          </div>
          <div className="edu-content">
            <p className="edu-year">{edu.year}</p>
            <h3 className="edu-degree">{edu.degree}</h3>
            <p className="edu-institution">📍 {edu.institution}</p>
            <p className="edu-desc">{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
