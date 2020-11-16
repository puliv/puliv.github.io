import React from 'react'
import close from '../assets/cancel.png'


function Skills() {
  return (
    <div className="skills">
      <div className="div-top">
        <img src={close} alt="close" />
      </div>
      <div className="div-main">
        <div className="info">
          <h2>Habilidades</h2>
          <span>He trabajado principalmente con React JS y Redux, pero también tengo experiencia desarrollando con JavaScript, HTML y CSS. Ocupo Git y GitHub para manejar el versionamiento de mi código y tanto Adobe Illustrator como Photoshop lo uso en su mayoría para proyectos personales.
              </span>
        </div>
        <div className="img">
          {/* <img src={aboutme} alt="me" /> */}
        </div>
      </div>
    </div >
  )
}

export default Skills
