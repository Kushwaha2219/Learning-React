import React from 'react';

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex items-center gap-4">
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
