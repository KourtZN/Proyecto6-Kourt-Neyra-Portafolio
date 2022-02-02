import React from 'react'
import './proyecto.css';
import capu from '../../images/capuchino.jpg'


function Proyecto(props) {
    return (
      <div className = "proyecto">
          <h1>{props.nombre}</h1>
          <a href={props.enlace} target="_blank">Ver proyecto</a>
          <img src={capu} alt={props.alt} />
      </div>
    );
  }
  
  export { Proyecto };