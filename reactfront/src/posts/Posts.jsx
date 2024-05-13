import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./posts.css";

import Quiz from './Quiz'; // Importa el componente Quiz

export default function Posts() {
    const [unidades, setUnidades] = useState([]);
    const [contents, setContents] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false); // Estado para controlar si se muestra el Quiz

    useEffect(() => {
        async function fetchData() {
            try {
                const responseUnidades = await axios.get('http://localhost:8000/contents/unid'); // Ruta para obtener las unidades
                setUnidades(responseUnidades.data);

                const responseContents = await axios.get('http://localhost:8000/contents/cont'); // Ruta para obtener los contenidos
                setContents(responseContents.data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        }

        fetchData();
    }, []);

    const handleNextContent = () => {
        if (currentIndex + 1 >= contents.length) {
            setShowQuiz(true); // Mostrar Quiz cuando se hayan mostrado todos los contenidos
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const renderAsset = (asset) => {
        // Comprobar si el asset es un enlace a una imagen
        if (/\.(jpeg|jpg|gif|png)$/.test(asset)) {
            return <img className="resource" src={asset} alt="Imagen" />;
        }
        // Comprobar si el asset es un enlace a un video (puede necesitar ajustes según el tipo de video)
        else if (/\.(mp4|webm|ogg)$/.test(asset)) {
            return (
                <video className="resource" controls>
                    <source src={asset} type="video/mp4" />
                    Tu navegador no admite la reproducción de videos.
                </video>
            );
        }
        // Si no es ni imagen ni video, mostrar un mensaje de error
        else {
            return <p>Error: Tipo de archivo no admitido.</p>;
        }
    };

    return (
        
        <div className='card'>
            {showQuiz ? ( // Renderizado condicional para mostrar solo Quiz cuando showQuiz es true
        <Quiz />
    ) : (
        unidades.map((unidad) => (
                <div key={unidad.id} className="tarjetas">
                    <div className="card-body">
                        
                        {contents
                            .filter((content) => content.id_unidad === unidad.id)
                            .slice(currentIndex, currentIndex + 1)
                            .map((content) => (
                                <React.Fragment key={content.id}>
                                    <h1 className="title">Tema {content.id} : {content.tema}</h1>
                                    <p className="contenido">{content.contenido}</p>
                                    {renderAsset(content.asset)} {/* Llama a la función renderAsset */}
                                    <p className="somemore">{content.notas}</p>
                                </React.Fragment>
                            ))}
                        <div className="button">
                            <button className="submitPost" onClick={handleNextContent}>
                                Revisar/Continuar
                            </button>
                        </div>
                        <div id="tema_unidad" className="title">
                            Unidad {unidad.id} Tema: {unidad.nombre}
                        </div>
                    </div>
                </div>
            ))
            )}
        </div>
    );
}
