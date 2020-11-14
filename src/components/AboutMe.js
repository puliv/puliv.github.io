import React from 'react'
import aboutme from '../assets/about-me.png'
import vikingas from '../assets/vikingas.png'

function AboutMe() {
  return (
    <div className="about-me">
      <div className="div-top" />
      <div className="div-main">
        <div className="first">
          <div className="img">
            <img src={aboutme} alt="me" />
          </div>
          <div className="info">
            <h2>Sobre Mi</h2>
            <span>Hola! Mi nombre es Paulina, pero todos me conocen como Pulié, soy una entusiasta del Diseño, siempre en búsqueda de nuevos conocimientos y experiencias, me fascina el mundo de la tecnología, y el impacto que tiene en las personas. Por eso me gusta crear cosas que transmitan una idea y que contribuyan a la vida de los usuarios de forma creativa e innovadora.</span>
          </div>
        </div>
        <div className="second">
          <div className="info">
            <span> Soy egresada de la séptima generación de <a href="https://www.laboratoria.la/" target="_blank"
              rel="noopener noreferrer"
              className="about-me-a">Laboratoria</a>, un bootcamp intensivo de programación donde además de aprender desarrollo web, nos entregaron un montón de herramientas para trabajar en equipo, y para crecer tanto profesional como personalmente. Sin duda una experiencia que cambio mi vida.
            </span>
          </div>
          <div className="img">
            <img src={vikingas} alt="vikingas" />
          </div>
        </div>
        <div className="third">
          <div className="img">
          </div>
          <div className="info">
            <span>parrafo</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
