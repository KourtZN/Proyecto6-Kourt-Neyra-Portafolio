import React from 'react'
import { Link } from 'react-router-dom' 
import './header.css'
import logo from '../../images/logo.jpg'
import { Descripcion } from '../Descripcion/Descripcion';

function Header(){

  const [backcolor, setbackcolor] = React.useState('black');
  const [col, setcol] = React.useState('black');
  const [indice, setindice] = React.useState(0);
  const [mostrardesc, setmostrardesc] = React.useState(true);



  const useScrollHandler = () => {
    const [scrolls, setScrolls] = React.useState(0);
  
    React.useEffect(() => {
      const onScroll = () => {
        const scrollCheck = window.scrollY > 10;
        setScrolls(scrollCheck);
      };
  
      document.addEventListener("scroll", onScroll);
      return () => {
        document.removeEventListener("scroll", onScroll);
      };
    }, [scrolls, setScrolls]);
  
    return scrolls;
  };

  function resetcolor(){
    setbackcolor('black');
    setindice(0);
    setcol('black');
    //setmostrardesc(false);
    console.log('resetcolor')

  }


  const scrolls = useScrollHandler();





    return (   
    <header className={`header ${scrolls ? "headertop" : "headerbig"}`} style={{backgroundColor: backcolor}}>
      <div className={scrolls ? "tops" : "tops1"}>
    <div className="logoyname">
    
    <Link to='/' onClick={() => {window.scrollTo(0, 0);}} ><img src={logo} alt="logo" className={`headerimg ${scrolls ? "headertopimg" : "headerbigimg"}`}/></Link>
    <div onClick={() => {window.scrollTo(0, 0);}} ><h1 className="titulo">Kourt Neyra</h1>
    </div>
    
    </div> 
    
    <nav className={scrolls ? "superior" : "portada"}>
    <Link to='/' onClick={() => {window.scrollTo(0, 11);}} onMouseEnter={() => {setbackcolor('red');setcol('red');setindice(1);setmostrardesc(true);}} onMouseOut={resetcolor} >Sobre mí</Link>
    <Link to='/Portafolio' onClick={() => {window.scrollTo(0, 11);}} onMouseEnter={() => {setbackcolor('blue');setcol('blue');setindice(2);setmostrardesc(true);}} onMouseOut={resetcolor}>Proyectos</Link>
    <Link to='/Contacto' onClick={() => {window.scrollTo(0, 11);}} onMouseEnter={() => {setbackcolor('green');setcol('green');setindice(3);setmostrardesc(true);}} onMouseOut={resetcolor}>¡Hablemos!</Link>
    <Link to='/Experiencia' onClick={() => {window.scrollTo(0, 11);}} onMouseEnter={() => {setbackcolor('yellow');setcol('yellow');setindice(4);setmostrardesc(true);}} onMouseOut={resetcolor}>Experiencia</Link>
    </nav>

    </div>
    <div className={scrolls ? "tops2" : "tops1"}>
      {mostrardesc ? <Descripcion col={col} indice={indice}/> : <></>}   
    </div>
  </header>
    )
}

export { Header }