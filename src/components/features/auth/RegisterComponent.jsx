import React, { useState} from 'react';
import Input from '../../ui/Input.jsx';
import Button from '../../ui/Button.jsx';

export default function RegisterComponent() {
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
    const [termsandConditions, setTermsandConditions] = useState(false);

    const nextStep = () => {
        setStep(prevStep => prevStep + 1)
    }
    const prevStep = () => {
        setStep(prevStep => prevStep - 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        console.log('Email:', email, 'Password:', password,
            'Name:', name, 'Lastname:', lastname, 'Sex:', sex, 'Dob:', dob, 
            'University:', university, 'Career:', career, 'Confirm Password:', confirmPassword);
        // Redirección después de sign up exitoso
        window.location.href = '/app/maindashboard';
    };

    const progressPercentage = `${(step / 4) * 100}%`;

    const ProgressBar = () => (
            <div className="relative h-1 w-full bg-text-accent-dark dark:bg-text-accent-light rounded">
                <div className="h-1 bg-primary-dark dark:bg-primary-light rounded-full" style={{ width: progressPercentage }}></div>
            </div>
    );

    const NavigationButtons = () => (
        <div className="grid grid-cols-2 md:px-10 gap-4">
                <div className="flex justify-start">
                    {step > 1 && (
                        <Button onClick={prevStep} variant="outlineNo">
                            Atrás
                        </Button>
                    )}
                </div>
                <div className="flex justify-end">
                    {step < 4 ? (
                        <Button onClick={nextStep}  size="lg">
                            Siguiente
                        </Button>
                    ): (
                        <Button onClick={handleSubmit} size="lg">
                            Crear cuenta
                        </Button>
                    )}
                </div>
        </div>
    );

    const renderStep = () => {
        switch (step) {
            case 1:
            return (
            <>
                <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center pt-8">Crear cuenta</h1>
                <p className="text-center text-text-secondary-light dark:text-text-secondary-dark mb-6 md:px-12">
                    Bienvenido a YourUniversity, tu plataforma educativa en línea.
                    Para empezar, por favor ingresa tus datos personales.
                </p>
                <div className="space-y-6">
                    <div>
                        <Input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label="Nombre"
                        />
                    </div>    
                    <div>
                        <Input
                            id="lastname"
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            label="Apellido"
                        />
                    </div> 
                    <div>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Correo electrónico"
                        />
                    </div> 
                </div>
                <div className="flex items-center">
                    <input
                        id="termsandconditions"
                        type="checkbox"
                        checked={termsandConditions}
                        onChange={(e) => setTermsandConditions(e.target.checked)}
                        className="h-4 w-4 rounded border-none bg-text-secondary-dark
                        text-accent-light focus:ring-0 focus:ring-offset-0 focus:outline-none 
                        dark:bg-secondary-dark dark:checked:bg-accent-dark "
                    />
                    <label htmlFor="termsandconditions" className="ml-2 block text-sm text-text-accent-light dark:text-text-accent-dark">
                        Acepto los <a href="/termsandconditions" className="text-text-accent-light hover:text-text-primary-light dark:text-text-accent-dark dark:hover:text-text-primary-dark">términos y condiciones</a>
                    </label>
                </div>
                {NavigationButtons()}
            </>
            );
            case 2:
            return (
            <>
                <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center pt-8">Datos adicionales</h1>
                <p className="text-center text-text-secondary-light dark:text-text-secondary-dark mb-6 px-12">
                    Por favor, ingresa tus datos adicionales.
                </p>
                <div className="space-y-6">
                    <div>
                        <select 
                            id="sex" 
                            className="peer text-text-primary-light dark:text-text-primary-dark rounded-2xl outline-none border-none
                            bg-hover-light dark:bg-secondary-dark px-6 py-4 w-full focus:border-black focus:ring-0 focus:bg-gray-200
                            placeholder:text-sm hover:cursor-pointer hover:bg-gray-200 transition-colors duration-150"
                            value={sex}
                            onChange={(e) => setSex(e.target.value)}
                            required>
                            <option value="" disabled selected>Sexo</option>
                            <option value="Masculino">Masculino</option> 
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>
                    <div>
                        <Input
                        id="dob"
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        label="Fecha de nacimiento"
                        />
                    </div>
                </div>
                {NavigationButtons()}
            </>
            );
            case 3:
            return (
            <>
                <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center pt-8">Datos académicos</h1>
                <p className="text-center text-text-secondary-light dark:text-text-secondary-dark mb-6 px-12">
                    Por favor, ingresa tus datos académicos.
                </p>
                <div className="space-y-6">
                             <select 
                                 id="university" 
                                 className="peer text-text-primary-light dark:text-text-primary-dark rounded-2xl outline-none border-none
                                     bg-hover-light dark:bg-secondary-dark px-6 py-4 w-full focus:border-black focus:ring-0 focus:bg-gray-200
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
 
                         <div className="space-y-6">
                             <select 
                                 id="career" 
                                 className="peer text-text-primary-light dark:text-text-primary-dark rounded-2xl outline-none border-none
                                     bg-hover-light dark:bg-secondary-dark px-6 py-4 w-full focus:border-black focus:ring-0 focus:bg-gray-200
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
                         {NavigationButtons()}
            </>
            );
            case 4:
            return (
            <>
                <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center pt-8">Crea tu contraseña</h1>
                <p className="text-center text-text-secondary-light dark:text-text-secondary-dark mb-6 px-12">
                    Por favor, crea una contraseña segura para tu cuenta.
                </p>
                <div className="space-y-6">
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Contraseña"
                    />
                </div>
                <div className="space-y-6">
                    <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        label="Confirmar contraseña"
                    />
                </div>
                {NavigationButtons()}
            </>
            );
            default:
                return null;
        };
    };
    return (
        <main className="flex items-center justify-center min-h-screen bg-secondary-light dark:bg-secondary-dark">
            <div className="w-full max-w-[800px] min-h-[600px] py-4 px-8 md:px-24 bg-primary-light dark:bg-primary-dark rounded-xl shadow-lg transition-all duration-300
             text-text-primary-light dark:text-text-primary-dark space-y-8">
                {ProgressBar()}
                {renderStep()}
                
            </div>
        </main>
    );
};
