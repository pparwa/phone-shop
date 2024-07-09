import React, { useEffect, useState } from 'react'
import './ProductSideBar.css'
import rocket from "../../assets/images/rocket.png"
import DNavLink from '../../Components/DNavLink'
import apiClient from '../../Utils/api-client'
export default function ProductSidebar() {
     let [categories , setcategories] = useState([])

     useEffect(()=>{
          apiClient.get('/category').then(res=>setcategories(res.data))
     },[])
  return (
  
    <aside>
    <h2>Category</h2>    
     {categories && categories.map(category=>(
          <DNavLink  
          icon={`http://localhost:5000/category/${category.image}`}
           text={category.name}
           link={`/products?category=${category.name}`}
           />
         
     ))}
    </aside>
  )
}
