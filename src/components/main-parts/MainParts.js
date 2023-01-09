
import classes from "./main-parts.module.css"
import React from 'react'
import Navigation from "./Navigation"

import ProductRequestCard from "./productRequests/ProductRequests"
import Empty from "./Empty-content/Empty"

function MainParts() {
  return (
    <div className={classes.main_parts}>
     <Navigation/>
     <Empty/>
    </div>
  )
}

export default MainParts
