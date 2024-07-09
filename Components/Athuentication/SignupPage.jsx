import "./SignupPage.css";
import user from "../../assets/images/user.webp";
import {SignUp} from "../../Services";
import {useForm} from "react-hook-form"
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";
import { useNavigate } from "react-router";
const SignupPage = () => {
    let [pic , setpic ] = useState(null)
    const Schema = z.object({
        name:z.string().min(3),
        email:z.string().email(),
        password:z.string().min(8),
        cpassword:z.string(),
        address:z.string()
    })
    const navigate = useNavigate()
    const {register , handleSubmit , formState:{errors}} = useForm({
 resolver:   zodResolver(Schema)
})
const mysubmit = async(values)=>{
try{
const {data} = await SignUp(values,pic)
    localStorage.setItem("token",data.token)
    navigate("/")
}catch(err){
  console.log(err)
}
}
    return (
        <section className=' form_page'>
            <form className='authentication_form'  onSubmit={handleSubmit(mysubmit)}>
                <h2>SignUp Form</h2>

                <div className='image_input_section'>
                    <div className='image_preview'>
                        <img src={pic ? URL.createObjectURL(pic) : user} id='file-ip-1-preview' />
                    </div>
                    <label htmlFor='file-ip-1' className='image_label' >
                        Upload Image
                    </label>
                    <input type='file' id='file-ip-1' className='image_input' onChange={(event)=>setpic(event.target.files[0])} />
                </div>

                {/* Form Inputs */}
                <div className='form_inputs_box'>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            id='name'
                            className='form_text_input'
                            type='text'
                            placeholder='Enter your name'
                            {...register('name')}
                        />
                        {errors.name && errors.name.message}
                    </div>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            className='form_text_input'
                            type='email'
                            placeholder='Enter your email address'
                            {...register('email')}
                        />
                    </div>
</div>
   <div className='form_inputs_box'>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            id='password'
                            className='form_text_input'
                            type='password'
                            placeholder='Enter your password'
                            {...register('password')}
                        />
                    </div>

                    <div>
                        <label htmlFor='cpassword'>Confirm Password</label>
                        <input
                            id='cpassword'
                            className='form_text_input'
                            type='password'
                            placeholder='Enter confirm password'
                            {...register('cpassword')}
                        />
                    </div>
  </div>
                    <div className='signup_textares_section'>
                        <label htmlFor='address'>Delivery Address</label>
                        <textarea
                            id='address'
                            className='input_textarea'
                            placeholder='Enter delivery address'
                            {...register('address')}
                        />
                    </div>
              

                <button className=' form_submit' type='submit'>
                    Submit
                </button>
            </form>
        </section>
    );
};

export default SignupPage;

// name - Name should be at least 3 characters.
// email - Please enter valid email
// password - Password must be at least 8 characters.
// confirmPassword - Confirm Password does not match Password
// deliveryAddress - Address must be at least 15 characters.
