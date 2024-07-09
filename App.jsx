
import './App.css'
import Navbar from './Components/Navbar'
import Routing from './Components/Routing/Routing'
import { useEffect } from 'react'
import { useState } from 'react'
import { jwtDecode } from "jwt-decode";
import setAuth from './Utils/setAuth'
import { AddCart, GetCart } from './Services/CartApi'
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from './contexts/CartContext'
import { RemoveCart } from './Services/CartApi'

setAuth(localStorage.getItem("token"))
function App() {

 const [user , setuser] = useState(null)
  const [products , setproducts] = useState([])
  useEffect(()=>{
  try{
   const token =  localStorage.getItem("token")
   const currentUser =   jwtDecode(token);
   setuser(currentUser)
  }catch(err){

  }
  },[])
  const getcart =()=>{
    GetCart().then(res=>{
      console.log(res.data)
     setproducts(res.data)
    })
  }
  useEffect(()=>{
  if(user){
    getcart()
  }
  },[user])
    const ProductHandler = (product, quantity) => {

    let updateBasket = [...products];
    let isProduct = updateBasket.findIndex(basketproduct => {
      return basketproduct._id === product._id;
    });

    if (isProduct === -1) {
      updateBasket.push({ product, quantity });
      setproducts(updateBasket);
    } else {
      updateBasket[isProduct].quantity += quantity;
      setproducts(updateBasket);
    }

   console.log(product._id)
    AddCart(product._id, quantity).then(res => {
    toast.success("produt added to basket")
    })

 
};
const DeleteProduct=async (id)=>{
  const newproducts = [...products]
  RemoveCart(id).then(res=>console.log(res))
 

 const update = newproducts.filter(product=>{
  
     if(product._id != id){
        return product
     }
     
    }
  )
 
 setproducts(update)

 
}
const UpdatedProducts = (type , id)=>{
console.log('click')
  let updated= [...products]
  console.log(updated)
 if(type == 'increase'){
 updated.forEach(product=>{
  if(product._id == id){
    product.quantity +=1
  } 
})

  setproducts(updated)
}else{
  updated.forEach(product=>{
    if(product._id === id){
     product.quantity -=1
    }
  })
  setproducts(updated)
}
}

  return (
    <>
      <div className='app'> 
    <CartContext.Provider  value={{products,ProductHandler,DeleteProduct,UpdatedProducts}} >
        <Navbar user={user}  productcount={products.length}></Navbar>
     {/*<Home /> */}   
   {/*   <AllRouting></AllRouting> */}
 {/*  <ProductPage />          */} 
 {/*  <SingelProduct /> */}    
 {/* <CartPage />  */}

   {/*  <OrderPage />    */}
   {/*<LoginForm />  */}
 {/*  <SignupPage /> */}
<ToastContainer/>
 <Routing addproduct={ProductHandler}  products={products}/>
</CartContext.Provider>
</div>
    </>
  )
}

export default App
