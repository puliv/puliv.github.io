import React from 'react'
import close from '../assets/cancel.png'
import {
  ReactJs,
  Redux,
  Html5,
  Css3,
  Javascript,
  Gatsby,
  Git,
  Github,
  Adobeillustrator,
  Adobephotoshop,
  Sass
} from '@icons-pack/react-simple-icons';

function Skills(props) {
  return (
    <div className="skills">
      <div className="div-top">
        <img src={close} alt="close" onClick={() => props.handleClick("skills")} />
      </div>
      <div className="div-main">
        <div className="info">
          <h2>Habilidades</h2>
          <span>He trabajado principalmente con React JS y Redux, pero también tengo experiencia desarrollando con JavaScript, HTML y CSS. Ocupo Git y GitHub para manejar el versionamiento de mi código y tanto Adobe Illustrator como Photoshop los uso en gran parte para proyectos personales y trabajos de ilustración.</span>
        </div>
        <div className="icons">
          <div className="div-icons">
            <div>
              <ReactJs color="#000" size={60} />
              <span>ReactJs</span>
            </div>
            <div>
              <Redux color="#000" size={60} />
              <span>Redux</span>
            </div>
            <div>
              <Gatsby color="#000" size={60} />
              <span>Gatsby</span>
            </div>
            <div>
              <Sass color="#000" size={60} />
              <span>Sass</span>
            </div>
          </div>
          <div className="div-icons">
            <div>
              <Git color="#000" size={60} />
              <span>Git</span>
            </div>
            <div>
              <Github color="#000" size={60} />
              <span>GitHub</span>
            </div>
          </div>
          <div className="div-icons">
            <div>
              <Html5 color="#000" size={60} />
              <span>Html5</span>
            </div>
            <div>
              <Javascript color="#000" size={60} />
              <span>Javascript</span>
            </div>
            <div>
              <Css3 color="#000" size={60} />
              <span>Css3</span>
            </div>
          </div>
          <div className="div-icons">
            <div>
              <Adobeillustrator color="#000" size={60} />
              <span>Illustrator</span>
            </div>
            <div>
              <Adobephotoshop color="#000" size={60} />
              <span>Photoshop</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Skills
