import React, { useContext } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import CommentsBox from '../components/comments-box/CommentsBox';
import CommentsContainer from '../components/comments-container/CommentsContainer';
import CommentsNav from '../components/comments-nav/CommentsNav';
import ProductRequestCard from '../components/main-parts/productRequests/ProductRequests'
import { ProductRequestContext } from '../context/productRequestsContext';

function FeedBackDetails() {
    const {id:productId}=useParams();
    
    const {productRequests,setCurrentProductRequst,currentProductRequest}=useContext(ProductRequestContext);
    const [productRequest]=productRequests.filter(productRequest=>productRequest.id==productId)
setCurrentProductRequst(productRequest)
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"2rem"}}>
    <CommentsNav/>
      <ProductRequestCard productRequest={productRequest}/>
      <CommentsContainer>
        {
            productRequest.comments.map(comment=>{

                return (
                    <CommentsBox key={`${Math.random()}`}  comment={comment}/>
                )
            })
        }
     
    
      </CommentsContainer>
    </div>
  )
}

export default FeedBackDetails
