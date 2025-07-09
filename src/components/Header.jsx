// src/components/Header.jsx
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Impor ikon bulan dan matahari

// Terima props toggleTheme dan currentTheme
function Header({ toggleTheme, currentTheme }) { 
  return (
    <header className="header">
      <div className="logo">Muhammad Haikal Siregar</div>
      <nav className="navigation">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        {/* Tombol untuk mengganti tema */}
        <button onClick={toggleTheme} className="theme-toggle-button">
          {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
}

export default Header;