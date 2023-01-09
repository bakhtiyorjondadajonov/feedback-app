

import React from 'react'
import styled from 'styled-components'
const Input=styled.input`
width: 100%;
font-family: inherit;
background-color:var(--color-secondary--dark);
padding: 1.3rem 2.4rem;
font-size: 15px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0px;
text-align: left;
border: none;
border-radius:5px;
`
function FormInput(props) {
  return (
  <Input type={props.type?props.type:"text"}/>
  )
}

export default FormInput
