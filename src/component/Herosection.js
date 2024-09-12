import React from 'react'
import shoe from './img/shoe_image.png'
import flipkart from "./img/flipkart.png"
import amazon from "./img/amazon.png"
import './Herosection.css'
function Herosection() {
  return (
    <main className="hero container">
        <div className="hero__container">
    <h1>YOUR FEET DESERVE THE BEST</h1>
    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <button className='btnred'>Shop Now</button>
        <button className='btnnon'>order now</button>
        <div className='shopsite'>
            
            <p className=''>Also Available On</p>
            <img src={flipkart} alt="" className='flipkart'/>
            <img src= {amazon}alt="" className='amazon'/>
            
        </div>
        </div>
        <div className="hero-image">
            <img src={shoe} alt="shoe" className='shoepng'/>
        </div>

       
    </main>
    
  )
}

export default Herosection
