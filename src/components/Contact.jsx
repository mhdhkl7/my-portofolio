// src/components/Contact.jsx
import React from 'react';
// Impor ikon dari Font Awesome
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Hubungi Saya</h2>
      <p>
        Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar menyapa.
        Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
      </p>
      <div className="contact-links">
        {/* Link GitHub dengan Ikon */}
        <a
          href="https://github.com/mhdhkl7"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon" // Kita gunakan class baru untuk styling
        >
          <FaGithub size={40} />
        </a>
        
        {/* Link LinkedIn dengan Ikon */}
        <a
          href="https://linkedin.com/in/usernameanda" // <-- Ganti dengan username LinkedIn Anda
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaLinkedin size={40} />
        </a>

        {/* Link Email dengan Ikon */}
        <a 
          href="mailto:emailanda@example.com" // <-- Ganti dengan email Anda
          className="contact-icon"
        >
          <FaEnvelope size={40} />
        </a>
      </div>
    </section>
  );
}

export default Contact;