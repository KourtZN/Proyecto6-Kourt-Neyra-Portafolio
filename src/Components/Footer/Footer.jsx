import React from 'react'
import './footer.css'
import mail from '../../images/mail.png'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import whatsapp from '../../images/whatsapp.png'
function Footer(){
    return <footer className="footer">

        <div className="reds">
        <p>2022. Creado por Kourt Neyra</p>
        <a href="https://www.linkedin.com/in/ahmet-fabi%C3%A1n-kourt-neyra-g%C3%B3mez-595678188/" target="_blank"><img src={linkedin} alt="linkedin" className="reed"/></a>
        <a href="https://github.com/KourtZN" target="_blank"><img src={github} alt="github" className="reed"/></a>
        <a href="mailto:raztenia@gmail.com" target="_blank" title='raztenia@gmail'><img src={mail} alt="mail" className="reed"/></a>
        <a href="https://wa.me/5215562567373" target="_blank" title='5562567373'><img src={whatsapp} alt="whatsapp" className="reed"/></a>
            </div> 
    </footer>
}

export { Footer }