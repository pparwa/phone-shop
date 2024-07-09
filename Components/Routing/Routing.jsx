import React from 'react'
import SingelProduct from '../SingelProduct/SingelProduct'
import CartPage from '../Cart/CartPage'
import OrderPage from '../OrderPage/OrderPage'
import LoginForm from '../Athuentication/LoginForm'
import Home from '../../Screen/Home'
import ProductPage   from '../../Screen/Products/ProductPage'
import SignupPage from '../Athuentication/SignupPage'
import {Route , Routes} from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
export default function Routing({addproduct , products}) {
  return (
    <Routes>

     <Route path='/'  element={<Home />}  />
     <Route path='/products' element={<ProductPage />}  />
     <Route path='/product/:id' element={<SingelProduct addproduct={addproduct} />} />
     <Route path='/signup' element={<SignupPage />} />
     <Route path='/login' element={<LoginForm />} />
     <Route element={<ProtectedRoute/>}>
     <Route path='/cart' element={<CartPage products={products} />} />
     <Route path='/myorders' element={<OrderPage />} />
     </Route>

    </Routes>
  )
}
