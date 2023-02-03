import React, { useContext, useState } from 'react'
import { ProductRequestContext } from '../../context/productRequestsContext'
import { UserContext } from '../../context/userContext'
import AddReply from '../add-reply/AddReply'
import { ButtonMain } from '../Buttons'
import { ButtonReply, CommentCard, Content, Name, UserImage, UserName } from './Comment.style'

function Comment({comment,saveNewReply}) {
    const {currentUser}=useContext(UserContext);
    const {currentProductRequest}=useContext(ProductRequestContext)
    const replyContentReceiver=(replyContent)=>{
        const newReplyData={
            content:replyContent,
            replyingTo:comment.user.username,
            user:{
                image:"./avatar.svg",
                name:currentUser.displayName,
username:currentUser.displayName.split(" ")[0].toLowerCase()
            }
        }
        saveNewReply(newReplyData)
    }
    const [replyCondition,setReplyCondition]=useState(false);
    const replyHandler=(e)=>{  
       
setReplyCondition(!replyCondition)
    }   
  return (
    <CommentCard class="comment">
          <UserImage
            src={`./../../..${comment.user.image.slice(1,)}`}
            alt={comment.user.name}
          />
          <Name class="">{comment.user.name}</Name>
          <UserName>@{comment.user.username}</UserName>
          <Content>
            <span style={{
                fontWeight:700,
color:"var(--purple)"
            }}>{comment.replyingTo?`@${comment.replyingTo}`:""}</span> {comment.content}
          </Content>
          <ButtonReply onClick={replyHandler}  transparent>Reply</ButtonReply>
          {replyCondition && <AddReply setReplyCondition={setReplyCondition} replyContentReceiver={replyContentReceiver}/>}
        </CommentCard>
  )
}

export default Comment
