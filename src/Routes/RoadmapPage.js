import React from 'react'
import Navigation from '../components/main-parts/Navigation'
import classes from "../components/main-parts/main-parts.module.css"
import { RoadmapContainer } from '../components/Roadmap/RoamapContainer'
import RoadmapColumn from '../components/Roadmap/RoadmapColumn/RoadmapColumn'
function RoadmapPage() {
  return (
    <div className={classes.main_parts_v2}>
      <Navigation roadmap/>
      <RoadmapContainer>
        <RoadmapColumn status/>
        <RoadmapColumn status/>
        <RoadmapColumn status/>
        </RoadmapContainer>
    </div>
  )
}

export default RoadmapPage
