import React, { createRef } from 'react'
import aboutme from '../assets/about-me.png'
import vikingas from '../assets/vikingas.png'
import metro from '../assets/metro.jpg'
import close from '../assets/cancel.png'
import down from '../assets/down-arrow.png'


function AboutMe(props) {
  const secondDivRef = createRef();

  const handleScroll = ref => {
    const elem = ref.current
    elem.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="about-me">
      <div className="div-top">
        <img src={close} alt="close" onClick={() => props.handleFiles("about")} />
      </div>
      <div className="div-main">
        <div className="first">
          <div className="img">
            <img src={aboutme} alt="me" />
          </div>
          <div className="info">
            <h2>Sobre Mí</h2>
            <span>Hola! Mi nombre es Paulina Vera, todos me conocen como Pulié, vivo en Santiago de Chile, soy una entusiasta del Diseño, siempre en búsqueda de nuevos conocimientos y experiencias, me fascina el mundo de la tecnología, y el impacto que tiene en las personas. Por eso me gusta crear obras que transmitan una idea y que contribuyan a la vida de los usuarios de forma creativa e innovadora.</span>
            <img src={down} alt="abajo" onClick={() => handleScroll(secondDivRef)} />
          </div>
        </div>
        <div className="second" ref={secondDivRef}>
          <div className="info">
            <span>Soy egresada de la séptima generación de <a href="https://www.laboratoria.la/" target="_blank"
              rel="noopener noreferrer">Laboratoria</a>, un bootcamp intensivo de programación donde además de aprender desarrollo web, nos entregaron un montón de herramientas para trabajar en equipo, y para crecer tanto profesional como personalmente. Sin duda, una experiencia que cambio mi vida.
            </span>
          </div>
          <div className="img">
            <img src={vikingas} alt="vikingas" />
          </div>
        </div>
        <div className="third">
          <div className="img">
            <img src={metro} alt="rollerderby" />
          </div>
          <div className="info">
            <span>Y cuando no estoy codeando salgo a patinar con mis amigas ♥ también dedico gran parte de mi tiempo libre a aprender nuevas formas de expresar mis ideas y a ilustrar todo lo que me inspire, si te interesa ver más sobre esto puedes visitar mi perfil en <a href="https://www.behance.net/pulie" target="_blank"
              rel="noopener noreferrer">Behance</a>.
            </span>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AboutMe
