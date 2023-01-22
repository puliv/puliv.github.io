import React from 'react'
import {
  Gmail,
  Github,
  Linkedin,
  Behance
} from '@icons-pack/react-simple-icons';
import contact from '../images/contact.png'
import TopBar from './TopBar';

function Contact(props) {
  const handleClick = () => {
    props.handleFiles("contact")
  }

  return (
    <div className="contact">
      <TopBar handleClick={handleClick} />
      <div className="div-main">
        <div className="info">
          <h2>Contacto</h2>
          <span>Si tienes una idea y quieres trabajar conmigo, no dudes en contactarme, responderé lo antes posible, gracias por tu interés.</span>
          <ul>
            <li>
              <Gmail color="#000" size={40} />
              <span>
                <a href="mailto:pverapavez@gmail.com">
                  Gmail
                </a>
              </span>
            </li>
            <li>
              <Linkedin color="#000" size={40} />
              <span>
                <a href="https://www.linkedin.com/in/pulie/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </span>
            </li>
            <li>
              <Github color="#000" size={40} />
              <span>
                <a href="https://github.com/puliv" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </span>
            </li>
            <li>
              <Behance color="#000" size={40} />
              <span>
                <a href="https://www.behance.net/pulie" target="_blank" rel="noopener noreferrer">
                  Behance
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="img">
          <img src={contact} alt="contactImg" />
        </div>
      </div>
    </div>
  )
}

export default Contact
