import "./register.css";
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/users/', {
                name,
                email,
                password
            });

            // Verificar si se ha registrado correctamente
            if (response.status === 201) {
                alert('Registro exitoso. ¡Bienvenido!');
                setName('');
                setEmail('');
                setPassword('');
            } else {
                alert('Error al crear la cuenta');
            }
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="settings">
            <div className="tarjetas">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsTitleUpdate">Crea una cuenta</span>
                        <span className="settingsTitleDelete">Eliminar cuenta</span>
                    </div>
                    {/* {error && <div className="error">{error}</div>} */}
                    <form className="settingsForm" onSubmit={handleRegister}>
                        <label>Nombre</label>
                        <input
                            type="text"
                            placeholder="Safak"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="safak@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Contraseña</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="settingsSubmitButton" type="submit">
                            Crear
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
