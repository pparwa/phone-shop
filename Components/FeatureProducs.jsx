import React, { useEffect, useState } from 'react'
import './FeatureProducts.css'
import ProductCard from './ProductCard'
import iphone from '../assets/images/iphone.jpg'
import apiClient from '../Utils/api-client'

const getFeatureproducts = async(featureproducts , setfeatureproducts)=>{
 const res = await apiClient.get("products/featured")
   setfeatureproducts(res.data)
   
}
export default function FeatureProducs() {
  const [featureproducts , setfeatureproducts] = useState([])
  useEffect(()=>{
    getFeatureproducts(featureproducts , setfeatureproducts)
  },[])
  console.log(featureproducts)
  
  return (
    
    <section className='Feature-container' >
        <h2>FeatureProducts</h2>
        <div className='products-container'>
          {featureproducts && featureproducts.map((product)=>(
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
    </section>
  )
}
