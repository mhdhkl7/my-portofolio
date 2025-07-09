import React, { useState, useEffect } from 'react';

const Home = () => {
  const titles = [
    "Seorang Web Developer",
    "Mahasiswa Informatika",
    "Problem Solver",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Ganti setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home-section">
      <div>
        <img src="/images/profile.jpg" alt="Foto Profil Muhammad Haikal Siregar" className="home-profile-pic" />
        
        <h1 className="home-title">
          Halo, Saya Muhammad Haikal Siregar
          <br />
          <span className="highlight dynamic-text">{titles[currentTitleIndex]}</span>
        </h1>
        <p className="home-subtitle">
          Selamat datang di portofolio digital saya. Saya bersemangat dalam menciptakan aplikasi web yang fungsional, modern, dan bermanfaat.
        </p>
      </div>
    </section>
  );
};

export default Home;