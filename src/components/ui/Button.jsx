import React from 'react';
const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  rounded = 'full',
  disabled = false,
  className = '',
  fullWidth = false,
  style = {},

})=>{
  const variants ={
    primary:'bg-gray-950 text-white hover:scale-105 transition-all duration-200 ease-out',
    secondary:'bg-transparent text-neutral-400 hover:text-black',
    outline:'bg-transparent border-gray-300 text-gray-800 hover:bg-gray-100',
  };
  const sizes ={
    sm:'px-3 py-1 text-sm',
    md:'px-4 py-2',
    lg:'md:py-3 md:px-6 px-2 py-2 text-lg',
  };
  const roundedOptions = {
    none: '',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };
  return(
    <button id={type} onClick={onClick} disabled={disabled} 
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
    style={{fontFamily: "'Inter', sans-serif",...style}}
    >
      {children}
    </button>
  )
}

export default Button;