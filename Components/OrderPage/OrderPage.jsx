import React, { useEffect, useState } from 'react'
import MyTabel from '../Common/MyTabel'
import './OrderPage.css'
import { GetOrder } from '../../Services/OrderApi'
export default function OrderPage() {
  const [myorders, setorders] = useState([])
  useEffect(()=>{
    GetOrder().then(res=>setorders(res.data))
  },[])
  console.log(myorders)
  return (
    <section className='order-page-container'>
<MyTabel header={["order","products","total","status"]}>
{myorders && myorders.map((order,index)=>(
      <tr>

                  <td>{index}</td>
                   <td></td>
                   <td>{order.total}</td>
                  <td>{order.status}</td>
                     
                </tr>
))}
</MyTabel>
    </section>
  )
}
