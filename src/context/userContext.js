import { createContext, useEffect, useState } from "react";
import { AuthStateChangeHandler } from "../utils/firebase/firebase";



export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null
});

const UserContextProvider=({children})=>{
const [currentUser,setCurrentUser]=useState(null);
useEffect(()=>{
    const unsubscribe=AuthStateChangeHandler((user)=>{
        setCurrentUser(user)
    })

},[])
const value={currentUser,setCurrentUser}
    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}
export default UserContextProvider