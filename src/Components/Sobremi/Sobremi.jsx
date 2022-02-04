import React from 'react'
import './sobremi.css'
import rdgl from '../../images/rdgl.png';

function Sobremi(){
    return (
        <div className="maind"> 
        <p>Café</p>
        <img className="rdgl" src={rdgl} alt="rdgl" />
        <p>Haz una pausa. Bebe un café.</p>
        
        </div>
      )
}

export { Sobremi }