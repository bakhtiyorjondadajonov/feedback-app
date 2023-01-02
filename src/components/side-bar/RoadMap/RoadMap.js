import React from 'react'
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
            <ButtonMain as="a" transparent>View</ButtonMain>
        </div>
      <Status color="orange" title="Planned" count="3"/>
      <Status color="purple" title="Live" count="5"/>
      <Status color="red" title="In-Progress" count="8"/>
    </RoadMapStyle>
  )
}

export default RoadMap
