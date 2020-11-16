import React from 'react'
import close from '../assets/cancel.png'
import {
  Gmail,
  Github,
  Linkedin,
  Behance
} from '@icons-pack/react-simple-icons';

function Contact() {
  return (
    <div className="contact">
      <div className="div-top">
        <img src={close} alt="close" />
      </div>
      <div className="div-main">
        <div className="info">
          <h2>Contacto</h2>
          <span>Si tienes una idea, no dudes en contactarme, responderé lo antes posible, gracias por tu interés.</span>
          <ul>
            <li>
              <Gmail color="#000" size={30} />
              <span>Gmail</span>
            </li>
            <li>
              <Linkedin color="#000" size={30} />
              <span>LinkedIn</span>
            </li>
            <li>
              <Github color="#000" size={30} />
              <span>GitHub</span>
            </li>
            <li>
              <Behance color="#000" size={30} />
              <span>BeHance</span>
            </li>
          </ul>
        </div>
        <div className="img"></div>
      </div>
    </div>
  )
}

export default Contact
