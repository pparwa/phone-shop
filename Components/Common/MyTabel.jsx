import React from 'react'
import './MyTabel.css'
export default function MyTabel({header ,children} ) {
  return (
    <table className='cart-tabel-container'>
        <thead>
            {
                header.map((item , index)=> <th key={index}>{item}</th>)
            }
        </thead>
      {
        children
      }
    </table>
  )
}
