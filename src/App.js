import React, { useState } from 'react';
import c from 'classnames'

import './scss/App.scss';
import './fonts/Subway-Black.ttf';
import openFile from './images/abierta.png'
import closedFile from './images/cerrada.png'
import shine from './images/shine.png'
import boxBottom from './images/box-bottom.png'
import menu from './images/menu-icon.png'

import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  const [about, setAbout] = useState(false)
  const [skills, setSkills] = useState(false)
  const [projects, setProjects] = useState(false)
  const [contact, setContact] = useState(false)
  const [openMenuMobile, setOpenMenuMobile] = useState(false)

  const handleFiles = (file) => {
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
          {about && <AboutMe handleFiles={handleFiles} />}
          {skills && <Skills handleFiles={handleFiles} />}
          {projects && <Projects handleFiles={handleFiles} />}
          {contact && <Contact handleFiles={handleFiles} />}
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
        <img
          src={menu}
          alt="menu"
          className="menu-icon"
          onClick={() => setOpenMenuMobile(!openMenuMobile)} />
        <ul className={c("file-menu", { active: openMenuMobile })}>
          <li onClick={() => handleFiles("about")} style={{ marginTop: "10px" }}>
            {about ? <img src={openFile} className="open-file" alt="file" /> : <img src={closedFile} className="close-file" alt="file" />}
            <h3>Sobre mí</h3>
          </li>
          <li onClick={() => handleFiles("skills")}>
            {skills ? <img src={openFile} className="open-file" alt="file" /> : <img src={closedFile} className="close-file" alt="file" />}
            <h3>Habilidades</h3>
          </li>
          <li onClick={() => handleFiles("projects")}>
            {projects ? <img src={openFile} className="open-file" alt="file" /> : <img src={closedFile} className="close-file" alt="file" />}
            <h3>Projectos</h3>
          </li>
          <li onClick={() => handleFiles("contact")}>
            {contact ? <img src={openFile} className="open-file" alt="file" /> : <img src={closedFile} className="close-file" alt="file" />}
            <h3>Contacto</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App;

