import React from 'react'
import './portafolio.css'
import { Proyecto } from '../Proyecto/Proyecto.jsx';

function Portafolio() {
    return (
        <div className="contenedorPortafolio">
        <Proyecto nombre="capuccino" ruta="capuchino.jpg" alt="capu" enlace="www.google.com"/>
        </div>
    );
  }
  
  export  {Portafolio}