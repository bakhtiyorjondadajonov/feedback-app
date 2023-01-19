// Import the functions you need from the SDKs you need
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { initializeApp } from "firebase/app";
import {onAuthStateChanged,GoogleAuthProvider,getAuth,signInWithPopup,createUserWithEmailAndPassword} from "firebase/auth"
import {signInWithEmailAndPassword,signOut} from "firebase/auth"
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"
// Alert pop up / sweet library
export const MySwal = withReactContent(Swal)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgXxbuWInIcynw3iZ_Th_uYVGdJyQjcKo",
  authDomain: "feedback-app-fc53d.firebaseapp.com",
  projectId: "feedback-app-fc53d",
  storageBucket: "feedback-app-fc53d.appspot.com",
  messagingSenderId: "663719023145",
  appId: "1:663719023145:web:00a29c09a1a164681b8238"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//In order to sign in with google,we need to make google provider
const provider=new GoogleAuthProvider()
provider.setCustomParameters({
    prompt:"select_account"
})
const auth=getAuth()
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)
// with getFirestore
//we can create a new database in firestore
const db = getFirestore()
// we need to create a user with the information passed through 
//authentication process
export const createUserDocumentFromAuth=async(userAuth,additionalInfo)=>{

const userDocRef= doc(db,"users",userAuth.uid)

const userSnapShot=await getDoc(userDocRef)
if(!userSnapShot.exists()){
   try {
    await setDoc(userDocRef,{
        email:userAuth.email,
        name:userAuth.displayName,
        createAt:Date.now(),
        ...additionalInfo
    })
   } catch (error) {
    console.log(error)
   }
}
MySwal.fire(
  "",
  'You are logged in!',
  "success"
)
return userDocRef
}


export const createAuthUserWithEmailAndPassword=async(email,password)=>{
 return await createUserWithEmailAndPassword(auth,email,password)
}
export const signInAuthUserWithEmailAndPassword=async(email,password)=>{
const response=await signInWithEmailAndPassword(auth,email,password)
if(response.operationType==="signIn"){
  console.log(response)
  await MySwal.fire(
    "",
    'You are logged in!',
    "success"
  )
  // window.location="/"
}
return response
}

export const signOutFnHandler=async()=>{
  await signOut(auth)
}
export const AuthStateChangeHandler=(observer)=>{

  onAuthStateChanged(auth,observer)

}