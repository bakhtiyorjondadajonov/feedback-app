import React from 'react'
import { ButtonMain } from '../Buttons'
import { AddReplyContainer, TextArea } from './AddReply.style'

function AddReply({replyContentReceiver,setReplyCondition}) {

    const replyContentHandler=(e)=>{
 const content=e.target.parentElement.querySelector("textarea").value
 if(content.length===0) return alert("You should write something")
replyContentReceiver( content)
setReplyCondition(false)

    }
   
  return (
    <AddReplyContainer >
    <TextArea cols="30" rows="5">
      
    </TextArea>
<ButtonMain onClick={replyContentHandler} purple>Post Reply</ButtonMain>
    </AddReplyContainer>
  )
}

export default AddReply
