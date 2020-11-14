import React, { useState } from 'react';
import './scss/App.scss';
// import openFile from '../assets/abierta.png'
import closedFile from './assets/cerrada.png'

import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [file, setFile] = useState(null)
  const [img, setImg] = useState(

  )

  return (
    <div className="App">
      <div className="home">
        <div className="files">
          {file === "about" && <AboutMe />}
          {file === "skills" && <Skills />}
          {file === "projects" && <Projects />}
          {file === "contact" && <Contact />}
        </div>
        <div className="box-2">
          <div className="div-top" />
          <div className="div-main">
            <h1>Pulié</h1>
            <h3>FRONT END</h3>
            <h3>DEVELOPER</h3>
          </div>
        </div>
        <div className="box-1">
          <div className="div-top" />
        </div>
      </div>
      <div className="menu">
        <ul>
          <li onClick={() => setFile("about")}>
            <img src={closedFile} alt="file" />
            <h3>Sobre mí</h3>
          </li>
          <li onClick={() => setFile("skills")}>
            <img src={closedFile} alt="file" />
            <h3>Habilidades</h3>
          </li>
          <li onClick={() => setFile("projects")}>
            <img src={closedFile} alt="file" />
            <h3>Projectos</h3>
          </li>
          <li onClick={() => setFile("contact")}>
            <img src={closedFile} alt="file" />
            <h3>Contacto</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App;
