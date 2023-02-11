import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonMain } from '../../Buttons'
import { RoadMapStyle } from './RoadMapStyle'
import Status from './Status'

function RoadMap() {
  return (
    <RoadMapStyle>
        <div className='container'>
            <h2 className="title">
                RoadMap
            </h2>
            <Link to="roadmap"><ButtonMain href="roadmap"  transparent>View</ButtonMain></Link>
        </div>
      <Status color="orange" title="Planned" count="3"/>
      <Status color="purple" title="Live" count="5"/>
      <Status color="light-blue" title="In-Progress" count="8"/>
    </RoadMapStyle>
  )
}

export default RoadMap
