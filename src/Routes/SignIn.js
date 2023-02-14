import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ButtonMain } from '../components/Buttons'
import FormInput from '../components/forms/FormInput'
import FormLabel from '../components/forms/FormLabel'
import { createUserDocumentFromAuth, MySwal, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../utils/firebase/firebase'
import Auth from './AuthStyle'

function SignIn() {
  const navigator=useNavigate()
  const initialFormData={
    
    email:"",
    password:"",
  
}
const [formData,setFormData]=useState(initialFormData);
const {email,password}=formData
const changeHandler=(e)=>{
    const {name,value}=e.target
    setFormData((prev)=>{
        return {...prev,[name]:value}
    })

}
const formSubmitHandler=async(e)=>{
e.preventDefault()

try {
  await signInAuthUserWithEmailAndPassword(email,password);
  navigator("/")
} catch (error) {
  MySwal.fire({
    icon: 'error',
    title: 'Oops...',
    text: error.message,
  })
  console.log(error)
}
// try {
// const {user}=await createAuthUserWithEmailAndPassword(formData.email,formData.password)
// createUserDocumentFromAuth(user,{name})
// } catch (error) {
// MySwal.fire({
//     icon: 'error',
//     title: 'Oops...',
//     text: error.message,
//   })
// }

setFormData(initialFormData)

}
    const logGoogleUser=async ()=>{
        const {user}=await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
        navigator("/")
          }
  return (
    <Auth onSubmit={formSubmitHandler}>
      <h1>Sign In</h1>
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
        <ButtonMain purple className='signIn' type='submit'>Sign In</ButtonMain>
        <ButtonMain onClick={logGoogleUser} blue className='signIn' type='button'>Sign In with Google</ButtonMain>
      <p>
        <span>Don't have an account yet?</span>
        <Link to="/sign-up">Create an account</Link>
      </p>
    </Auth>
    // <div style={{width:"700px"}}>
    //   <h1>
    //     Sign In Page
    //   </h1>
    //   <ButtonMain onClick={logGoogleUser} transparent>Sign In</ButtonMain>
    // </div>
  )
}

 export default SignIn
