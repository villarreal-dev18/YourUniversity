import React from 'react';

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
  return (
    <div className="relative">
      <input 
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`peer text-black rounded-2xl outline-none border-none
          bg-gray-100 px-6 py-4 w-full focus:border-black focus:ring-0 focus:bg-gray-200
          placeholder:text-sm hover:bg-gray-200 transition-colors duration-150 ${className}`}
      />
      {label && (
        <label 
          htmlFor={id}
          className="absolute left-4  text-xs text-black
            px-2 transition-all duration-200 ease-out
            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
            peer-placeholder-shown:top-4 peer-focus:top-2 
            peer-focus:text-xs peer-focus:text-black"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;