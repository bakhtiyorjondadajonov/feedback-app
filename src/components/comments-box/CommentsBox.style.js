import styled from "styled-components";

export const CommentsBoxCard=styled.div`
       
        display: flex;
        flex-direction: column; 
        padding: 3.2rem;
        /* border-bottom: 1px solid #8C92B3; */
        position: relative
        ;
&:after{
        position: absolute;
        content: "";
top: 95%;
left: 50%;
transform:translateX(-50%);
width: 90%;
height: 1px;
background-color: #8C92B3;
opacity:0.5;
}
        
        /* padding: 3rem 0; */
`