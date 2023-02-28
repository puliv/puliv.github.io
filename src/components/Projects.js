import React from 'react'
import popcorn from '../images/popcorn_nights.png'
import taniasilva from '../images/taniasilva.png'
import nasaweb from '../images/nasa_web.png'
import TopBar from './TopBar'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function Projects(props) {
  const handleClick = () => {
    props.handleFiles("projects")
  }

  return (
    <div className="projects">
      <TopBar handleClick={handleClick} />
      <div className="div-main">
        <div className="info">
          <h2>Projectos</h2>
        </div>
        <div className="div-projects">
          {/* desktop */}
          <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
            <div className="project img-nasa" onClick={() => window.open("https://imagenesnasaparavariar.netlify.app/", "_blank")}>
              <img src={nasaweb} alt="nasaWeb" />
              <p className='legend'>Imágenes de la NASA para variar: Sitio Web desarrollado con Vue, donde consumo la API de la NASA y muestro imágenes según la fecha seleccionada.</p>
            </div>
            <div className="project tania-silva" onClick={() => window.open("https://taniasilvatala.netlify.app/", "_blank")}>
              <img src={taniasilva} alt="taniaSilva" />
              <p className='legend'>Portafolio Web desarrollado con Gatsby y Sass para Tania Silva, diseñadora UX.</p>
            </div>
            <div className="project popcorn" onClick={() => window.open("https://puliv.github.io/SCL007-hackathon-peliculas/", "_blank")}>
              <img src={popcorn} alt="popcorn" />
              <p className='legend'>PopCorn Night: Sitio web que recomienda peliculas y comida para acompañar. Proyecto realizado en la primera Hackaton de mi generación.</p>
            </div>
          </Carousel>
          {/* mobile */}
          <div className="project-mobile project">
            <p className='legend'>Imágenes de la NASA para variar: Sitio Web desarrollado con Vue, donde consumo la API de la NASA y muestro imágenes según la fecha seleccionada.</p>
            <img src={nasaweb} alt="nasaWeb" onClick={() => window.open("https://imagenesnasaparavariar.netlify.app/", "_blank")} />
          </div>
          <div className="project-mobile project">
            <p className='legend'>Portafolio Web desarrollado con Gatsby y Sass para Tania Silva, diseñadora UX.</p>
            <img src={taniasilva} alt="taniaSilva" onClick={() => window.open("https://taniasilvatala.netlify.app/", "_blank")} />
          </div>
          <div className="project-mobile project">
            <p className='legend'>PopCorn Night: Sitio web que recomienda peliculas y comida para acompañar. Proyecto realizado en la primera Hackaton de mi generación.</p>
            <img src={popcorn} alt="popcorn" onClick={() => window.open("https://puliv.github.io/SCL007-hackathon-peliculas/", "_blank")} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
