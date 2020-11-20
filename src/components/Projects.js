import React from 'react'
import close from '../assets/cancel.png'
import popcorn from '../assets/popcorn_nights.png'
import taniasilva from '../assets/taniasilva.png'


function Projects() {
  return (
    <div className="projects">
      <div className="div-top">
        <img src={close} alt="close" />
      </div>
      <div className="div-main">
        <div className="info">
          <h2>Projectos</h2>
        </div>
        <div className="div-projects">
          <div className="tania-silva" onClick={() => window.open("https://taniasilvatala.netlify.app/", "_blank")}>
            <div>
              <img src={taniasilva} alt="taniaSilva" />
            </div>
            <div>
              <span>Portafolio Tania Silva</span>
            </div>
          </div>
          <div className="popcorn" onClick={() => window.open("https://puliv.github.io/SCL007-hackathon-peliculas/", "_blank")}>
            <div>
              <img src={popcorn} alt="popcorn" />
            </div>
            <div>
              <span>Popcorn Night</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
