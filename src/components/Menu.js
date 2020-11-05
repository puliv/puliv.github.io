import React, { Component } from 'react'
// import openFile from '../assets/abierta.png'
import closedFile from '../assets/cerrada.png'

export class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <ul>
          <li>
            <img src={closedFile} alt="file" />
            <h3>Sobre mí</h3>
          </li>
          <li>
            <img src={closedFile} alt="file" />
            <h3>Habilidades</h3>
          </li>
          <li>
            <img src={closedFile} alt="file" />
            <h3>Projectos</h3>
          </li>
          <li>
            <img src={closedFile} alt="file" />
            <h3>Contacto</h3>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu
