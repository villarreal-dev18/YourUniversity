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
        setStep(step + 1)
    }
    const prevStep = () => {
        setStep(step - 1)
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
            <div className="relative h-1 w-full bg-neutral-200 dark:bg-neutral-600 rounded">
                <div className="h-1 bg-primary rounded-full" style={{ width: progressPercentage }}></div>
            </div>
    );

    const NavigationButtons = () => (
        <div className="grid grid-cols-2 px-10 gap-4">
                <div className="flex justify-start">
                    {prevStep && (
                        <Button onClick={prevStep} variant="outlineNo">
                            Atrás
                        </Button>
                    )}
                </div>
                <div className="flex justify-end">
                    <Button onClick={nextStep}  size="lg">
                        Siguiente
                    </Button>
                </div>
                
        </div>
    );

    const renderStep = () => {
        switch (step) {
            case 1:
            return (
            <>
                <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center pt-8">Crear cuenta</h1>
                <p className="text-center text-text-secondary-light dark:text-text-secondary-dark mb-6 px-12">
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
            </>
            );
            case 2:
            return (
            <>
                <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center pt-8">Datos adicionales</h1>
                <p className="text-center text-text-secondary-light dark:text-text-secondary-dark mb-6 px-12">
                    Por favor, ingresa tus datos adicionales.
                </p>
            </>
            );
            case 3:
            return (
            <>
                <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center pt-8">Datos académicos</h1>
                <p className="text-center text-text-secondary-light dark:text-text-secondary-dark mb-6 px-12">
                    Por favor, ingresa tus datos académicos.
                </p>
            </>
            );
            case 4:
            return (
            <>
                <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center pt-8">Crea tu contraseña</h1>
                <p className="text-center text-text-secondary-light dark:text-text-secondary-dark mb-6 px-12">
                    Por favor, crea una contraseña segura para tu cuenta.
                </p>
            </>
            );
        };
    };
    return (
        <main className="flex items-center justify-center min-h-screen bg-secondary-light dark:bg-secondary-dark">
            <div className="w-full max-w-[800px] min-h-[600px] py-4 px-24 bg-primary-light dark:bg-primary-dark rounded-xl shadow-lg transition-all duration-300
             text-text-primary-light dark:text-text-primary-dark space-y-8">
                {ProgressBar()}
                {renderStep()}
                {NavigationButtons()}
            </div>
        </main>
    );
};
