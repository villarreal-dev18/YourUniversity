import React, { useState, useEffect } from 'react';

const LoginModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect (() => {
        const handleOpenModal = () => setIsOpen(true);
        window.addEventListener('opne-login-modal', handleOpenModal);
        return () => {
            window.removeEventListener('open-login-modal', handleOpenModal);
        };
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Login attempt with:',{ email, password});
    };
    if (!isOpen) return null;
    return (
       <div className=" fixed inset-0 z-50 bg-black opacity-50">
       </div> 
    )
};
export default LoginModal;