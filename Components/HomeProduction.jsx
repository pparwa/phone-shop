import React from 'react'
import './HomeProduction.css'
import { Link } from 'react-router-dom'

export default function HomeProduction({pic,title,text}) {
  return (
    <section className='home-section'>
      
       <div className='details'>
        <h2>{title}</h2>
        <div className='text'>
          {text}
        </div>
        <Link to={'product/668d5a2fb539f1d80efc8260'}  className='buy-link'>Buy now</Link>
       </div>
        <div className="img-box">
        <img src={pic} ></img>
       </div>

    </section>
  )
}
