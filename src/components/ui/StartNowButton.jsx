import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';

const StartNowButton = ({ className = '' }) => { 
  const { isDarkMode } = useContext(ThemeContext);
  
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('open-login-modal')); 
  };
  
  return (
    <button 
      onClick={handleClick}
      className={`px-6 py-3 rounded-full font-medium transition-all duration-200 
        ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-950 text-white hover:bg-gray-800'} 
        ${className}`}
    >
      Comenzar Ahora
    </button>
  );
};

export default StartNowButton;