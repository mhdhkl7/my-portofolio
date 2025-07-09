// src/App.jsx

import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react'; // <-- 1. Impor Analytics (gunakan '/react')
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import reactLogo from './assets/react.svg';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <img src={reactLogo} className="background-logo" alt="React Logo" />

      <div className={`app ${theme}`}>
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <main>
          <Home />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      
      <Analytics /> {/* <-- 2. Tambahkan komponen ini di akhir */}
    </>
  );
}

export default App;