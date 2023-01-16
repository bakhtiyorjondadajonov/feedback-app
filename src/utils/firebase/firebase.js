// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup} from "firebase/auth"
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"
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
export const createUserDocumentFromAuth=async(userAuth)=>{

const userDocRef= doc(db,"users",userAuth.uid)

const userSnapShot=await getDoc(userDocRef)
if(!userSnapShot.exists()){
   try {
    await setDoc(userDocRef,{
        email:userAuth.email,
        name:userAuth.displayName,
        createAt:Date.now()
    })
   } catch (error) {
    console.log(error)
   }
}
return userDocRef
}