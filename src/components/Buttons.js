import styled,{css} from "styled-components"
export const ButtonMain=styled.button`
cursor: pointer;
border: none;
width: max-content;
border-radius: 10px;
font-family: inherit;
font-size: 14px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0px;
text-align: left;
padding: 1.2rem 2.5rem;
color:black;
${(props)=>{
if(props.blue){
    return css`
        color:var(--color-secondary);
        background-color:var(--blue) 
        `
}else if(props.purple){
    return css`
        color:var(--color-secondary);
        background-color:var(--purple) 
        `
}else if(props.gray){
    return css`
    background-color:var(--color-primary--dark) ;
    color: white;
    `
}else if(props.transparent){
    return css`
    background-color:transparent;
    color :var(--color-primary) ;
    `
}
}};
/* background-color: var(--blue); */
transition:all 0.2s;
&:hover{
    opacity:0.7;
}
`
export const BtnCategory=styled(ButtonMain)`
color: var(--blue);
background-color:var(--color-primary--light) ;
padding: 0.5rem 1.7rem;
font-size: 13px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0px;
text-align: left;
&:hover{
   background-color:#CFD7FF;
   opacity: 1;
}

`
export const BtnUpvotes=styled(ButtonMain)`
display: flex;
flex-direction: column;
gap: 0.5rem;
justify-content:center;
align-items: center;
padding: 1.2rem;
`