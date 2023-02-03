
import classes from "./main-parts.module.css"
import React, { useContext } from 'react'
import Navigation from "./Navigation"

import ProductRequestCard from "./productRequests/ProductRequests"
import Empty from "./Empty-content/Empty"
import { ProductRequestContext } from "../../context/productRequestsContext"

function MainParts() {
  const {productRequests}=useContext(ProductRequestContext)
  console.log(productRequests)  
  return (
    <div className={classes.main_parts}>
     <Navigation/>
     {productRequests.lenght===0?<Empty/>:productRequests.map(productRequest=>{
return (<ProductRequestCard productRequest={productRequest} key={productRequest.id}/>)

     })}
     
    </div>
  )
}

export default MainParts
