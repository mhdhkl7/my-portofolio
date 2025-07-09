// src/components/Home.jsx
import React from 'react';

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Web Development Portfolio</h1>
        <p>
          Sebuah portfolio web yang dibuat untuk mendokumentasikan perjalanan belajar saya dalam mata kuliah Perancangan Web di Universitas Satya Terra Bhinneka. Dibangun dengan React dan Vite.
        </p>
        <a href="#projects" className="cta-button">
          Lihat Proyek Saya
        </a>
      </div>
      <div className="hero-image">
        <img src="/images/profile.jpg" alt="Foto Profil Haikal Siregar" />
      </div>
    </section>
  );
}

export default Home;