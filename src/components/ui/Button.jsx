import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';

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
  // Manejo seguro del contexto, con fallback a false si no está disponible
  let isDarkMode = false;
  try {
    const context = useContext(ThemeContext);
    isDarkMode = context?.isDarkMode || false;
  } catch (error) {
    console.log('ThemeContext no disponible, usando modo claro por defecto');
  }

  const variants = {
    primary: 'bg-primary-dark dark:bg-primary-light text-primary-light dark:text-primary-dark hover:scale-105',
    secondary: 'bg-secondary-dark dark:bg-secondary-light text-secondary-light dark:text-secondary-dark hover:scale-105',
    outline: 'bg-transparent border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark hover:bg-hover-light dark:hover:bg-hover-dark',
    outlineNo: 'bg-transparent border-none text-text-accent-light dark:text-text-accent-light hover:text-text-primary-light dark:hover:text-text-primary-dark'
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

Button.defaultProps = {
  onClick: () => {}
};

export default Button;