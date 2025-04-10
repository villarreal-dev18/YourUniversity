import React, { useState, useEffect } from 'react';
import Input from '../../ui/Input.jsx';
import Button from '../../ui/Button.jsx';
import CloseButton from '../../ui/CloseButton.jsx';

const RegisterModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [sex, setSex] = useState('');
    const [dob, setDob] = useState('');
    const [university, setUniversity] = useState('');
    const [career, setCareer] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    useEffect(() => {
        const handleOpenModal = () => setIsOpen(true);
        setStep(1);
        window.addEventListener('open-register-modal', handleOpenModal);
        
        return () => {
          window.removeEventListener('open-register-modal', handleOpenModal);
        };
    }, []);
    const nextStep = () => {
        setStep(step + 1);
    };
    const prevStep = () => {
        setStep(step - 1);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register attempt with:', { 
            name, 
            lastname, 
            email, 
            sex, 
            dob, 
            university, 
            career, 
            password, 
            confirmPassword
        });
        // Enviar datos a la base de datos
        // Si es correcto, cerrar modal
    };

    // Componente para el indicador de pasos
    const StepIndicator = () => (
        <div className="absolute top-8 left-0 right-0 flex justify-center">
            <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-gray-950 text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
                <div className={`w-16 h-1 ${step >= 2 ? 'bg-gray-950' : 'bg-gray-200'}`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-gray-950 text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
                <div className={`w-16 h-1 ${step >= 3 ? 'bg-gray-950' : 'bg-gray-200'}`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-gray-950 text-white' : 'bg-gray-200 text-gray-600'}`}>3</div>
                <div className={`w-16 h-1 ${step >= 4 ? 'bg-gray-950' : 'bg-gray-200'}`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-gray-950 text-white' : 'bg-gray-200 text-gray-600'}`}>4</div>
            </div>
        </div>
    );

    // Componente para los botones de navegación
    const NavigationButtons = ({ showPrev = true }) => (
        <div className="grid grid-cols-2 px-10 gap-4">
            <div className="flex justify-start">
                {showPrev && (
                    <Button onClick={prevStep} variant="secondary">
                        Atrás
                    </Button>
                )}
            </div>
            <div className="flex justify-end">
                <Button onClick={nextStep} size="lg">
                    Siguiente
                </Button>
            </div>
        </div>
    );

    const renderStep = () => {
        switch (step) {
            case 1: // Datos personales
                return (
                    <>
                        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
                            <div className="bg-white rounded-2xl shadow-xl max-w-4xl min-h-[600px] h-auto w-full p-32 relative">
                                <CloseButton onClick={() => setIsOpen(false)} />
                                <StepIndicator />
                                
                                <h1 className="text-black text-2xl font-bold mb-2 text-center"
                                    style={{fontFamily: "'Inter', sans-serif"}}>
                                    Crear cuenta
                                </h1>
                                
                                <div className="flex items-center justify-center mb-10">
                                    <p className="max-w-md text-center font-medium" 
                                       style={{fontFamily: "'Inter', sans-serif"}}>
                                        Bienvenido a YourUniversity, tu plataforma educativa en línea.
                                        Para empezar, por favor ingresa tus datos personales.
                                    </p>
                                </div>
                                
                                <h2 className="text-black text-xl font-medium mb-4 px-12"
                                    style={{fontFamily: "'Inter', sans-serif"}}>
                                    Datos personales
                                </h2>
                                
                                <div className="grid py-2 px-10">
                                    <Input 
                                        id="name"
                                        type="text"
                                        label="Nombres"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required={true}
                                    />
                                </div>
                                
                                <div className="grid py-2 px-10">
                                    <Input 
                                        id="lastname"
                                        type="text"
                                        label="Apellidos"
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                        required={true}
                                    />
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
                                
                                <div className="grid grid-cols-1 px-10 items-center justify-center md:grid-cols-2">
                                    <div>
                                        <input
                                            type="checkbox"
                                            className="ml-3 w-4 h-4 bg-gray-300 border border-gray-300 
                                                focus:ring-0 focus:ring-offset-0 focus:outline-none text-gray-950
                                                focus:ring-transparent transition-colors duration-150
                                                rounded-md checked:bg-gray-950 checked:border-transparent"
                                            id="check"
                                        />
                                        <label className="text-gray-600 pl-2" htmlFor="check">
                                            Acepto  
                                            <a className="underline text-black hover:text-gray-500 px-1">
                                                términos
                                            </a>
                                            y 
                                            <a className="underline text-black hover:text-gray-500 px-1">
                                                condiciones
                                            </a>.
                                        </label>
                                    </div>
                                    <div className="flex justify-end">
                                        <Button onClick={nextStep} size="lg">
                                            Siguiente
                                        </Button>
                                    </div>
                                    <a  className="text-black hover:text-gray-500 px-1 hover:cursor-pointer" 
                                    onClick={(e)=> {
                                        e.preventDefault();
                                        setIsOpen(false);
                                        window.dispatchEvent(new CustomEvent('open-login-modal'));
                                    }}>
                                        ¿Ya tienes una cuenta?
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </>
                );
                
            case 2: // Datos adicionales
                return (  
                    <>
                        <h1 className="text-xl font-medium text-black px-10" 
                            style={{fontFamily:"'Inter', sans-serif"}}>
                            Datos adicionales
                        </h1>
                        
                        <div className="grid py-2 px-10 relative">
                            <select 
                                id="sex" 
                                className="peer text-black rounded-2xl outline-none border-none
                                    bg-gray-100 px-6 py-4 w-full focus:border-black focus:ring-0 focus:bg-gray-200
                                    placeholder:text-sm hover:cursor-pointer hover:bg-gray-200 transition-colors duration-150"
                                value={sex}
                                onChange={(e) => setSex(e.target.value)}
                                required
                            >
                                <option value="" disabled selected>Sexo</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                        
                        <div className="grid py-2 px-10">
                            <Input 
                                id="dob" 
                                type="date" 
                                label="Fecha de nacimiento"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                required={true}
                            />
                        </div>
                        
                        <NavigationButtons />
                    </>
                );
                
            case 3: // Datos académicos
                return (
                    <>
                        <h1 className="text-xl font-medium text-black px-10" 
                            style={{fontFamily:"'Inter', sans-serif"}}>
                            Datos académicos
                        </h1>
                        
                        <div className="grid py-2 px-10 relative">
                            <select 
                                id="university" 
                                className="peer text-black rounded-2xl outline-none border-none
                                    bg-gray-100 px-6 py-4 w-full focus:border-black focus:ring-0 focus:bg-gray-200
                                    placeholder:text-sm hover:cursor-pointer hover:bg-gray-200 transition-colors duration-150"
                                value={university}
                                onChange={(e) => setUniversity(e.target.value)}
                                required
                            >
                                <option value="" disabled selected>Universidad</option>
                                <option value="Universidad_Surcolombiana">Universidad Surcolombiana</option>
                                <option value="Universidad Nacional">Universidad Nacional</option>
                                <option value="Universidad de Antioquia">Universidad de Antioquia</option>
                                <option value="Universidad de los Andes">Universidad de los Andes</option>
                                <option value="Universidad de Caldas">Universidad de Caldas</option>
                                <option value="Universidad de Cundinamarca">Universidad de Cundinamarca</option>
                                <option value="Universidad de Córdoba">Universidad de Córdoba</option>
                                <option value="Universidad de la Santísima Trinidad">Universidad de la Santísima Trinidad</option>
                                <option value="Universidad de La Guajira">Universidad de La Guajira</option>
                                <option value="Universidad de La Sabana">Universidad de La Sabana</option>
                                <option value="Universidad de Manizales">Universidad de Manizales</option>
                                <option value="Universidad de Medellín">Universidad de Medellín</option>
                                <option value="Universidad de Nariño">Universidad de Nariño</option>
                                <option value="Universidad de Pamplona">Universidad de Pamplona</option>
                                <option value="Universidad de San Buenaventura">Universidad de San Buenaventura</option>
                                <option value="Universidad de San Carlos de Guatemala">Universidad de San Carlos de Guatemala</option>
                                <option value="Universidad de San Mateo">Universidad de San Mateo</option>
                                <option value="Universidad de Santa Marta">Universidad de Santa Marta</option>
                                <option value="Universidad de Sucre">Universidad de Sucre</option>
                                <option value="Universidad de Tolima">Universidad de Tolima</option>
                            </select>
                        </div>
                        
                        <div className="grid py-2 px-10 relative">
                            <select 
                                id="career" 
                                className="peer text-black rounded-2xl outline-none border-none
                                    bg-gray-100 px-6 py-4 w-full focus:border-black focus:ring-0 focus:bg-gray-200
                                    placeholder:text-sm hover:cursor-pointer hover:bg-gray-200 transition-colors duration-150"
                                value={career}
                                onChange={(e) => setCareer(e.target.value)}
                                required
                            >
                                <option value="" disabled selected>Carrera</option>
                                <option value="Ingeniería de Sistemas">Ingeniería de Sistemas</option>
                                <option value="Ingeniería de Software">Ingeniería de Software</option>
                                <option value="Ingeniería de Minas">Ingeniería de Minas</option>
                                <option value="Ingeniería de Alimentos">Ingeniería de Alimentos</option>
                            </select>
                        </div>
                        
                        <NavigationButtons />
                    </>
                );
                
            case 4: // Contraseña
                return (
                    <>
                        <h1 className="text-xl font-medium text-black px-10" 
                            style={{fontFamily:"'Inter', sans-serif"}}>
                            Seguridad
                        </h1>
                        
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
                        
                        <div className="grid py-2 px-10">
                            <Input 
                                id="confirmPassword"
                                type="password"
                                label="Confirmar contraseña"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required={true}
                            />
                        </div>
                        
                        <div className="grid grid-cols-2 px-10 gap-4 mt-4">
                            <div className="flex justify-start">
                                <Button onClick={prevStep} variant="secondary">
                                    Atrás
                                </Button>
                            </div>
                            <div className="flex justify-end">
                                <Button onClick={handleSubmit} size="lg">
                                    Registrarse
                                </Button>
                            </div>
                        </div>
                    </>
                );
                
            default:
                return null;
        }
    };
    
    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-4xl min-h-[600px] h-auto w-full p-32 relative">
                <CloseButton onClick={() => setIsOpen(false)} />
                
                <StepIndicator />
                
                {renderStep()}
            </div>
        </div>
    );
};

export default RegisterModal;