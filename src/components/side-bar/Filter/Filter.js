import React, { useContext } from 'react'
import { ProductRequestContext } from '../../../context/productRequestsContext'
import { BtnCategory } from '../../Buttons'
import { FilterStyle } from './FilterStyle'

function Filter() {
  const {filterProductReqs}=useContext(ProductRequestContext)
  const filterHandler=(e)=>{
   const filter= e.target.innerHTML.toLowerCase()
   console.log(filter)
filterProductReqs(filter)
  }
  return (
    <FilterStyle>
      <BtnCategory   onClick={filterHandler} className='btn-category'>All</BtnCategory>
      <BtnCategory onClick={filterHandler} className='btn-category'>Enhancement</BtnCategory>
      <BtnCategory onClick={filterHandler} className='btn-category'>UI</BtnCategory>
      <BtnCategory onClick={filterHandler} className='btn-category'>UX</BtnCategory>
      <BtnCategory onClick={filterHandler} className='btn-category'>Feature</BtnCategory>
    </FilterStyle> 
  )
}

export default Filter
