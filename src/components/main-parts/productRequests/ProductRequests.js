import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { BtnCategory, BtnUpvotes, ButtonMain } from '../../Buttons'



const Card=styled.div`
display: grid;
grid-template-columns: min-content max-content 1fr;
grid-template-rows:repeat(3,min-content);
column-gap:4rem;
row-gap:1rem;
padding: 2.8rem 3.2rem;
.btn-upvotes{
  grid-column: 1/2;
  grid-row: 1/3;
  height:min-content;  
}
.comments-btn{
  display: flex;
  gap: 1rem;
  grid-column: 3/4;
  grid-row:2/3;
  justify-self: end;
}
border-radius: 10px;
background-color:var(--color-secondary);
.title{
  cursor: pointer;
  grid-column:2/3;
  grid-row: 1/2;
  color:var(--blue);
font-size: 18px;
font-weight: 700;
line-height: 26px;
letter-spacing: -0.25px;
text-align: left;
}
.paragraph{

  grid-column:2/3;
  grid-row: 2/3;
  color: var(--color-primary);
font-size: 16px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0px;
text-align: left;

}
.category-container{
  grid-column:2/3;
  grid-row: 3/4;
  display: flex;
  gap: 1rem;
}
`

function ProductRequestCard({productRequest}) {
  
  const navigatorFn=useNavigate();
 
  return (
    <Card>
     <h3 onClick={()=>navigatorFn(`/feedback-details/${productRequest.id}`)} className="title">{productRequest.title}</h3>
     <p  className="paragraph">{productRequest.description}</p>
    <ButtonMain onClick={()=> navigatorFn(`/feedback-details/${productRequest.id}`)} className="comments-btn" transparent >
    <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fill-rule="nonzero"/></svg>
    <h3>{productRequest.comments?productRequest.comments.length:0}</h3>
    </ButtonMain>
    <BtnUpvotes className='btn-upvotes'><svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
    <span className='number'>{productRequest.upvotes}</span></BtnUpvotes>
    <div className="category-container">
    <BtnCategory>{productRequest.status}</BtnCategory>
    </div>
    </Card>
  )
}

export default ProductRequestCard
