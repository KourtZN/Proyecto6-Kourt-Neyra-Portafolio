import React from 'react'
import './descripcion.css';

function Descripcion(props) {
    let texto = 'Puedo ayudarte a construir la aplicación web que tu negocio necesita, siéntete libre de navegar por esta página y contactarme si mi perfil ha sido de tu interés';
    let titulo = 'Bienvenido';
    if(props.indice === 1){
        titulo = 'Acerca de mí';
        texto = 'En esta sección puedes conocer un poco sobre mis estudios y algunos datos de mi historial';
    }else
    if(props.indice === 2){
        titulo = 'Proyectos';
        texto = 'En esta sección puedes ver un listado de los proyectos en los que he trabajado, así como los enlaces a cada uno de ellos';
    }else
    if(props.indice === 3){
        titulo = 'Información de contacto';
        texto='Puedes encontrar aquí los enlaces a mi perfil de LinkedIn y Github, así como algunos medios de contacto';
    }else
    if(props.indice === 4){
        titulo = 'Experiencia';
        texto='Un breve recorrido por mi historia profesional y las tecnologías y lenguajes que conozco';
    }

    



    return (
      <div className = "desc" style={{border: `1px solid ${props.col}`}}>
          <h1>{titulo}</h1>
      <p>{texto}</p>        
      </div>
    );
  }
  
  export { Descripcion };