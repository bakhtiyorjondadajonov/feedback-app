

import React from 'react'
import styled,{css} from 'styled-components'

const StatusStyle=styled.div`

display: flex;
justify-content: space-between;

.status{
font-size: 16px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0px;
text-align: left;
position: relative;
margin-left: 1.5rem;
&:before{
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
width: 8px;
height: 8px;
border-radius: 50%;
${
    props=>{
     return css`
     background-color: var(--${props.color});
     `
    }
    
}

    left: -2rem;
}
}
.status-count{
font-size: 16px;
font-weight: 700;
line-height: 23px;
letter-spacing: 0px;
text-align: right;
color:var(--color-primary) ;
}

`
function Status(props) {
  return (
    <StatusStyle color={props.color}>
      <div   className="status">{props.title}</div>
      <div className="status-count">{props.count}</div>
    </StatusStyle>
  )
}

export default Status
