import React from 'react'
import './proyecto.css';
import landing from '../../images/landing.JPG'
import coleccionador from '../../images/coleccionador.JPG'
import cripto from '../../images/cripto.JPG'
import cafe from '../../images/cafe.JPG'
import portafolio from '../../images/portafolio.JPG'


function Proyecto(props) {
  let imagen;
  if(props.imag === 'landing'){imagen = landing}
  if(props.imag === 'coleccionador'){imagen = coleccionador}
  if(props.imag === 'cripto'){imagen = cripto}
  if(props.imag === 'cafe'){imagen = cafe}
  if(props.imag === 'portafolio'){imagen = portafolio}
    return (
      <div className = "proyecto">
        <div className="imgproyecto">
          <img src={imagen} alt={props.imag} />
        </div>
        <div className="descrproyecto">
          <h1>{props.nombre}</h1>
          <p>{props.desc}</p>
          <div>
          <a className="button" href={props.enlace1} target="_blank">Ver Página</a>
          <a className="button" href={props.enlace2} target="_blank">Ver en GitHub</a>
          </div>
        </div>
          
      </div>
    );
  }
  
  export { Proyecto };