import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faCheck } from '@fortawesome/free-solid-svg-icons'
import "../css/header.css"
import logo from "../image/logop.webp"
import heroImagen from "../image/heromenu.webp"
export const Header = () => {
  return (
    <>
    <header className="container">
        <div className="logo_title">
            <div className="logo">
                <img src={logo} className=""/>
            </div>
            <div className="title">
                Platzi
            </div>

        </div>
        <div className="container_hero ">
          <form method="Get" action="/" className="container_form">
           <div className="form_search">
           <button className="button"><FontAwesomeIcon icon={faSearch}/></button>
            <input type="search" name="search" id="search" className="search"
            autocomplete="off" placeholder="¿Qué quieres aprender?"/>
           </div>

          </form>
          <div className="container_nav">
            <nav className="nav">
           
             <ul className="nav_menu">
                <li><a href="/" className="nav_link" target="_blank" data-l="2">Cursos</a></li>
                <li><a href="/" className="nav_link" target="_blank" data-l="3">Blog</a></li>
                <li><a href="/" className="nav_link" target="_blank" data-l="4">Foro</a></li>
                <li><a href="/" className="nav_link" target="_blank" data-l="5">Agenda</a></li>
                <li><a href="/" className="nav_link" target="_blank" data-l="1">TV</a></li>
                <li><a href="/" className="nav_link" target="_blank" data-l="6">Planes</a></li>
                <li><a href="/" className="nav_link" target="_blank" data-l="7">Contáctanos</a></li>
              </ul>
        

            </nav>

          </div>
            <div className="nav_cuentas">
              <a href="/" className="nav_empresa" target="_blank" data-t="8">Empresas</a>
              <a href="/" className="nav_cuenta" target="_blank" data-t="8">Iniciar sesión</a>

            </div>

        </div>


    </header>
    <div className="container__hv">
     <div className="container_hero_menu">
     <div className="hero_container">
        <h1 className="container-title-hero">Adquiere las habilidades para trabajar en tecnología</h1>
        <h2>Aprende desde cero o especialízate en las áreas más demandadas del trabajo digital: programación, blockchain, marketing digital, inglés. Todos los cursos en una sola suscripción.</h2>
        <ul className="hero_list">
          <li>
          <FontAwesomeIcon icon={faCheck} className="iconfinder"/>
            A tu ritmo
          </li>
          <li>
          <FontAwesomeIcon icon={faCheck} className="iconfinder"/>
            En linea
          </li>
          <li>
          <FontAwesomeIcon icon={faCheck} className="iconfinder"/>
            En  tu idioma
          </li>
        </ul>

      <div className="link_hero">
      <a href="#" className=""> crea una cuenta</a>
      </div>
      </div>
      <div className="hero__imagen">
        <img src={heroImagen} />
      </div>
     </div>
    </div>

    </>
  )
}
