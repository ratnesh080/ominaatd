import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Effect to pre-fill username if it exists in localStorage
    useEffect(() => {
        const savedUser = localStorage.getItem('rememberedUser');
        if (savedUser) setUsername(savedUser);
    }, []);

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5001/login', { username, password });
        
        if (response.data.token) {
            // Store the token and the "remembered" username
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('rememberedUser', username);
            
            navigate('/welcome');
        }
    } catch (err) {
        setError('Unauthorized: Access Denied');
    }
};

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                </div>
                <br />
                <div>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <br />
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p>
  Don't have an account? <span 
    style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }} 
    onClick={() => navigate('/register')}
  >
    Register here
  </span>
</p>
        </div>
    );
};

export default Login;