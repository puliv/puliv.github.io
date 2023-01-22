import React from 'react'
import close from '../images/cancel.png'

const TopBar = (props) => {
  return (
    <div className='top-bar'>
      <img src={close} alt="close" onClick={() => props.handleClick("about")} />
    </div>
  )
}

export default TopBar