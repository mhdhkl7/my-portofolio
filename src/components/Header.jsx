import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ currentTheme, toggleTheme }) => {
  return (
    <header className="header container">
      <div className="header-logo">Muhammad Haikal Siregar</div>
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <button onClick={toggleTheme} className="theme-toggle">
          {currentTheme === 'dark-mode' ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
};

export default Header;