import React, { useState } from 'react';
import './scss/App.scss';
import openFile from './assets/abierta.png'
import closedFile from './assets/cerrada.png'

import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  const [about, setAbout] = useState(false)
  const [skills, setSkills] = useState(false)
  const [projects, setProjects] = useState(false)
  const [contact, setContact] = useState(false)

  const handleClick = (file) => {
    switch (file) {
      case "about":
        setAbout(!about)
        setSkills(false)
        setProjects(false)
        setContact(false)
        break;
      case "skills":
        setAbout(false)
        setSkills(!skills)
        setProjects(false)
        setContact(false)
        break;
      case "projects":
        setAbout(false)
        setSkills(false)
        setProjects(!projects)
        setContact(false)
        break;
      case "contact":
        setAbout(false)
        setSkills(false)
        setProjects(false)
        setContact(!contact)
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div className="home">
        <div className="files">
          {about && <AboutMe />}
          {skills && <Skills />}
          {projects && <Projects />}
          {contact && <Contact />}
        </div>
        <div className="box-2">
          <div className="div-top-home" />
          <div className="div-main">
            <h1>Pulié</h1>
            <h3>FRONT END</h3>
            <h3>DEVELOPER</h3>
          </div>
        </div>
        <div className="box-1">
          <div className="div-top-home" />
        </div>
      </div>
      <div className="menu">
        <ul>
          <li onClick={() => handleClick("about")}>
            <img src={about ? openFile : closedFile} alt="file" />
            <h3>Sobre mí</h3>
          </li>
          <li onClick={() => handleClick("skills")}>
            <img src={skills ? openFile : closedFile} alt="file" />
            <h3>Habilidades</h3>
          </li>
          <li onClick={() => handleClick("projects")}>
            <img src={projects ? openFile : closedFile} alt="file" />
            <h3>Projectos</h3>
          </li>
          <li onClick={() => handleClick("contact")}>
            <img src={contact ? openFile : closedFile} alt="file" />
            <h3>Contacto</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App;
