import React, { useContext } from 'react'
import { ProductRequestContext } from '../../context/productRequestsContext'
import Comment from '../comment/Comment'
import { RepliesContainer } from '../replies/Reply.style'
import { CommentsBoxCard } from './CommentsBox.style'

function CommentsBox({comment}) {
    const {addReplyHandler}=useContext(ProductRequestContext)
const saveNewReply=(newReply)=>{   
    comment.replies?comment.replies.push(newReply):comment.replies=[newReply]
addReplyHandler(comment)

}
  return (
    <CommentsBoxCard >
    <Comment saveNewReply={saveNewReply} comment={comment}/>
    <RepliesContainer>
        {comment.replies?comment.replies.map(reply=>{
            return (
                <Comment key={Math.random()} saveNewReply={saveNewReply} comment={reply}/>
            )
        }):""}
    </RepliesContainer>
    </CommentsBoxCard>
  )
}

export default CommentsBox
