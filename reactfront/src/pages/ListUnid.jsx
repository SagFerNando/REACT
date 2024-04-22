import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../posts/posts.css";
import Post from '../posts/Posts.jsx';

export default function ListUnid() {
    const [showPost, setShowPost] = useState(false); // Estado para controlar la visibilidad de Post
    const [selectedUnidad, setSelectedUnidad] = useState(null); // Estado para almacenar la unidad seleccionada
    const [unidades, setUnidades] = useState([]); // Estado para almacenar los datos de las unidades

    useEffect(() => {
        async function fetchUnidades() {
            try {
                const response = await axios.get('http://localhost:8000/contents/unid');
                setUnidades(response.data); // Actualizar el estado con los datos obtenidos
            } catch (error) {
                console.error('Error al obtener las unidades:', error);
            }
        }

        fetchUnidades();
    }, []);

    const handleShowPost = (unidad) => {
        setSelectedUnidad(unidad); // Al hacer clic en una unidad, establecerla como la seleccionada
        setShowPost(true); // Mostrar la interfaz Post
    };

    const handleHidePost = () => {
        setShowPost(false); // Ocultar la interfaz Post al hacer clic en otro elemento de la lista
    };

    return (
        <div className='card'>
            {!showPost && ( // Mostrar la lista de unidades si showPost es false
                <div className="tarjetas">
                    <h2 className='title'>Contenidos</h2>
                    <div className="list">
                        {unidades.map((unidad) => (
                            <div className="item" key={unidad.id} onClick={() => handleShowPost(unidad)}>
                            <h2>Unidad {unidad.id} : {unidad.nombre}</h2> {/* Mostrar el título de la unidad */}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {showPost && <Post unidad={selectedUnidad} onBack={handleHidePost} />} {/* Pasar la unidad seleccionada y la función para ocultar la interfaz */}
        </div>
    );
}
