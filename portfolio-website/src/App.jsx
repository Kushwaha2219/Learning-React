import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
