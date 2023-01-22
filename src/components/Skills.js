import React from 'react'
import {
  ReactJs,
  Jquery,
  Html5,
  Css3,
  Javascript,
  Git,
  Github,
  Adobeillustrator,
  Adobephotoshop,
  Sass,
  VueDotJs
} from '@icons-pack/react-simple-icons';
import TopBar from '../components/TopBar'

function Skills(props) {
  const handleClick = () => {
    props.handleFiles("skills")
  }
  return (
    <div className="skills">
      <TopBar handleClick={handleClick} />
      <div className="div-main">
        <div className="info">
          <h2>Habilidades</h2>
          <span>He trabajado principalmente con Vue, React y Jquery, pero también tengo experiencia desarrollando con Vanilla JavaScript, HTML y CSS. Ocupo Git y GitHub para manejar el versionamiento de mi código y tanto Illustrator como Photoshop los uso para proyectos personales que puedes ver en mi <a href="https://www.behance.net/pulie" target="_blank"
            rel="noopener noreferrer">Behance</a>.</span>
        </div>
        <div className="icons">
          <div className="div-icons">
            <div>
              <ReactJs color="#000" size={60} />
              <span>ReactJs</span>
            </div>
            <div>
              <Jquery color="#000" size={60} />
              <span>Jquery</span>
            </div>
            <div>
              <VueDotJs color="#000" size={60} />
              <span>VueDotJs</span>
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
        <div className="icons-medium">
          <div className="top">
            <div>
              <ReactJs color="#000" size={50} />
              <span>ReactJs</span>
            </div>
            <div>
              <Jquery color="#000" size={50} />
              <span>Jquery</span>
            </div>
            <div>
              <VueDotJs color="#000" size={50} />
              <span>VueDotJs</span>
            </div>
            <div>
              <Sass color="#000" size={50} />
              <span>Sass</span>
            </div>
            <div>
              <Git color="#000" size={50} />
              <span>Git</span>
            </div>
            <div>
              <Github color="#000" size={50} />
              <span>GitHub</span>
            </div>
          </div>

          <div className="bottom">
            <div>
              <Html5 color="#000" size={50} />
              <span>Html5</span>
            </div>
            <div>
              <Javascript color="#000" size={50} />
              <span>Javascript</span>
            </div>
            <div>
              <Css3 color="#000" size={50} />
              <span>Css3</span>
            </div>
            <div>
              <Adobeillustrator color="#000" size={50} />
              <span>Illustrator</span>
            </div>
            <div>
              <Adobephotoshop color="#000" size={50} />
              <span>Photoshop</span>
            </div>
          </div>
        </div>
        <div className="icons-mobile">
          <div className="top-mobile">
            <div>
              <ReactJs color="#000" size={50} />
              <span>ReactJs</span>
            </div>
            <div>
              <Jquery color="#000" size={50} />
              <span>Jquery</span>
            </div>
            <div>
              <VueDotJs color="#000" size={50} />
              <span>VueDotJs</span>
            </div>
            <div>
              <Sass color="#000" size={50} />
              <span>Sass</span>
            </div>
          </div>
          <div className="center-mobile">
            <div>
              <Html5 color="#000" size={50} />
              <span>Html5</span>
            </div>
            <div>
              <Javascript color="#000" size={50} />
              <span>Javascript</span>
            </div>
            <div>
              <Css3 color="#000" size={50} />
              <span>Css3</span>
            </div>
          </div>
          <div className="bottom-mobile">
            <div>
              <Git color="#000" size={50} />
              <span>Git</span>
            </div>
            <div>
              <Github color="#000" size={50} />
              <span>GitHub</span>
            </div>
            <div>
              <Adobeillustrator color="#000" size={50} />
              <span>Illustrator</span>
            </div>
            <div>
              <Adobephotoshop color="#000" size={50} />
              <span>Photoshop</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Skills
