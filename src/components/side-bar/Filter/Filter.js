import React from 'react'
import { BtnCategory } from '../../Buttons'
import { FilterStyle } from './FilterStyle'

function Filter() {
  return (
    <FilterStyle>
      <BtnCategory className='btn-category'>All</BtnCategory>
      <BtnCategory className='btn-category'>Enhancement</BtnCategory>
    </FilterStyle>
  )
}

export default Filter
