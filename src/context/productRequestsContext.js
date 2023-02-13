import { createContext, useEffect, useState } from "react";
import {  addProductRequest, getCollectionAndDocuments, updateCommentsAndReplies, updateProductRequest } from "../utils/firebase/firebase";
export const ProductRequestContext=createContext({
productRequests:[],
filteredProductRequests:[],
currentProductRequest:{},
addNewProductRequest:()=>null,
setCurrentProductRequst:()=>null,
addReplyHandler:()=>null,
addCommentHandler:()=>null,
editProductRequestHandler:()=>null,
sortProductReqs:()=>null
})

const ProductRequestContextProvider=({children})=>{
    const [currentProductRequest,setCurrentProductRequst]=useState({})
    const [productRequests,setProductRequests]=useState([])
    const [filteredProductRequests,setFilteredProductRequests]=useState([])
    useEffect(()=>{
        (async function(){
            const productReq=await getCollectionAndDocuments()
            setProductRequests(productReq)
          
        })()
        },[])
useEffect(()=>{

    setFilteredProductRequests(productRequests)
},[productRequests])
      
    const addReplyHandler=(updatedComment)=>{
        
        const updatedCommentsArr=currentProductRequest.comments.filter(comment=>comment.id!=updatedComment?comment:updatedComment)     

updateCommentsAndReplies(currentProductRequest.id,updatedCommentsArr)
        setCurrentProductRequst({...currentProductRequest,comments:updatedCommentsArr})


setProductRequests(productRequests.filter(productRequest=>productRequest.id===currentProductRequest?currentProductRequest:productRequest))
    }

    const addCommentHandler=(newComment)=>{
       
  const updatedCommentArr=currentProductRequest.comments?[...currentProductRequest.comments,newComment]:[newComment]
  updateCommentsAndReplies(currentProductRequest.id,updatedCommentArr)
setProductRequests((prev)=>{
    const newArr=prev.map(productReq=>{
        if(productReq.id!==currentProductRequest.id)return productReq

        return {...currentProductRequest,comments:updatedCommentArr}
    })
    return newArr
})

}


const addNewProductRequest=async(newProductRequest)=>{
    addProductRequest(newProductRequest)
    setProductRequests([...productRequests,newProductRequest])
}

const editProductRequestHandler=(editedProductRequest)=>{
    // saving to firestore
    updateProductRequest(currentProductRequest.id,editedProductRequest)
    //updating productRequests state
    const newArr=productRequests.map((prodReq)=>{
if(prodReq.id===editedProductRequest.id){
    return editedProductRequest
}else{
    return prodReq
}

    })

setProductRequests(newArr)

}

   const filterProductReqs=(filter)=>{
    if(filter!=="all"){
        const newArr=productRequests.filter((productReq)=>productReq.category.toLowerCase()===filter)
        setFilteredProductRequests(newArr)

    }else{
     setFilteredProductRequests(productRequests)   
    }
   }     


const sortProductReqs=(filter)=>{
if(filter.toLowerCase()==="most upvotes"){
    const sortedArr=[...filteredProductRequests].sort((a,b)=>b.upvotes-a.upvotes)
console.log(sortedArr)
setFilteredProductRequests(sortedArr);
}
if(filter.toLowerCase()==="least upvotes"){
    const sortedArr=[...filteredProductRequests].sort((a,b)=>a.upvotes-b.upvotes)
console.log(sortedArr)
setFilteredProductRequests(sortedArr); 
}
}
const value={productRequests,sortProductReqs,setFilteredProductRequests,filteredProductRequests,filterProductReqs,editProductRequestHandler,addNewProductRequest,addCommentHandler,addReplyHandler,setCurrentProductRequst,currentProductRequest}
    return <ProductRequestContext.Provider value={value}>{children}</ProductRequestContext.Provider>
}

export default ProductRequestContextProvider