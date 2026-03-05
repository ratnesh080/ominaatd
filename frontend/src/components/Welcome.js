import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('rememberedUser');

    useEffect(() => {
        // If no token exists, kick the user back to Login
        if (!token) {
            navigate('/');
        }
    }, [token, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear security token
        navigate('/');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Dashboard</h1>
            <p>Authenticated as: <strong>{user}</strong></p>
            <button onClick={handleLogout}>Logout & Clear Session</button>
        </div>
    );
};
export default Welcome;