// src/components/Projects.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

// Buat komponen terpisah untuk kartu proyek agar lebih rapi
const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasikan hanya sekali
    threshold: 0.1,    // Picu saat 10% kartu terlihat
  });

  return (
    <div ref={ref} className={`project-card fade-in ${inView ? 'visible' : ''}`}>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Lihat di GitHub
      </a>
    </div>
  );
};

function Projects() {
  const projectData = [
    {
      image: '/images/project1.png',
      title: 'Katalog Perpustakaan (React)',
      description: 'Aplikasi web katalog perpustakaan yang dibangun dengan React, memiliki fitur pencarian, filter, dan interaksi user seperti like dan bookmark.',
      link: 'https://github.com/mhdhkl7/Perancangan-Web/tree/main/Pertemuan%2012'
    },
    {
      image: '/images/project2.png',
      title: 'Movie Landing Page (DOM)',
      description: 'Halaman landing interaktif untuk layanan streaming film \'Hoopla\'. Mengimplementasikan addEventListener dan setInterval untuk interaktivitas dinamis.',
      link: 'https://github.com/mhdhkl7/Perancangan-Web/tree/main/Pertemuan%2010'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Proyek Saya</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;