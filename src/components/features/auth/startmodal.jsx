import React, { useState, useEffect } from 'react';
const StartModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [login, setLogin] = useState('');
    const [register, setRegister] = useState('');
    useEffect(() => {
        const handleOpenModal = () => {
            setIsOpen(true);
            window.addEventListener('open-login-modal', handleOpenModal);
        }; 
    })

}