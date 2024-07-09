import React, { useEffect, useState } from 'react'
import './SingelProduct.css'
import IncreaseBtn from '../Common/IncreaseBtn';
import { useParams } from 'react-router';
import apiClient from '../../Utils/api-client';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export default function SingelProduct({addproduct}) {
    const params = useParams()
    const cartcontext = useContext(CartContext)
    console.log(cartcontext)
    const [SingelProduct , setSingelProduct] = useState()
     let [selected , setselected] = useState(0)
     const [basket,setbasket] = useState(0)
     const handelbasket =(basket)=>{
         setbasket(basket)
     }
    useEffect(()=>{
          
      apiClient.get(`/products/${params.id}`).then(res=>setSingelProduct(res.data))

    },[params.id])
  return (
   <section className='singel-product-container' >
    {SingelProduct && 
    <>
         <div className='image-tumbnails'>
            {
            SingelProduct.images.map((image,index)=>(
                         <img src={`http://localhost:5000/products/${image}`} key={index} 
                         onClick={()=>setselected(index)}
                         className={selected === index ? 'choice' : ''}/>
                ))
            }
         </div>
         <div  className='selected-image'>
                <img src={ `http://localhost:5000/products/${SingelProduct.images[selected]}`} />
         </div>
         <div className='details-singel-product'>
            <h2>{SingelProduct.title}</h2>
            <p >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </p>
            <h3>price</h3>
            <h3>Quantity:</h3>
            <div className='add-btn'>
               <IncreaseBtn basket={basket} handelbasket={handelbasket} cartpage={false} />
            </div>
            <button className='add-product' onClick={()=>cartcontext.ProductHandler(SingelProduct,basket)}>Add Cart</button>
         </div>
</>
        }
   </section>
  )
}
