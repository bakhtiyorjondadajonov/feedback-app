import { createContext, useEffect, useState } from "react";
import PRODUCT_REQUESTS from  "./../data.json"
const addReplyToProductRequests=(newProductRequest,ProductRequests)=>{
return []


}
export const ProductRequestContext=createContext({
productRequests:[],
currentProductRequest:{},

setCurrentProductRequst:()=>null,
addReplyHandler:()=>null
})

const ProductRequestContextProvider=({children})=>{
    const [currentProductRequest,setCurrentProductRequst]=useState({})
    const [productRequests,setProductRequests]=useState(PRODUCT_REQUESTS.productRequests)
    const addReplyHandler=(updatedComment)=>{
        const updatedCommentsArr=currentProductRequest.comments.filter(comment=>comment.id!=updatedComment?comment:updatedComment)     
setCurrentProductRequst({...currentProductRequest,comments:updatedCommentsArr})
setProductRequests(productRequests.filter(productRequest=>productRequest.id===currentProductRequest?currentProductRequest:productRequest))
     

    }

        

const value={productRequests,addReplyHandler,setCurrentProductRequst,currentProductRequest}
    return <ProductRequestContext.Provider value={value}>{children}</ProductRequestContext.Provider>
}

export default ProductRequestContextProvider