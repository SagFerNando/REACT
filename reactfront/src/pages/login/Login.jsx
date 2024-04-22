import React, { useState } from 'react';
import axios from 'axios';
import "./login.css"
import Register from '../register/Register.jsx'; // Asegúrate de importar correctamente el componente Register
import ListUnid from '../ListUnid.jsx'; // Asegúrate de importar correctamente el componente ListUnid

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showRegister, setShowRegister] = useState(false); // Estado para controlar si se muestra el componente Register
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar si se ha iniciado sesión correctamente

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/users/auth/', {
                email,
                password
            });
            console.log(response.data); // Manejar la respuesta del servidor según sea necesario
            setIsLoggedIn(true); // Marcar como autenticado al recibir una respuesta exitosa
            setError(''); // Limpiar el error en caso de haberlo mostrado anteriormente
        } catch (error) {
            setError('Error al iniciar sesión');
        }
    };

    const handleRegisterClick = () => {
        setShowRegister(true); // Al hacer clic en el botón "Registrarse", se muestra el componente Register
    };

    return (
        <div className="login">
            {!showRegister && !isLoggedIn && ( // Mostrar el Login solo si showRegister y isLoggedIn son false
                <div className="tarjetas">
                    <span className="loginTitle">Iniciar Sesión</span>
                    {error && <div className="error">{error}</div>}
                    <form className="loginForm" onSubmit={handleLogin}>
                        <label>Email</label>
                        <input
                            className="loginInput"
                            type="text"
                            placeholder="Ingresa tu email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Contraseña</label>
                        <input
                            className="loginInput"
                            type="password"
                            placeholder="Ingresa tu contraseña..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="loginButton" type="submit">Iniciar Sesión</button>
                    </form>
                    <button className="loginRegisterButton" onClick={handleRegisterClick}>Registrarse</button>
                </div>
            )}
            {showRegister && <Register />} {/* Renderizar Register cuando showRegister es true */}
            {isLoggedIn && <ListUnid />} {/* Renderizar ListUnid cuando isLoggedIn es true */}
        </div>
    );
};

export default Login;
