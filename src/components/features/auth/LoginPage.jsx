
import {react, useEffect} from 'react';
import Input from '../../ui/Input.jsx';
import Button from '../../ui/Button.jsx';
import CloseButton from '../../ui/CloseButton.jsx';
import { effect } from 'astro:schema';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        window.Location.href = '/maindashboard.astro';
    };
    return (
        <main className="flex items-center justify-center">

        </main>
    );
};
    