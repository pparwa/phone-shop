import React, { useEffect, useState } from 'react'
import iphone from '../../assets/images/iphone.jpg';
import ProductCard from '../../Components/ProductCard';
import apiClient from '../../Utils/api-client';
import './ProductsList.css'
import ProductLoadung from './ProductLoadung';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../Components/Common/Pagination';
export default function ProductsList() {
 let [totalproducts , settotalproducts] = useState(null)
 let [search , setsearch]  = useSearchParams()
 let [sortBy, setsortBy] = useState('')
 let [sortedProducts , setsortedProducts] = useState([])

    const category = search.get('category')
    const page = search.get('page')
    const searchproduct = search.get('search')
    console.log(searchproduct)
  let [products , setproducts] = useState([])
  let [loading , setloading] = useState(true)
   let waites = [1,2,3,4,5,6,7,8,9,10]

   const handelpage = (page)=>{
    console.log(page)
     const searchparams = Object.fromEntries([...search])
          setsearch({...searchparams,page:page})
   }
  useEffect(()=>{
    setloading(true)
   apiClient.get('/products',{params:{
   search:searchproduct,
    category,
    page
   }}).then(res=>
    {
    setloading(false)
     settotalproducts(res.data.totalProducts)
    setproducts(res.data.products)
    
  })
  },category || page || searchproduct ? [category,page,searchproduct]: [])
  useEffect(()=>{
    console.log(sortBy)
    console.log('hello')
    if(sortBy == 'price desc')
    {
      setsortedProducts(products.sort((a , b)=>b.price - a.price))
    }
    else if('price asc'){
       setsortedProducts(products.sort((a , b)=>a.price - b.price))
    }
    else if('rate desc'){
       setsortedProducts(products.sort((a , b)=>b.reviews.rate - a.reviews.rate))
    }
    else if('rate asc'){
       setsortedProducts(products.sort((a , b)=>b.reviews.rate - a.reviews.rate))
    }
    else{
      setproducts(products)
    }
},[sortedProducts , sortBy])
  return (
    <>   
<div>
  <div className='product-list-header'>
    <h2>products</h2>
    <select value={sortBy} onChange={(e)=>setsortBy(e.target.value)}>
  <option value=" ">Relevance</option>
  <option value='price desc'>Price To Low</option>
  <option value='price asc'>Price To High</option>
  <option value='rate desc'>Rate To Low</option>
  <option value='rate asc'>Rate To High</option>
</select>
  </div>
    <div className='list-container'  >
      {
       loading ? waites.map((wait)=>(
        <ProductLoadung />
       )):''
        
      }
   {sortedProducts &&sortedProducts.map(product=>(
    <ProductCard key={product._id} product={product} />
   ))}
    </div>
    <Pagination totalproducts={totalproducts} perproducts={8} handelpage={handelpage}/>
    </div>
    </>

  )
}
