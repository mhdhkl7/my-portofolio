import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Hubungi Saya</h2>
      <p className="contact-intro">
        Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk mengirim pesan.
      </p>

      <p>Email: <a href="mailto:haikalsiregar427@gmail.com">haikalsiregar427@gmail.com</a></p>
      <p>Telepon: +62 851-5760-0402</p>
      <p>Lokasi: Medan, Sumatera Utara, Indonesia</p>

      <form
        className="contact-form"
        action="https://formspree.io/f/xldnyyzg" // ID Formspree Anda sudah benar
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">Nama</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Pesan</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn-submit">Kirim</button>
      </form>

      <div className="social-links">
        <a href="https://github.com/mhdhkl7" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/mhdhkl07" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/haikal-siregar-aab406326/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </section>
  );
};

export default Contact;