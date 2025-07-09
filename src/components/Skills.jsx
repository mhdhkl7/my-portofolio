import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Tools & Teknologi</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js & Vite</li>
            <li>Responsive Design & UI/UX Principles</li>
            <li>Manajemen State (useState, useEffect)</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Backend Development</h3>
          <ul>
            <li>Node.js (Basic)</li>
            <li>Python (Basic)</li>
            <li>REST API Concepts</li>
            <li>MongoDB / NoSQL (Basic)</li>
            <li>MySQL / SQL (Basic)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;