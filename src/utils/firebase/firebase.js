// Import the functions you need from the SDKs you need
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { initializeApp } from "firebase/app";
import {onAuthStateChanged,GoogleAuthProvider,getAuth,signInWithPopup,createUserWithEmailAndPassword} from "firebase/auth"
import {signInWithEmailAndPassword,signOut} from "firebase/auth"
import {getFirestore,doc,getDoc,setDoc,writeBatch,updateDoc, collection,query, getDocs, addDoc} from "firebase/firestore"


export const randomID=(length=16)=>{

 return Math.random().toString(length).slice(2).substring(2,length+2)
}

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
//  This function is only for reference.I used it to write all data t0 the database at once
export const AddCollectionAndDocuments=async (colectionKey,objectsToAdd)=>{
try {
  const collectionRef=collection(db,colectionKey)

const batch=writeBatch(db)
objectsToAdd.forEach((object)=>{
//create document reference to write data
const randomId=randomID()
const docRef=doc(collectionRef,randomId)

batch.set(docRef,{...object,id:randomId})

})

await batch.commit()
console.log("All data is added to DB")
} catch (error) {
  console.log("Error",error)
}
}

export const getCollectionAndDocuments=async ()=>{
//first we need to create collection reference for the collection we are going to read

const collectionRef=collection(db,"product_requests")
const q=query(collectionRef)
const querySnapShot=await getDocs(q)

const productReqs=querySnapShot.docs.map((docSnapShot)=>{
  
 return docSnapShot.data()
})
return productReqs
}
export const updateCommentsAndReplies=(id,updatedPart)=>{
try {
  const docRef=doc(db,"product_requests",id)
updateDoc(docRef,{
  comments:updatedPart
})
console.log("updated")
} catch (error) {
  console.log("error",error)
}

}
export const updateProductRequest=(id,updatedObject)=>{
try {
  const docRef=doc(db,"product_requests",id)

updateDoc(docRef,updatedObject)
console.log("updated")
} catch (error) {
  console.log("error",error)
}

}

export const addProductRequest=async(newProductReq)=>{
try {
  const {id}=newProductReq
  await setDoc(doc(db,"product_requests",id),newProductReq)
console.log("added")
} catch (error) {
  console.log("error",error)
}
}
