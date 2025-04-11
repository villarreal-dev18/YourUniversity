import React, { useState, useEffect, useContext } from 'react';
import CloseButton from '../../ui/CloseButton.jsx';
import Button from '../../ui/Button.jsx';
import { ThemeContext } from '../../../context/ThemeContext.jsx';

const StartModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode } = useContext(ThemeContext);
    
    useEffect(() => {
        const handleOpenModal = () => setIsOpen(true);
        window.addEventListener('start-now-modal', handleOpenModal);
        return () => {
            window.removeEventListener('start-now-modal', handleOpenModal);
        };
    }, []);

    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-2xl shadow-xl max-w-md min-h-[90px] h-auto w-full p-20 relative transition-colors duration-300`}> 
                <CloseButton onClick={() => setIsOpen(false)} />
                <h1 
                    className={`${isDarkMode ? 'text-white' : 'text-black'} text-2xl font-bold mb-2 text-center transition-colors duration-300`}
                    style={{fontFamily: "'Inter', sans-serif"}}>
                    Para empezar inicia sesion o crea una cuenta
                </h1>
                <div className="flex flex-col space-y-4 mt-10 mx-0">
                    <Button 
                        onClick={(e)=> {
                            e.preventDefault();
                            setIsOpen(false);
                            window.dispatchEvent(new CustomEvent('open-login-modal'));
                        }}
                        size="lg" 
                        fullWidth={true}>
                        Iniciar Sesión
                    </Button>
                    
                    <Button 
                        onClick={(e)=> {
                            e.preventDefault();
                            setIsOpen(false);
                            window.dispatchEvent(new CustomEvent('open-register-modal'));
                        }}  
                        size="lg" 
                        fullWidth={true}
                    >
                        Crear Cuenta
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default StartModal;