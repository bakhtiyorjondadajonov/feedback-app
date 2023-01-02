
import classes from "./main-parts.module.css"
import React from 'react'
import Navigation from "./Navigation"

import ProductRequestCard from "./productRequests/ProductRequests"

function MainParts() {
  return (
    <div className={classes.main_parts}>
     <Navigation/>
     <ProductRequestCard/>
    </div>
  )
}

export default MainParts
