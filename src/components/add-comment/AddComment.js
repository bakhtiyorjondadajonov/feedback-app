import React, { useContext } from 'react'
import { ProductRequestContext } from '../../context/productRequestsContext'
import { UserContext } from '../../context/userContext'
import { TextArea } from '../add-reply/AddReply.style'
import { ButtonMain } from '../Buttons'
import { Container, Title } from './AddComment.style'

function AddComment() {
    const {currentUser}=useContext(UserContext)
    const {addCommentHandler,setCurrentProductRequst}=useContext(ProductRequestContext)
    const newCommentHandler=(e)=>{
       const textArea=e.target.parentElement.querySelector("textarea")
const content=textArea.value
if(content.length===0)return alert("You should write something as a comment")

const newComment={
id:`${currentUser.displayName.split(" ")[0]}${Math.random()}`,
content,
user:{
    image:"./avatar.svg",
    name:currentUser.displayName,
username:currentUser.displayName.split(" ")[0].toLowerCase()
},
replies:[]

}
addCommentHandler(newComment)
         textArea.value=""     
    }
  return (
    <Container>
      <Title>Add Comment</Title>
      <TextArea placeholder='Type your comments here...' cols="30" rows="7"></TextArea>
   <ButtonMain onClick={newCommentHandler} purple>Post Comment</ButtonMain>
    </Container>
  )
}

export default AddComment
