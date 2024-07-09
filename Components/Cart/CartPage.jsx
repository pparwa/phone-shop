import React, { createContext, useEffect, useState } from 'react'
import './CartPage.css'
import user from '../../assets/images/user.webp'
import MyTabel from '../Common/MyTabel'
import IncreaseBtn from '../Common/IncreaseBtn'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { PayPall } from '../../Services/OrderApi'
export default function CartPage({products}) {
  const cartcontext = useContext(CartContext)
  console.log(cartcontext)
  const [total , settoatal] = useState(0)
  useEffect(()=>{
   let subtotal = 0;
   if(products){
cartcontext?.products.forEach(item => {
      if(item.product){
        subtotal += item.product.price * item.quantity
      } 
   });
   settoatal(subtotal)
  }
  },[products])
  function checkout(){
    PayPall().then(res=>{
      toast.success("thank you")
    }).catch((err)=>toast.error('something wrong'))
  }
  return (
    <section className='cart-page-container'>
      <div className='user-container'> 
         <div className='user-profiel'>
            <img src={user} alt="" />
            <div className='info'>
            <p className='user-emai'>parsa</p>
              <p className='user-name'>parsa@gmail.com</p>
              </div>
              </div>
              <MyTabel  header={['Item' , 'Price' ,'Quantiy','Total' , 'Remove']}>
                <tbody>
            {
              cartcontext?.products && products.map((product , index)=>(
                    <tr>

                  <td>{index}</td>
                   <td>{product.product? product.product.title : ''}</td>
                    <td style={{display:'flex',justifyContent:'center',alignItems:"center",gap:'0.5rem'}}><IncreaseBtn basket={product.quantity}
                    cartpage={true} updateproducts={cartcontext.UpdatedProducts} id={product._id}/></td>
                     <td><button onClick={()=>cartcontext.DeleteProduct(product._id)}>delete</button></td>
                      <td>1</td>
                </tr>
              ))
            }


                </tbody>
                
              </MyTabel>
              <table className='tabel-bill'>
                <tbody>
                  <tr>
                  <td>Shoping charg</td>
                  <td>5$</td>
                  </tr>
                    <tr>
                  <td>total</td>
                  <td>{total + 5}$</td>
                  </tr>
                </tbody>
              </table>
              <button className='check-out' onClick={checkout}>Check Out</button>
         </div>


    </section>
  )
}
