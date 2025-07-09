import React, { useState, useEffect } from 'react';
import './App.css';

import reactLogo from './assets/react.svg'; 

// Impor semua komponen termasuk Footer
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer'; // <-- Footer sudah diimpor

function App() {
  const [theme, setTheme] = useState('dark-mode');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark-mode' ? 'light-mode' : 'dark-mode'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div 
        className="background-logo"
        style={{ backgroundImage: `url(${reactLogo})` }}
      ></div>

      <Header currentTheme={theme} toggleTheme={toggleTheme} />
      
      <main className="container">
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer /> {/* <-- Footer sudah ditampilkan di sini */}
    </>
  );
}

export default App;