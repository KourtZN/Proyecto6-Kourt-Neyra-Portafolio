import React from 'react'
import './main.css'
import rdgl from '../../images/rdgl.png';

function Main(){
    return (
        <div className="maind"> 
        <p>Café</p>
        <img className="rdgl" src={rdgl} alt="rdgl" />
        <p>Haz una pausa. Bebe un café.</p>
        
        </div>
      )
}

export { Main }