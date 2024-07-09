import React from 'react'
import './Pagination.css'
export default function Pagination({totalproducts,perproducts,handelpage}) {
   
    
    let pages = []

    for(let i =0 ; i < Math.ceil(totalproducts/perproducts);i++){
        pages.push(i)
    }
    console.log(pages)
  return (
    <div className='button-container'>
     {pages && pages.map((page,index)=>(
        <button key={index} onClick={()=>handelpage(page)}>{page}</button>
     ))}
    </div>
  )
}

