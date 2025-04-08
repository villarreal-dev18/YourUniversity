import React, { useState, useEffect } from 'react';

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
                <button onClick={() =>setIsOpen(false)} className=" absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
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
                <div className="grid py-2 px-10 relative">
                    <input 
                    id="email" 

                    className="peer text-black rounded-2xl outline-none border-none
                    bg-gray-100 px-6 py-4 w-full focus:border-black focus:ring-0
                    focus:bg-gray-200 placeholder-transparent left-4
                    placeholder:text-sm hover:cursor-pointer hover:bg-gray-200"
                    placeholder="Correo"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} required
                    />
                    
                    <label 
                        htmlFor="email" 
                        className="absolute left-4 top- text-sm text-gray-600
                        px-12 transition-all duration-200 ease-out
                        peer-placeholder-shown:text-base 
                         peer-placeholder-shown:text-gray-500 
                        peer-placeholder-shown:top-6 
                        peer-focus:top-2
                        peer-focus:text-xs peer-focus:text-black">
                        Correo
                    </label>
                </div>
                <div class="grid py-2 px-10 relative">
                    <input 
                    id="password" 
                    className="peer text-black rounded-2xl outline-none border-none
                    bg-gray-100 px-6 py-4 w-full focus:border-black focus:ring-0
                    focus:bg-gray-200 placeholder-transparent
                    placeholder:text-sm hover:cursor-pointer hover:bg-gray-200"
                    placeholder="Contraseña"
                    type="password" value={password} required/>
                    <label 
                        htmlFor="password" 
                        className="absolute left-4 top- text-sm text-gray-600
                        px-12 transition-all duration-200 ease-out
                        peer-placeholder-shown:text-base 
                         peer-placeholder-shown:text-gray-500 
                        peer-placeholder-shown:top-6 
                        peer-focus:top-2
                        peer-focus:text-xs peer-focus:text-black">
                        Contraseña
                    </label>
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
                    <div className=" flex justify-end items-center" >
                        <buttom type="submit" 
                        className="flex justify-center 
                        items-center bg-gray-950 rounded-full 
                        md:py-3 md:px-6 px-2 py-2 text-white font-medium  hover:scale-105"
                        style={{fontFamily: "'Inter', sans-serif"}}
                        >
                            Iniciar Sesión
                        </buttom>
                    </div>
                    
                </div>
            </div>
       </div> 
    )
};
export default LoginModal;