import React, { useState, useEffect } from 'react';
import CloseButton from '../../ui/CloseButton.jsx';
import Button from '../../ui/Button.jsx';
import RegisterModal from './RegisterModal.jsx';
import LoginModal from './LoginModal.jsx';
const StartModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [login, setLogin] = useState('');
    const [register, setRegister] = useState('');
    useEffect(() => {
        const handleOpenModal = () => setIsOpen(true);
            window.addEventListener('start-now-modal', handleOpenModal);
            return () => {
                window.removeEventListener('start-now-modal', handleOpenModal);
            };
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Login attempt with:',{ login, register});
        setIsOpen(false);
    };

    if (!isOpen) return null;
    return (
        <div className=" fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-md min-h-[90px] h-auto w-full p-20 relative"> 
                <CloseButton onClick={() => setIsOpen(false)} />
                <h1 
                    className="text-black text-2xl font-bold mb-2 text-center"
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
    )
}
export default StartModal;