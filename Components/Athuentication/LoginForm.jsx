import React, { useRef } from 'react'
import './LoginForm.css'
import { useForm} from 'react-hook-form'
import { SignIn } from '../../Services'
import { useNavigate } from 'react-router'

export default function LoginForm() {
    let PasswordRef = useRef(null)
    const {register , handleSubmit} = useForm()
    const navigate = useNavigate()
const MySubmit = async(values)=>{
  try{
    const {data} = await SignIn(values)
    localStorage.setItem("token",data.token)
    //navigate('/')
    window.location = "/"

  }catch(err){
    console.log(err)
  }
}
  return (
  <section className='login-form-container'>
    <form className='login-form-box' onSubmit={handleSubmit(MySubmit)}>
         <h2>Login Form</h2>

         <div>
            <label htmlFor='name'>
              Email
            </label>
            <input type="text" id='name' {...register("email")}  />
         </div>
         <div>
            <label htmlFor='name'>
            password
            </label>
            <input type="password" id='phone'  ref={PasswordRef} 
            {...register("password")}/>
             <button onClick={(event)=>{
                 event.preventDefault()
                PasswordRef.current.type = 'text'}}>Show pass</button>
             <button   onClick={()=>PasswordRef.current.type = 'password'}>Hide pass</button>
         </div>
         <div>
            <button type='submit' className='sign-in'>Sign in</button>
         </div>
    </form>

  </section>
  )
}
