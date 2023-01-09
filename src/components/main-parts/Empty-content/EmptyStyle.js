import styled from "styled-components";

const EmptyContainer=styled.div`
width: 82.5rem;
height: 60rem;
background: #FFFFFF;
border-radius: 10px;
display: flex;
flex-direction: column;
gap: 4rem;
justify-content: center;
align-items: center;
.content-container{
    max-width: 410px;
    max-height: 189px;
& .title{
       
font-size: 24px;
font-weight: 700;
line-height: 35px;
letter-spacing: -0.3333333432674408px;
text-align: center;
color: var(--color-primary--dark);
margin-bottom:1.6rem;

    }
& .description{
font-size: 16px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0px;
text-align: center;
color: var(--color-primary);
    }


}


`

export default EmptyContainer