import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
      if (!isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
  };
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full transition-colors duration-200 hover:bg-neutral-200 dark:hover:bg-neutral-700"
      aria-label="Cambiar tema"
    >
      {isDarkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="20px"
          height="20px"
          fill="#ffffff"
          className="theme-toggle__expand transition-colors duration-300"
          viewBox="0 0 32 32"
        >
          <clipPath id="theme-toggle__expand__cutout">
            <path d="M0-11h25a1 1 0 0017 13v30H0Z" />
          </clipPath>
          <g clipPath="url(#theme-toggle__expand__cutout)">
            <circle cx="16" cy="16" r="8.4" />
            <path d="M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z" />
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="20px"
          height="20px"
          fill="#737373"
          className="theme-toggle__collapse transition-colors duration-300"
          viewBox="0 0 32 32"
        >
          <path d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1c-7 0-12.6-5.7-12.6-12.6 0-5.1 3-9.4 7.3-11.4.7-.3 1.5.2 1.5 1 0 .2 0 .4-.1.6-.3.6-.4 1.2-.4 1.8 0 2.8 2.3 5.1 5.1 5.1.6 0 1.2-.1 1.8-.4.2-.1.4-.1.6-.1.8 0 1.3.8 1 1.5-2 4.3-6.4 7.3-11.4 7.3-.8 0-1.5-.1-2.2-.2-.7-.1-1.2-.8-1-1.5.1-.5.5-.8 1-.9.4-.1.7-.1 1.1-.1 3.9 0 7-3.1 7-7 0-.4 0-.7-.1-1.1-.1-.5.1-.9.4-1.2.4-.4 1-.5 1.5-.2 4.3 2 7.3 6.4 7.3 11.4 0 7-5.7 12.6-12.6 12.6z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;