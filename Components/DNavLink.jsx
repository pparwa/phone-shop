import React from 'react'
import './DNavLink.css'
import {NavLink} from 'react-router-dom'
export default function DNavLink({text , icon,link}) {
  return (
    <NavLink to={`${link}`} className='nav-link'>
        <img src={icon} alt="" />
        <p>{text}</p>
    </NavLink>
  )
}
