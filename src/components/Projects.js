import React from 'react'
import close from '../assets/cancel.png'
import popcorn from '../assets/popcorn_nights.png'
import taniasilva from '../assets/taniasilva.png'


function Projects(props) {
  return (
    <div className="projects">
      <div className="div-top">
        <img src={close} alt="close" onClick={() => props.handleFiles("projects")} />
      </div>
      <div className="div-main">
        <div className="info">
          <h2>Projectos</h2>
        </div>
        <div className="div-projects">
          <div className="tania-silva" onClick={() => window.open("https://taniasilvatala.netlify.app/", "_blank")}>
            <div className="projects-img">
              <p>Portafolio Web para Tania Silva, diseñadora UX; desarrollado con Gatsby y Sass.</p>
              <img src={taniasilva} alt="taniaSilva" />
              <span>Portafolio Tania Silva</span>
            </div>
          </div>
          <div className="popcorn" onClick={() => window.open("https://puliv.github.io/SCL007-hackathon-peliculas/", "_blank")}>
            <div className="projects-img">
              <p>Sitio web que recomienda peliculas y comida para acompañar. Proyecto realizado en la primera Hackaton de mi generación.</p>
              <img src={popcorn} alt="popcorn" />
              <span>PopCorn Night</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
