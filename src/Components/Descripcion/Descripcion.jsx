import React from 'react'
import './descripcion.css';

function Descripcion(props) {
    let texto = '';
    if(props.indice === 1){
        texto = 'ACERCA DE MI';
    }else
    if(props.indice === 2){
        texto = 'UN LISTADO DE LOS PROYECTOS QUE HE HECHO';
    }else
    if(props.indice === 3){
        texto = 'INFORMACIÓN DE CONTACTO';
    }else
    if(props.indice === 4){
        texto = 'EXPERIENCIA';
    }
    



    return (
      <div className = "desc" style={{border: `1px solid ${props.col}`}}>
      <p>{texto}</p>        
      </div>
    );
  }
  
  export { Descripcion };