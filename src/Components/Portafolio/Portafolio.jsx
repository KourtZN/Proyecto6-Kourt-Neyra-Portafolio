import React from 'react'
import './portafolio.css'
import { Proyecto } from '../Proyecto/Proyecto.jsx';

function Portafolio() {
    return (
        <div className="contenedorPortafolio">
        <Proyecto nombre="capuccino" ruta="capuchino.jpg" alt="capu" enlace="https://www.google.com"/>
        <Proyecto nombre="capuccino" ruta="capuchino.jpg" alt="capu" enlace="https://www.google.com"/>
        <Proyecto nombre="capuccino" ruta="capuchino.jpg" alt="capu" enlace="https://www.google.com"/>
        <Proyecto nombre="capuccino" ruta="capuchino.jpg" alt="capu" enlace="https://www.google.com"/>
        <Proyecto nombre="capuccino" ruta="capuchino.jpg" alt="capu" enlace="https://www.google.com"/>
        <Proyecto nombre="capuccino" ruta="capuchino.jpg" alt="capu" enlace="https://www.google.com"/>
        <Proyecto nombre="capuccino" ruta="capuchino.jpg" alt="capu" enlace="https://www.google.com"/>
        <Proyecto nombre="capuccino" ruta="capuchino.jpg" alt="capu" enlace="https://www.google.com"/>
        </div>
    );
  }
  
  export  {Portafolio}