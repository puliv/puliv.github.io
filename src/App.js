import React, { useState } from 'react';
import './scss/App.scss';
import openFile from './assets/abierta.png'
import closedFile from './assets/cerrada.png'
import shine from './assets/shine.png'
import boxBottom from './assets/box-bottom.png'
import menu from './assets/menu-icon.png'

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
          {about && <AboutMe handleClick={handleClick} />}
          {skills && <Skills handleClick={handleClick} />}
          {projects && <Projects handleClick={handleClick} />}
          {contact && <Contact handleClick={handleClick} />}
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
          <div className="div-main-home">
            <img src={boxBottom} alt="bottom" />
          </div>
        </div>
        <img src={shine} alt="brillos" className="shine-1" />
        <img src={shine} alt="brillos" className="shine-2" />
      </div>

      <div className="menu">
        <img src={menu} alt="menu" className="menu-icon" />

        <ul>
          <li onClick={() => handleClick("about")}>
            {about ? <img src={openFile} className="open-file" alt="file" /> : <img src={closedFile} className="close-file" alt="file" />}
            <h3>Sobre mí</h3>
          </li>
          <li onClick={() => handleClick("skills")}>
            {skills ? <img src={openFile} className="open-file" alt="file" /> : <img src={closedFile} className="close-file" alt="file" />}
            <h3>Habilidades</h3>
          </li>
          <li onClick={() => handleClick("projects")}>
            {projects ? <img src={openFile} className="open-file" alt="file" /> : <img src={closedFile} className="close-file" alt="file" />}
            <h3>Projectos</h3>
          </li>
          <li onClick={() => handleClick("contact")}>
            {contact ? <img src={openFile} className="open-file" alt="file" /> : <img src={closedFile} className="close-file" alt="file" />}
            <h3>Contacto</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App;
