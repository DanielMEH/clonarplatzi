import React from 'react'
import "../css/main.css"
import profiles from "../image/prfiles.webp"
import iconfredy from "../image/iconfredy.webp"
import bitcoins from "../image/badge-economia-digital-bitcoin-5d963c44-cee8-4256-a1de-c70f68ed5520.webp"
import icontiempo from "../image/badge-gestion-tiempo-5368aa24-4418-4e10-b6c3-c8775b849bf9.webp"
import iconenglish from "../image/aprender-ingles-online_badge-8a97002a-7427-4e19-862b-b155e9a57c25.webp"
export const Main = () => {
  return (
   <>
    <div className="main_container">
     <div className="container_main">
     <div className="imagen">
        <img src={profiles}/>

      </div>
      <div className="texto_main">
        <p>Más de 3.000.000 de estudiantes en Colombia, México, Perú, Argentina, Chile y España aprenden en Platzi.</p>

      </div>
     </div>
    </div>
    <div className="hero_content-main">
      <h1 className="title-main">¿Cuál es tu meta profesional?</h1>
      <ul className="list-main_hero">
        <li className="active">
          <button >
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-star" class="svg-inline--fa fa-circle-star fa-w-16 TrendingTabs-icon TrendingTabs-icon--is-active" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM241.7 112.9L205.4 186.4L124.4 198.1C118.3 199 113.3 203.2 111.4 209C109.6 214.8 111.1 221.2 115.5 225.4L174.1 282.6L160.3 363.3C159.3 369.3 161.7 375.4 166.7 378.1C171.6 382.6 178.1 383 183.5 380.2L255.1 342.1L328.5 380.2C333.9 383 340.4 382.6 345.3 378.1C350.3 375.4 352.7 369.3 351.7 363.3L337.9 282.6L396.5 225.4C400.9 221.2 402.4 214.8 400.6 209C398.7 203.2 393.7 199 387.6 198.1L306.6 186.4L270.3 112.9C267.7 107.5 262.1 104 255.1 104C249.9 104 244.3 107.5 241.7 112.9H241.7z"></path></svg>
          Desarrollar nuevas habilidades
          </button>
        </li>
        <li>
          <button>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-trend-up" class="svg-inline--fa fa-arrow-trend-up fa-w-18 TrendingTabs-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M384 160C366.3 160 352 145.7 352 128C352 110.3 366.3 96 384 96H544C561.7 96 576 110.3 576 128V288C576 305.7 561.7 320 544 320C526.3 320 512 305.7 512 288V205.3L342.6 374.6C330.1 387.1 309.9 387.1 297.4 374.6L191.1 269.3L54.63 406.6C42.13 419.1 21.87 419.1 9.372 406.6C-3.124 394.1-3.124 373.9 9.372 361.4L169.4 201.4C181.9 188.9 202.1 188.9 214.6 201.4L320 306.7L466.7 159.1L384 160z"></path></svg>
          Potenciar mis conocimientos

          </button>
        </li>
        <li>
          <button>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="message-lines" class="svg-inline--fa fa-message-lines fa-w-16 TrendingTabs-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM264 288h-112C138.8 288 128 277.3 128 264S138.8 240 152 240h112C277.3 240 288 250.8 288 264S277.3 288 264 288zM360 192h-208C138.8 192 128 181.3 128 168S138.8 144 152 144h208C373.3 144 384 154.8 384 168S373.3 192 360 192z"></path></svg>
          Aprender un nuevo idioma
          </button>

        </li>
      </ul>
      <div className="main-carrusel" >
        <div className="carrusel_content">
          <div className="carrusel_item">

            <a href="http://ww.yutube.com" className="link_c" >
            <article className="carrusel_article">
              <p className="carrusel_popular_green">Popular</p>
            <figure>
              <img  src={iconfredy}/>
              
              </figure>
              <p class="card_text">Curso Gratis de Programación Básica</p>
              <p class="card_b"><b>Desarrollo e Ingeniería</b></p>
              <p class="card_text_content">11 Horas de contenido</p>
            </article>
            </a>
          </div>
          <div className="carrusel_item">

<a href="http://ww.yutube.com">
<article className="carrusel_article image2">
  <p className="carrusel_popular_green purple">Popular</p>
<figure>
  <img  src={iconenglish}/>
  
  </figure>
  <p class="card_text">Curso de Inglés Gratis: Estrategias para Aprender en Línea</p>
  <p class="card_b"><b>English</b></p>
  <p class="card_text_content">2 Horas de contenido</p>
</article>
</a>
</div>
<div className="carrusel_item">

<a href="http://ww.yutube.com">
<article className="carrusel_article image3">
  <p className="carrusel_popular_green pik">Popular</p>
<figure>
  <img  src={icontiempo}/>
  
  </figure>
  <p class="card_text">Curso de Gestión Efectiva del Tiempo</p>
  <p class="card_b"><b>Habilidades Blandas</b></p>
  <p class="card_text_content">3 Horas de contenido</p>
</article>
</a>
</div>
<div className="carrusel_item">

<a href="http://ww.yutube.com">
<article className="carrusel_article image4">
  <p className="carrusel_popular_green gray_green">Popular</p>
<figure>
  <img  src={bitcoins}/>
  
  </figure>
  <p class="card_text">Curso de Economía Digital: Bitcoin y Criptomonedas</p>
  <p class="card_b"><b>Desarrollo e Ingeniería</b></p>
  <p class="card_text_content"> 3 Horas de contenido</p>
</article>
</a>
</div>

        </div>

      </div>
      <h1 className="title-main h">Descubre qué puedes aprender en Platzi</h1>
      <p className="parrafo_text">Cursos efectivos en 21 áreas de estudio más demandadas en el mercado laboral.</p>

    </div>
   
   </>
  )
}
