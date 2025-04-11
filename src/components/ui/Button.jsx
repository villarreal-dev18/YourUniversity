import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  rounded = 'full',
  fullWidth = false,
  disabled = false,
  className = '',
  style = {}
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const variants = {
    primary: isDarkMode 
      ? 'bg-blue-600 text-white hover:bg-blue-700' 
      : 'bg-gray-950 text-white hover:scale-105',
    secondary: isDarkMode
      ? 'bg-transparent text-gray-300 hover:text-white'
      : 'bg-transparent text-neutral-400 hover:text-black',
    outline: isDarkMode
      ? 'bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800'
      : 'bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100'
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'md:py-3 md:px-6 px-2 py-2 text-lg'
  };

  const roundedOptions = {
    none: '',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex justify-center items-center
        font-medium transition-all duration-200 ease-in-out
        ${variants[variant]}
        ${sizes[size]}
        ${roundedOptions[rounded]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      style={{
        fontFamily: "'Inter', sans-serif",
        ...style
      }}
    >
      {children}
    </button>
  );
};

export default Button;