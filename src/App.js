import React, { useState, useEffect, useRef } from 'react';
import c from 'classnames'
import Typed from 'typed.js';

import './scss/App.scss';
import './fonts/Subway-Black.ttf';
import openFile from './images/abierta_alt.png'
import closedFile from './images/cerrada_alt.png'

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

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Hola!^400\nMi nombre es^200\nPaulina,^400\nsoy desarrolladora^200\nFront End.'],
      typeSpeed: 50,
      backSpeed: 50,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    }
  }, [])


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
            <span style={{ whiteSpace: 'pre' }} ref={el} />
          </div>
        </div>
      </div>

      <div className="menu">
        <div
          className={c("menu-toggle", { "on": openMenuMobile })}
          onClick={() => setOpenMenuMobile(!openMenuMobile)}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>

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

