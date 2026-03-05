import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/register', { username, password });
            setMessage('Registration successful! Redirecting to login...');
            setTimeout(() => navigate('/'), 2000);
        } catch (err) {
            setMessage(err.response?.data?.error || 'Registration failed');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Create Account</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required /><br/><br/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required /><br/><br/>
                <button type="submit">Register</button>
            </form>
            <p>{message}</p>
            <p>
  Already have an account? <span 
    style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }} 
    onClick={() => navigate('/')}
  >
    Login here
  </span>
</p>
        </div>
    );
};

export default Register;