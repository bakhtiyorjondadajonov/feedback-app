import styled from "styled-components";

export const Container=styled.div`
display: flex;
flex-direction: column;
background-color: var(--color-secondary);
border-radius: 10px;
gap: 2.7rem;
padding: 3.2rem;
&>button{
    align-self: end;
}



`
export const Title=styled.h2`
font-size: 18px;
font-weight: 700;
line-height: 26px;
letter-spacing: -0.25px;
text-align: left;
color: var(--color-primary--dark);



`