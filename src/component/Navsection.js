import React from 'react'
import logo from './img/brand_logo.png'


export default function Navsection() {
  return (
    <div>
      <nav className='container'>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li href="">MENU</li>
            <li href="">LOCATION</li>
            <li href="">ABOUT</li>
            <li href=""> CONTACT</li>
          </ul>
          <button className="login">Login</button>
      </nav>
    </div>
  )
}
