import React from 'react'
import './contacto.css'
import mail from '../../images/mail.png'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import whatsapp from '../../images/whatsapp.png'

function Contacto(){
    return <div className="contacto">
        <div className="formularioCont">
        <h1>CONTACTO</h1>
        <p>Si mi perfil es de tu interés no dudes en escribirme por cualquiera de los siguientes medios de contacto.</p>
        <p>Seguramente lograremos encontrar la mejor solución para las necesidades de tu negocio/empresa para maximizar tus beneficios al contar con una aplicación WEB que te diferencíe de tu competencia!</p>
        <div className="redes">
        <a href="https://www.linkedin.com/in/ahmet-fabi%C3%A1n-kourt-neyra-g%C3%B3mez-595678188/" target="_blank"><img src={linkedin} alt="linkedin" className="red"/></a>
        <a href="https://github.com/KourtZN" target="_blank"><img src={github} alt="github" className="red"/></a>
        <a href="mailto:raztenia@gmail.com" target="_blank" title='raztenia@gmail'><img src={mail} alt="mail" className="red"/></a>
        <a href="https://wa.me/5215562567373" target="_blank" title='5562567373'><img src={whatsapp} alt="whatsapp" className="red"/></a>
            </div>            
        </div>

        </div>
        

    
}

export { Contacto }