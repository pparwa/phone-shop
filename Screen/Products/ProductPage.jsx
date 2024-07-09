

import React from 'react'
import ProductSidebar from './ProductSidebar'
import './ProductPage.css'
import ProductsList from './ProductsList'
export default function ProductPage() {
  return (
   <section className='product-page-container'>
    <ProductSidebar />
     <ProductsList />
   </section>
  )
}
