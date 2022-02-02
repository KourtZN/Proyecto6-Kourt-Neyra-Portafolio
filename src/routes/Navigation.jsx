import React from 'react'
import App from '../App/App'
//Routes
import { Routes , Route} from 'react-router-dom'
//sections
import {Main} from '../Components/Main/Main'
import {Portafolio} from '../Components/Portafolio/Portafolio'
import {Contacto} from '../Components/Contacto/Contacto'

function Navigation() {

    return (
    <App>
        <Routes>
        <Route path="/" element={<Main/>} exact/>
        <Route path="/Portafolio" element={<Portafolio/>} exact/>
        <Route path="/Contacto" element={<Contacto/>} exact/>
        <Route path="/Nosotros" element={<Portafolio/>} exact/>
        <Route path="/Reservaciones" element={<Portafolio/>} exact/>
        </Routes>

    </App>
    );

}

export {Navigation}

/*

Encabezado
*/ 