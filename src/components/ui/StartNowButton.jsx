import React from 'react';
const StartNowButton = (className='') => { 
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('open-login-modal')); 
  }
};