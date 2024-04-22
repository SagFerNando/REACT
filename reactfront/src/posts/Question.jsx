import React, { useState, useEffect } from 'react';
import './question.css';
import axios from 'axios';

export default function Question({ pregunta }) {
    const [opciones, setOpciones] = useState([]);

    useEffect(() => {
        const fetchOpciones = async () => {
            try {
                if (pregunta && pregunta.id) { // Asegúrate de que pregunta y pregunta.id estén definidos
                    const response = await axios.get(`http://localhost:8000/contents/opt/${pregunta.id}`); // Obtener opciones por ID de pregunta
                    setOpciones(response.data);
                }
            } catch (error) {
                console.error('Error al obtener opciones:', error);
            }
        };

        fetchOpciones();
    }, [pregunta]);

    return (
        <div>
            <div className="quiz-container">
                <div id="question" className="question">{pregunta.pregunta}</div>
                {opciones.map((opcion) => (
                    <label key={opcion.id} className="option">
                        <input type="radio" name={`option_${pregunta.id}`} value={opcion.id} />
                        <span className={`option${opcion.id}`}>{opcion.respuesta}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}
