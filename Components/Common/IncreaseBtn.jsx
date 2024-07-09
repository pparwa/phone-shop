import React from 'react'
import './IncreaseBtn.css'
export default function IncreaseBtn({basket ,handelbasket,cartpage,updateproducts,id}) {

   console.log(basket)
   console.log(cartpage)
  return (
   
   <>
    <button className='increase' onClick={cartpage?()=>updateproducts('increase',id):()=>handelbasket(basket + 1)}>+</button>
                <p>{basket}</p>
     <button className='increase'  onClick={cartpage?()=>updateproducts('decrease',id):()=>handelbasket(basket - 1)} disabled={basket == 0 ?true:false}>-</button>
   </>
  )
}
