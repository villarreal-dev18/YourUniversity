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
  const { isDarkMode } = useContext(ThemeContext);
  
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
          ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} 
          px-6 py-4 w-full focus:border-black focus:ring-0 
          ${isDarkMode ? 'focus:bg-gray-700' : 'focus:bg-gray-200'}
          placeholder:text-sm 
          ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} 
          transition-colors duration-150 ${className}`}
      />
      {label && (
        <label 
          htmlFor={id}
          className={`absolute left-4 text-xs 
            ${isDarkMode ? 'text-gray-300' : 'text-black'}
            px-2 transition-all duration-200 ease-out
            peer-placeholder-shown:text-base 
            ${isDarkMode ? 'peer-placeholder-shown:text-gray-400' : 'peer-placeholder-shown:text-gray-500'} 
            peer-placeholder-shown:top-4 peer-focus:top-2 
            peer-focus:text-xs 
            ${isDarkMode ? 'peer-focus:text-white' : 'peer-focus:text-black'}`}
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