import React from 'react'
import './proyecto.css';


function Proyecto(props) {
    return (
      <div className = "proyecto">
          <h1>{props.nombre}</h1>
          <a href={props.enlace}>Ver proyecto</a>
          <img src={require(`../../images/${props.ruta}`).default} alt={props.alt} />
      </div>
    );
  }
  
  export { Proyecto };