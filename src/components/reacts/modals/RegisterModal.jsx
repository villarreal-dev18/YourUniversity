import React, { useState, useEffect } from 'react';

const RegisterModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        const handleOpenModal = () => setIsOpen(true);
        window.addEventListener('open-register-modal', handleOpenModal);
        
        return () => {
          window.removeEventListener('open-register-modal', handleOpenModal);
        };
      }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Register attempt with:',{ name, lastname, email});
    };
    if (!isOpen) return null;
    return (
       <div className=" fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center  justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-4xl min-h-[600px] h-auto w-full p-32 relative">
            <button onClick={() =>setIsOpen(false)} className=" absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
       </div> 
    )
};

export default RegisterModal;