import styled from "styled-components";
import { ButtonMain } from "../Buttons";

export const CommentCard=styled.div`
 margin-bottom: 1rem;
        display: grid;
        grid-template-columns: min-content  min-content 1fr;
        grid-template-rows: repeat(4,min-content);
        align-items: center;
        column-gap: 0.5rem;
      
`
export const UserImage=styled.img`
grid-column: 1/span 1;
grid-row: 1/span 2;
border-radius: 50%;
width: 4rem;
margin-right:1rem

`
export const Name=styled.h3`
width: max-content;
font-size: 14px;
font-weight: 700;
line-height: 20px;
letter-spacing: -0.1944444477558136px;
text-align: left;
        grid-column: 2/span 1;
        grid-row: 1/span 1;

`
export const UserName=styled.p`
font-size: 1.4rem;
font-weight: 400;
line-height: 20px;
letter-spacing: 0px;
text-align: left;
grid-column: 2/span 1;
        grid-row: 2/span 1;

`
export const Content=styled.div`
grid-column: 2/span 2;
        grid-row: 3/span 1;
font-size: 15px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0px;
text-align: left;
margin-top: 1.2rem;



`
export const ButtonReply=styled(ButtonMain)`
grid-column: 3/span 1;
        grid-row: 2/span 1;
justify-self: end;
padding: 0;

`