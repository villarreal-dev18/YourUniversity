import React, { useState } from 'react';
import Input from '../../ui/Input.jsx';
import Button from '../../ui/Button.jsx';

export default function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password, 'Remember me:', rememberMe);
    // Redirección después de login exitoso
    window.location.href = '/app/maindashboard';
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-secondary-light dark:bg-secondary-dark">
      <div className="max-w-md w-full p-8  bg-primary-light dark:bg-primary-dark rounded-xl shadow-lg transition-all duration-300">
        <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">
          Iniciar Sesión
        </h1>
        
        <p className="text-center text-text-secondary-light dark:text-text-secondary-dark mb-6">
          Bienvenido a YourUniversity. Inicia sesión para continuar.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Correo electrónico"
              required
              className="w-full rounded-lg"
            />
          </div>
          
          <div>
            
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Contraseña"
              required
              className="w-full rounded-lg"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-none bg-text-secondary-dark
                text-accent-light focus:ring-0 focus:ring-offset-0 focus:outline-none 
                dark:bg-secondary-dark dark:checked:bg-accent-dark "
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-text-accent-light dark:text-text-accent-dark">
                Recordarme
              </label>
            </div>
            
            <div className="text-sm pl-8">
              <a href="#" className="font-medium text-text-accent-light hover:text-text-primary-light dark:text-text-accent-dark dark:hover:text-text-primary-dark">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
          
          <div>
            <Button 
              type="submit" 
              fullWidth={true} 
              variant="primary"
              className="py-3"
            >
              Iniciar Sesión
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              ¿No tienes una cuenta?{' '}
              <a href="/app/register" className="font-medium text-text-accent-light hover:text-text-primary-light dark:text-text-accent-dark dark:hover:text-text-primary-dark">
                Regístrate
              </a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
} 