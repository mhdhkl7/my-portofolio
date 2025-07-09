import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="skills-section">
      <h2 className="skills-title">Proyek Pilihan</h2>
      <div className="skills-grid">
        {/* Proyek 1 - Tugas Pertemuan 10 */}
        <div className="skill-category">
          <img src="/images/project2.png" alt="Proyek Website Cinema" style={{ width: '100%', borderRadius: '8px' }}/>
          <h3>Website Cinema (Tugas Pertemuan 10)</h3>
          <p>
            Sebuah website yang menampilkan daftar film. Dibuat menggunakan React dan menunjukkan pemahaman tentang state management dan API calls.
          </p>
          <a href="https://github.com/mhdhkl7/Perancangan-Web/tree/main/Pertemuan%2010" target="_blank" rel="noopener noreferrer">Lihat di GitHub</a>
        </div>

        {/* Proyek 2 */}
        <div className="skill-category">
          <img src="/images/project1.png" alt="Proyek Perpustakaan" style={{ width: '100%', borderRadius: '8px' }}/>
          <h3>Website Perpustakaan</h3>
          <p>
            Platform untuk manajemen dan peminjaman buku perpustakaan secara digital, dibangun dengan arsitektur komponen yang solid.
          </p>
          <a href="https://github.com/mhdhkl7/Perancangan-Web/tree/main/Pertemuan%2012" target="_blank" rel="noopener noreferrer">Lihat di GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;