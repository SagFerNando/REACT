
import React, { useState } from 'react';
import "./sidebar.css"
import Login from "../pages/login/Login.jsx"

export default function Sidebar() {
  const [showLogin, setShowLogin] = useState(false); // Estado para controlar si se muestra el componente Login

  const handleLoginClick = () => {
    setShowLogin(true); // Al hacer clic en el botón, se muestra el componente Login
  };
  return (
    <div className="sidebar">
      {!showLogin && ( // Mostrar el Sidebar solo si showLogin es false
        <React.Fragment>
          <div className="sidebarItem">
            <span className="sidebarTitle">ACERCA DEL CURSO</span>
            <p className="singlePostDesc">
            -
Edición y fotografía De Bodas y Sesiones - Estilo de fotografía Rusa - Curso 1 - Nivel Integral (Inicial)</p>
            <br />
            <img src="https://i.blogs.es/6d4e42/portada-cam/450_1000.jpg"
              alt="" />
            <br />
            <p>
              Requisitos
              Tener instalado el paquete Adobe (Photoshop con camera raw y Bridge; o Lightroom en su defecto)
              Para la creación de fotolibros, utilizaremos Smart Album (version gratuita disponible)
              No se necesitan conocimientos previos de edición de ningún tipo
              Descripción
              Hola, soy Juan Pablo Aquila, Licenciado en Comunicación y fotógrafo especializado en bodas y sesiones.

              Estoy muy contento de traerte esta serie de dos cursos (básico y avanzado), que finalmente me decidí a dar donde revelo todos mis secretos:



              En este curso básico vamos a:

              - Revelar imágenes de forma global, orientado al estilo de fotografía Rusa, ese que tanto se destaca en sesiones y lo utilizan reconocidas fotógrafas rusas, con los colores e iluminación tan peculiares que los caracterizan.

              - Aprender todo lo relacionado a flujo de trabajo de eventos sociales, para que puedas organizar grandes cantidades de imágenes, de una forma muy ágil y metódica.

              - Entender como funciona la luz a través de un histograma.<br/>

              - Dominar el color en detalle. Armaremos nuestra propia paleta de color y nunca más vas a tener problemas con esas fotos que tanto te lían los colores.

              - Aprender a hacer un fotolibro en pocos minutos con Smart Album, para que tengas una excelente presentacion de tus trabajos, y no pierdas demasiado tiempo en ello.

              - Finalmente, hablaremos de como yo hago las fotos: Que equipos utilizo, por qué, que tengo en cuanta a la hora de captar una imagen, donde y cómo me situo, y muchos tips más.



              Sin mucho más que decir, pero por muchísimo más por ver.



              ¡Bienvenid@!<br />

            </p>
            <br />
            <h2>APRENDERAS</h2>
            <ul>
              <li>Conceptos netamente fotográficos, orientados a bodas y sesiones Equipos que utilizo, planos, conceptos de composición, entre otros.</li>
              <li>Flujo de trabajo. Organización, jerarquización, clasificación y etiquetado de gran cantidad de fotos de eventos o sesiones.</li>
              <li>Funcionamiento de la Luz y Color con histograma. Creación de paleta de color.</li>
              <li>Revelado de fotografías de bodas y sesiones, de una forma metódica, rápida y sistemática. Orientación al estilo Ruso de fotografía.</li>
            </ul>

            <img
              src="https://www.mexicodesconocido.com.mx/wp-content/uploads/2020/07/camara.jpg"
              alt=""
            />
            <p>
              Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
              amet ex esse.Sunt eu ut nostrud id quis proident.
            </p>
          </div>
          <div className="sidebarItem">
            <span className="sidebarTitle">TOMAR EL CURSO</span>
            <button id="iniciar" className='sidebarButton' onClick={handleLoginClick}>
              Iniciar Curso
            </button>
          </div>
          <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>

          </div>
        </React.Fragment>
      )}
      {showLogin && <Login />} {/* Renderizar Login cuando showLogin es true */}

    </div>
  )
}
