import React from 'react'
import {ReactComponent as ICON_CHECK} from  "./icon-check.svg"
import styled, { css } from 'styled-components'
// Drop down style
const DropDownStyle=styled.div`
cursor: pointer;
width: 100%;
background-color:var(--color-secondary--dark);
padding: 1.3rem 2.4rem;
font-size: 15px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0px;
text-align: left;
border: none;
border-radius:5px;
display: flex;
justify-content: space-between;
position: relative;
${(props)=>{
    if(props.gray){
        return css`
        background-color: var(--color-primary--dark);
        color: white;
        font-weight:700;

        .drop-down-menu{
            color:black;
        }
        `
    }
}}
.arrow{
    width: 2rem;
    height: 2rem;
    position: relative;
    & svg{
        transition: all 0.2s;
        position: absolute;
        top: 50%;
        left: 50%;
      
        
    }
}
.rotate{
    transform:translateY(-50%) rotate(180deg);
}
.drop-down-menu{
    position: absolute;
    top: 6rem;
    left:0;
    width:100%;
    background: var(--color-secondary);
box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
border-radius: 10px;
display: none;

.option{
    cursor: pointer;
    padding:1.2rem 2.4rem;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: space-between;
    &:hover{
        color: var(--purple);
    }
    & .icon-check{
        width:2rem;
        height: 100%;
        display: flex;
        position: relative;
    display: none;
    }
    & .icon-check svg{
       left: -2rem;
    }
}
.option:not(:last-child){
    border-bottom: solid 1px rgba(55, 63, 104, 0.10492);
}
}
.active{
    display:initial !important;
}
`




// Drop down functuality
function DropDown(props) {
    const dropDownHandler=(e)=>{
e.target.closest(".drop-down").querySelector(".arrow-down")?.classList.toggle("rotate");
document.querySelector(".drop-down-menu").classList.toggle("active")
const optionBtn=e.target.closest(".option");
if(!optionBtn) return
document.querySelector(".arrow-down").classList.toggle("rotate"); 
// Check icon apperance handled
const optionsArr=optionBtn.parentElement.querySelectorAll(".option")
optionsArr.forEach(option=>{
    option.querySelector(".icon-check").classList.remove("active")
})
optionBtn.querySelector(".icon-check").classList.add("active")

// ----MAIN ACTIONS HANDLER -----
document.querySelector(".selected").textContent=optionBtn.textContent

document.querySelector(".arrow-down").classList.toggle("rotate");  
document.querySelector(".drop-down-menu").classList.remove("active")
props.dataReceiver(optionBtn.textContent)

}
   
  return (
    <DropDownStyle className='drop-down' gray={props.gray} onClick={dropDownHandler}>
      <div className="selected" >
      {props.options[0]}
      </div>
      <div className="arrow">
      <svg className="arrow-down" width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4 4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
      
      </div>

<div className="drop-down-menu">
    {props.options.map(option=>{
        return (<div key={Math.random()} className='option' >
            <span>{option}</span>
        <span className='icon-check'>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" stroke-width="2" d="M1 5.233L4.522 9 12 1"/></svg>
            </span>
            </div>)
    })}
</div>
      
    </DropDownStyle>
  )
}

export default DropDown
