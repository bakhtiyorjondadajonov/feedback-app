
import classes from "./side-bar.module.css"
import React, { useContext } from 'react'
import Board from "./Board/Board"
import Filter from "./Filter/Filter"
import RoadMap from "./RoadMap/RoadMap"
import { ButtonMain } from "../Buttons"
import { UserContext } from "../../context/userContext"
import { signOutFnHandler } from "../../utils/firebase/firebase"


function SideBar() {
  const {currentUser}=useContext(UserContext);
  const logOutFn=async()=>{
await signOutFnHandler()
  }
  return (
    <div className={classes.side_bar}>
      <Board/>
      <div className={classes.card_wrapper}><Filter/></div>
      <div className={classes.card_wrapper}> <RoadMap/></div>
     { currentUser? <div className={classes.card_wrapper}><ButtonMain onClick={logOutFn} style={{width:"100%",textAlign:"center",textTransform:"uppercase"}} gray type="button">Log Out</ButtonMain></div>:""}
  
    </div>
  )
}

export default SideBar
