import React, { useContext } from 'react'
import Navigation from '../components/main-parts/Navigation'
import classes from "../components/main-parts/main-parts.module.css"
import { RoadmapContainer } from '../components/Roadmap/RoamapContainer'
import RoadmapColumn from '../components/Roadmap/RoadmapColumn/RoadmapColumn'
import { ProductRequestContext } from '../context/productRequestsContext'
function RoadmapPage() {
  const {productRequests} =useContext(ProductRequestContext);
  const filterByStatusFn=(status)=>{
    const newArr=productRequests.filter((productRequest)=>productRequest.status==status);
    return newArr
  }
  const inProgress=filterByStatusFn("in-progress");
  const live=filterByStatusFn("live");
  const planned=filterByStatusFn("planned")
  

  return (
    <div className={classes.main_parts_v2}>
      <Navigation roadmap/>
      <RoadmapContainer>
        <RoadmapColumn  productRequests={planned} status={"planned"} />
        <RoadmapColumn  productRequests={inProgress} status={"in-progress"} />
        <RoadmapColumn productRequests={live}  status={"live"} />
        </RoadmapContainer>
    </div>
  )
}

export default RoadmapPage
