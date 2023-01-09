import styled from "styled-components";


export const Form=styled.form`
padding: 4.2rem;
width: 100%;
height: 100%;
background: var(--color-secondary);
border-radius: 10px;
display: flex;
flex-direction: column;
gap: 2.4rem;
position: relative;
& .title{
font-size: 24px;
font-weight: 700;
line-height: 35px;
letter-spacing: -0.3333333432674408px;
text-align: left;
color: var(--color-primary--dark);
margin-bottom: 1.6rem;
}
textarea{
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
}
& svg{
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    left:42px ;
}
`
