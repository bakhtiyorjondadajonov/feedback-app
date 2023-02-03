import React from 'react'
import { ButtonMain } from '../Buttons';
import {ReactComponent as ArrowLeft} from "./icon-arrow-left.svg"
import { CommentsNavStyle } from './CommentsNav.style'
import { Link } from 'react-router-dom';

function CommentsNav() {
  return (
    <CommentsNavStyle>
      <Link to="/">
      <ButtonMain transparent><ArrowLeft/><span>  Go Back</span></ButtonMain>
      </Link>
      <Link to="/edit-feedback">
      <ButtonMain  blue>Edit feedback</ButtonMain>
      </Link>
    </CommentsNavStyle>
  )
}

export default CommentsNav
