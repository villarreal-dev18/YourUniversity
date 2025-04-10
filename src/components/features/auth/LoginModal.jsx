import React, { useState, useEffect } from 'react';
import Input from '../../ui/Input.jsx';
import Button from '../../ui/Button.jsx';
import CloseButton from '../../ui/CloseButton.jsx';

const LoginModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect (() => {
        const handleOpenModal = () => setIsOpen(true);
        window.addEventListener('open-login-modal', handleOpenModal);
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
       <div className=" fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-4xl min-h-[600px] h-auto w-full p-32 relative">
            <CloseButton onClick={() => setIsOpen(false)} />
                <h1 
                    className="text-black text-2xl font-bold mb-2 text-center"
                    style={{fontFamily: "'Inter', sans-serif"}}>
                    Inicio de Sesión
                </h1>
                <div className="flex items-center justify-center mb-10 ">
                    <p className=" max-w-md text-center  font-medium " style={{fontFamily: "'Inter', sans-serif"}}>
                        Bienvenido a YourUniversity, ¿Qué hay de nuevo?.
                        Inicia Sesión para continuar.
                    </p>
                </div>
                <div className="grid py-2 px-10">
                    <Input 
                        id="email"
                        type="email"
                        label="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                    /> 
                </div>
                <div className="grid py-2 px-10">
                            <Input 
                                id="password"
                                type="password"
                                label="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required={true}
                            />
                        </div>
                <div className="grid grid-cols-1 items-center mt-14 mx-12 justify-center md:grid-cols-2">
                
                    <div className="inline-blockq text-sm">
                        <input
                        type="checkbox"
                        className="ml-2 w-4 h-4 bg-gray-300 border border-gray-300 
                        focus:ring-0 focus:ring-offset-0 focus:outline-none text-gray-950
                        focus:ring-transparent rounded-md checked:bg-gray-950 checked:border-transparent"
                        id="remember-me"/>
                        <label className="text-gray-600 ml-1" htmlFor="check">Recordarme.
                        </label>
                        <div className="text-sm items-center mt-2">
                            <a href="#" className="font-medium text-neutral-500 hover:text-neutral-900">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-end">
                            <Button onClick={handleSubmit} size="lg">
                                    Iniciar Sesión
                            </Button>
                    </div>
                    
                </div>
            </div>
       </div> 
    )
};
export default LoginModal;