import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';

const Input = ({
  id,
  type = 'text',
  placeholder = '',
  label = '',
  required = false,
  value = '',
  onChange,
  className = ''
}) => {
  // Manejo seguro del contexto, con fallback a false si no está disponible
  let isDarkMode = false;
  try {
    const context = useContext(ThemeContext);
    isDarkMode = context?.isDarkMode || false;
  } catch (error) {
    console.log('ThemeContext no disponible, usando modo claro por defecto');
  }
  
  return (
    <div className="relative">
      <input 
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`peer rounded-2xl outline-none border-none
          ${isDarkMode ? '' : 'bg-hover-light dark:bg-secondary-dark text-text-primary-light dark:text-text-primary-dark'} 
          px-6 py-4 w-full focus:ring-0 
          ${isDarkMode ? '' : 'focus:bg-hover-light dark:focus:bg-text-accent-light '}
          placeholder:text-sm 
          ${isDarkMode ? '' : 'hover:bg-secondary-light'} 
          transition-colors duration-150 ${className}`}
      />
      {label && (
        <label 
          htmlFor={id}
          className={`absolute left-4 text-xs 
            ${isDarkMode ? 'text-text-accent-dark' : 'text-text-accent-light dark:text-text-accent-dark'}
            px-2 transition-all duration-200 ease-out
            peer-placeholder-shown:text-base 
            ${isDarkMode ? 'peer-placeholder-shown:text-text-muted-dark' : 'peer-placeholder-shown:text-text-muted-light'} 
            peer-placeholder-shown:top-4 peer-focus:top-2 
            peer-focus:text-xs 
            ${isDarkMode ? 'peer-focus:text-text-primary-dark' : 'peer-focus:text-text-primary-light dark:peer-focus:text-text-primary-dark'}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

Input.defaultProps = {
  onChange: () => {}
};

export default Input;