import React from 'react'
import { ButtonMain } from '../components/Buttons'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../utils/firebase/firebase'

function SignIn() {
    const logGoogleUser=async ()=>{
        const {user}=await signInWithGooglePopup()
        
        createUserDocumentFromAuth(user)
          }
  return (
    <div style={{width:"700px"}}>
      <h1>
        Sign In Page
      </h1>
      <ButtonMain onClick={logGoogleUser} transparent>Sign In</ButtonMain>
    </div>
  )
}

 export default SignIn
