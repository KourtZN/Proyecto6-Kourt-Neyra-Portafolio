import React from 'react'
import './portafolio.css'
import { Proyecto } from '../Proyecto/Proyecto.jsx';

function Portafolio() {
    return (
        <>
        
        <div className="contenedorPortafolio">
        <Proyecto nombre="Landing de Venta" imag="landing" enlace1="https://kourtzn.github.io/Proyecto1-Landing-KourtNeyra/" enlace2="https://github.com/KourtZN/Proyecto1-Landing-KourtNeyra" 
        desc="Una página creada con HTML y CSS que funciona para atraer clientes e invitarlos a que proporcionen sus datos o visiten tu tienda o aplicación. Pertenece a una tienda de productos de entretenimiento."/>

        <Proyecto nombre="Coleccionador (Aplicación CRUD)" imag="coleccionador" enlace1="https://kourtzn.github.io/Proyecto_2_CRUD_Coleccionador/" enlace2="https://github.com/KourtZN/Proyecto_2_CRUD_Coleccionador" 
        desc="Utilizando Javascript, HTML y CSS, esta aplicación utiliza las ventajas de 'Localstorage' para crear un coleccionador de artículos en línea muy sencilla de utilizar."/>

        <Proyecto nombre="Criptomonedas (Tablero de Datos)" imag="cripto" enlace1="https://kourtzn.github.io/TEAM_B_PROYECTO_3_DASHBOARD_APP/" enlace2="https://github.com/KourtZN/TEAM_B_PROYECTO_3_DASHBOARD_APP" 
        desc="Esta aplicación que fue creada en equipo, contiene una manera rápida de consultar el cambio de precio de diferentes criptomonedas en periodos configurables. Se utilizó el consumo de APIs para la creación de esta aplicación."/>

        <Proyecto nombre="Cafetería (Restaurant App)" imag="cafe" enlace1="https://goofy-archimedes-4523ee.netlify.app/" enlace2="https://github.com/KourtZN/Ahmet_Fabian_Kourt_Neyra_Gomez_PROY4_RestaurantApp" 
        desc="Aplicación creada en React e implementando la base de datos Firebase, esta aplicación es un restaurante en el que puedes reservar tu mesa con anticipación, así como consultar el menú, con algunas adecuaciones puede convertirse en un ecommerce"/>

        <Proyecto nombre="Portafolio" imag="portafolio" enlace1="/" enlace2="https://www.google.com" 
        desc="Es la aplicación que estás navegando en este momento"/>

        </div>
        </>
    );
  }
  
  export  {Portafolio}