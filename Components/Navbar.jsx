import React, { useEffect, useState } from 'react'
import './NavBar.css'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { getSugesstion } from '../Services/ProductServices'
export default function Navbar({user,productcount}) {
  const [search , setsearch] = useState('')
  const [suggestion , setsuggestion] = useState([])
  const navigate = useNavigate()
  const handelsearch= (e)=>{
    e.preventDefault()
    navigate(`/products?search=${search}`)
    
  }
  useEffect(()=>{
    if(search.trim() !== "")
   getSugesstion(search).then(res=>setsuggestion(res.data)).catch(err=>console.log(err))

  },[search])
  return (
    <div className='navbar'>
        <div className='search-box'>
          <h1>Elec-shop</h1>
          <form>
            <div className='search-input'>
            <input type='text' placeholder='search here' 
            value={search}
            onChange={(e)=>setsearch(e.target.value)}></input>
            <button onClick={(e)=>handelsearch(e)}>search</button>
            </div>
            <ul className='search-list'>
             {(suggestion && search) && suggestion.map(suggest=>(
             
              <Link  to={`/products?suggestion=${suggest.title}`} className='search-item'
              onClick={()=>{
                setsearch(''),
                setsuggestion([])
              }}>{suggest.title}</Link>
             
             ))}
            </ul>
          </form>
        </div>
        <div className='nav-options'>
            <ul>
                <li>
<NavLink className='nav-link' to='/'>
     <p>Home</p>     
     <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/rocket.png" NavLinklt="rocket"/>         
</NavLink >
                </li>
                <li>
                    <NavLink className='nav-link' to='/products'>                 
                   <p>Products</p>   
                   <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/star--v1.png" alt="star--v1"/> 
                    </NavLink>

                    </li>
                <li>
                     <NavLink className='nav-link' to='/login'> 
                     <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/id-verified.png" alt="id-verified"/>                
                   <p>Login</p>    
                    </NavLink>

                </li>
                <li>
                  <NavLink className='nav-link' to='/signup'>  
                  <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/add-user-male.png" alt="add-user-male"/>               
                   <p>SignUp</p>    
                    </NavLink>

                </li>
                 <li>
                  <NavLink className='nav-link' to='/myorders'>  
                 <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/shopping-basket-2.png" alt="shopping-basket-2"/>               
                   <p>Myorders</p>    
                    </NavLink>

                </li>
              {user && <>
                <li onClick={()=>{localStorage.removeItem("token")
              window.location = '/'}}>
                    <NavLink className='nav-link' to='/#'>                 
                   <p>LogOut</p>    
                    </NavLink>

                </li>
                <li>
                      <NavLink className='nav-link' to='/cart'>                 
                   <p>card</p>
                   <span>{productcount}</span>    
                    </NavLink>

                </li>
                </>
}
            </ul>

        </div>
    </div>
  )
}
