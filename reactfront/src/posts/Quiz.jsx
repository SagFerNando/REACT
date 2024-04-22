import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./posts.css";
import Question from './Question.jsx';

export default function Quiz() {
    const [preguntas, setPreguntas] = useState([]);
    const [nombreUnidad, setNombreUnidad] = useState('');
    const [puntaje, setPuntaje] = useState(0);
    const [opcionesCorrectas, setOpcionesCorrectas] = useState([]);

    useEffect(() => {
        const fetchPreguntas = async () => {
            try {
                const response = await axios.get('http://localhost:8000/contents/ques/1'); // Suponiendo que el ID de la unidad es 1
                const preguntasData = response.data;
                setPreguntas(preguntasData);

                if (preguntasData.length > 0 && preguntasData[0].unidad) {
                    const nombreUnidadPrimeraPregunta = preguntasData[0].unidad.nombre || '';
                    setNombreUnidad(nombreUnidadPrimeraPregunta);
                }

                // Obtener los IDs de las opciones correctas de la unidad
                const opcionesCorrectasResponse = await axios.get('http://localhost:8000/contents/opt/cu/1'); // Suponiendo que el ID de la unidad es 1
                const idsOpcionesCorrectas = opcionesCorrectasResponse.data;
                setOpcionesCorrectas(idsOpcionesCorrectas);
            } catch (error) {
                console.error('Error al obtener preguntas u opciones correctas:', error);
            }
        };

        fetchPreguntas();
    }, []);

    const handleRevisar = () => {
        let puntos = 0;
        preguntas.forEach((pregunta) => {
            if (pregunta.opciones && pregunta.opciones.length > 0) {
                const opcionSeleccionada = document.querySelector(`input[name="option_${pregunta.id}"]:checked`);
                if (opcionSeleccionada) {
                    const idOpcionSeleccionada = parseInt(opcionSeleccionada.value);
                    if (opcionesCorrectas.includes(idOpcionSeleccionada)) {
                        puntos++;
                    }
                }
            }
        });
        alert(`Puntos obtenidos: ${puntos}`);
        setPuntaje(puntos);
    };

    return (
        <div className='card'>
            <div className="tarjetas ">
                <h1 className="title">Cuestionario</h1>
                <div className="card-body">
                    {preguntas.map((pregunta) => (
                        <Question key={pregunta.id} pregunta={pregunta} />
                    ))}
                </div>
                <button className="submitPost" onClick={handleRevisar}>
                    Revisar
                </button>
                <p>Puntaje: {puntaje}</p>
            </div>
        </div>
    );
}
