

import React from 'react'
import styled from 'styled-components'

const FormLabel=styled.label`
display: flex;
flex-direction: column;
font-size: 14px;
line-height: 20px;
letter-spacing: -0.1944444477558136px;
text-align: left;
margin-bottom: 1.6rem;
&>:first-child{
font-weight: 700;
text-transform: capitalize;
}
&>:last-child{
font-weight:400;
color: var(--color-primary);
}


`

export default FormLabel
