import React from 'react'
import './ProductCard.css'
import {NavLink} from 'react-router-dom'
import start from '../assets/images/white-star.png'
import basket from '../assets/images/basket.png'
export default function ProductCard({product}) {
  return (
    <article className='product-container'>
         <div className='product-img-box'>
            <NavLink to={`/product/${product._id}`}>
                <img src={`http://localhost:5000/products/${product.images[0]}`} alt="" />
            </NavLink>

         </div>
         <div className='product-details'>
            <p>{product.price}$</p>
            <p>{product.title}</p>
            <div className='basket'>
                <div className='rating'>
                    <img src={start} alt="" />
                    <span>{product.reviews.rate}</span>
                   
                </div>
                {product.stock > 0  && <button>  <img src={basket}  /></button>}
               
            </div>
         </div>
        
    </article>
  )
}
