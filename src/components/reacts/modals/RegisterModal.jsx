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
                <h1 
                    className="text-black text-2xl font-bold mb-2 text-center"
                    style={{fontFamily: "'Inter', sans-serif"}}>
                    Crear cuenta
                </h1>
                <div className="flex items-center justify-center mb-10 ">
                    <p className=" max-w-md text-center  font-medium " style={{fontFamily: "'Inter', sans-serif"}}>
                     Bienvenido a YourUniversity, tu plataforma educativa en línea.
                      Para empezar, por favor ingresa tus datos personales.
                    </p>
                </div>
                <h2 
                    className="text-black text-xl font-medium mb-4 px-12"
                    style={{fontFamily: "'Inter', sans-serif"}}>
                    Datos personales
                </h2>
                <div className="grid py-2 px-10 relative">
                    <input 
                    id="user_name" 
                    className="peer text-black rounded-2xl outline-none border-none
                     bg-gray-100 px-6 py-4 w-full focus:border-black focus:ring-0 focus:bg-gray-200 placeholder-transparent
                    placeholder:text-sm hover:cursor-pointer hover:bg-gray-200"
                    placeholder="Nombres"
                    type="text"/>
                    <label 
                    htmlFor="user_name" 
                    className="absolute left-4 top-6 text-sm text-gray-600
                    px-12 transition-all 
                     peer-placeholder-shown:text-base 
                    peer-placeholder-shown:text-gray-500 
                      peer-placeholder-shown:top-6 
                     peer-focus:top-2
                     peer-focus:text-xs peer-focus:text-black">
                    Nombres
                    </label>
                </div>
                <div className="grid py-2 px-10 relative">
                    <input 
                    id="last_name" 
                    className="peer text-black rounded-2xl outline-none border-none
                     bg-gray-100 px-6 py-4 w-full focus:border-black focus:ring-0 focus:bg-gray-200 placeholder-transparent
                    placeholder:text-sm hover:cursor-pointer hover:bg-gray-200"
                    placeholder="Apellidos"
                    type="text"/>
                    <label 
                     htmlFor="last_name" 
                     className="absolute left-4 text-sm text-gray-600
                     px-12 transition-all peer-placeholder-shown:text-base 
                     peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-6 
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-black">
                        Apellidos
                    </label>
                </div>
                <div className="grid py-2 px-10 relative">
                        <input 
                        id="email" 
                        className="peer text-black rounded-2xl outline-none border-none
                        bg-gray-100 px-6 py-4 w-full focus:border-black focus:ring-0
                        focus:bg-gray-200 placeholder-transparent
                        placeholder:text-sm hover:cursor-pointer hover:bg-gray-200"
                        placeholder="Correo"
                        type="email"
                        value={email}
                        />
                        
                        <label 
                            htmlFor="email" 
                            className="absolute left-4 top- text-sm text-gray-600
                            px-12 transition-all duration-200 ease-out
                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                            peer-placeholder-shown:top-6 peer-focus:top-2 
                            peer-focus:text-xs peer-focus:text-black">
                            Correo
                        </label>
                </div>
                <div className="grid grid-cols-1 px-10 items-center justify-center md:grid-cols-2">
                
                    <div>
                        <input
                        type="checkbox"
                        className="ml-3  w-4 h-4 bg-gray-300 border border-gray-300 
                        focus:ring-0 focus:ring-offset-0 focus:outline-none text-gray-950
                        focus:ring-transparent
                        rounded-md checked:bg-gray-950 checked:border-transparent"
                        id="check"/>
                        <label className="text-gray-600 pl-2 " htmlFor="check">Acepto  
                            <a className=" underline text-black hover:text-gray-500 px-1">
                                términos</a>
                                y 
                            <a className=" underline text-black hover:text-gray-500 px-1">
                                condiciones</a>.
                        </label>
                    </div>
                    <div className=" flex justify-end" >
                        <input type="submit" 
                        className="flex justify-center 
                        items-center bg-gray-950 rounded-full 
                        md:py-3 md:px-6 px-2 py-2 text-white font-medium "
                        style={{fontFamily: "'Inter', sans-serif"}}
                        value="Siguiente"
                        />
                    </div>
                </div>
            </div>
       </div> 
    )
};

export default RegisterModal;