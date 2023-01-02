
import classes from "./side-bar.module.css"
import React from 'react'
import Board from "./Board/Board"
import Filter from "./Filter/Filter"
import RoadMap from "./RoadMap/RoadMap"


function SideBar() {
  return (
    <div className={classes.side_bar}>
      <Board/>
      <Filter/>
      <RoadMap/>
    </div>
  )
}

export default SideBar
