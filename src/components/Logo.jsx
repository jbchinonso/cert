import React from 'react'
import GLAlogo from '../assets/images/GLALogo.jpeg'
import "../assets/styles/components.css";

function Logo() {
  return (
    <div className='logo'>
      <img src={GLAlogo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Logo