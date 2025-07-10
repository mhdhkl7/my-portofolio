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

        {/* BAGIAN TENTANG SAYA DITAMBAHKAN DI SINI */}
        <div className="about-me-section">
          <h2>Tentang Saya</h2>
          <p>
            Sebagai seorang mahasiswa Informatika yang antusias, saya memiliki hasrat mendalam untuk memecahkan masalah melalui kode. Saya menikmati proses belajar teknologi baru dan menerapkannya untuk membangun aplikasi yang tidak hanya terlihat bagus, tetapi juga berjalan dengan efisien dan memberikan pengalaman pengguna yang intuitif.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;