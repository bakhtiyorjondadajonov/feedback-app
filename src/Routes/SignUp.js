import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ButtonMain } from '../components/Buttons'
import FormInput from '../components/forms/FormInput'
import FormLabel from '../components/forms/FormLabel'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, MySwal } from '../utils/firebase/firebase'
import AuthForm from './AuthStyle'

function SignUp() {
  const navigatior=useNavigate()
    const initialFormData={
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    }
    const [formData,setFormData]=useState(initialFormData);
    const {name,email,password,confirmPassword}=formData
    const changeHandler=(e)=>{
        const {name,value}=e.target
        setFormData((prev)=>{
            return {...prev,[name]:value}
        })
      
    }
    const formSubmitHandler=async(e)=>{
e.preventDefault()
if(password!==confirmPassword) return MySwal.fire({
  icon: 'error',
  title: 'Oops...',
  text: '"Password and Password Confirm are not the same"!'
})

try {
    const {user}=await createAuthUserWithEmailAndPassword(formData.email,formData.password)
createUserDocumentFromAuth(user,{name})
navigatior("/")

} catch (error) {
    MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      })
}
 
setFormData(initialFormData)

}
  return (
    <AuthForm onSubmit={formSubmitHandler}>
      <h1>Sign Up</h1>
      <div>
        <FormLabel htmlFor='name'>
            <h2>
                Your Name
            </h2>
        </FormLabel>
        <FormInput value={name} onChange={changeHandler}  name="name" required id="name" type="text" />
      </div>
      <div>
        <FormLabel htmlFor='email'>
            <h2>
                Your Email
            </h2>
        </FormLabel>
        <FormInput value={email} onChange={changeHandler} name="email" required id="email" type="email" />
      </div>
      <div>
        <FormLabel htmlFor='password'>
            <h2>
            Password(min 6 characters)
            </h2>
        </FormLabel>
        <FormInput value={password} onChange={changeHandler} name="password" required id="password" type="password"/>
      </div>
      <div>
        <FormLabel htmlFor='confirmPassword'>
            <h2>
            Confirm Password
            </h2>
        </FormLabel>
        <FormInput value={confirmPassword} onChange={changeHandler} name="confirmPassword" required id="confirmPassword" type="password"/>
      </div>
      <ButtonMain purple type='submit'>Sign Up</ButtonMain>
      <p>
        <span>Already have an account?</span>
        <Link to="/sign-in">Login here</Link>
      </p>
    </AuthForm>
  )
}

export default SignUp
