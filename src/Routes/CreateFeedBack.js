import React, { useContext, useReducer } from 'react'
import {Link,useNavigate} from "react-router-dom"
import { ButtonMain } from '../components/Buttons'
import DropDown from '../components/forms/drop-down/DropDown'
import { Form } from '../components/forms/Form'
import FormInput from '../components/forms/FormInput'
import FormLabel from '../components/forms/FormLabel'

import FormWrapper from '../components/forms/FormWrapper'
import { ProductRequestContext } from '../context/productRequestsContext'
import { MySwal, randomID } from '../utils/firebase/firebase'


const INITIAL_STATE={
  title:"",
  description:"",
category:""
}
const ACTION_TYPES={
  TITLE_CHANGE:"TITLE_CHANGE",
  CATEGORY_CHANGE:'CATEGORY_CHANCHE',
  DESCRIPTION_CHANGE:"DESCRIPTION_CHANGE",
  FORM_SUBMIT:'FORM_SUBMIT'
}
const feedBackReducerFn=(state,action)=>{
const {type,payload}=action
  switch(type){
case ACTION_TYPES.TITLE_CHANGE:
  return {
    ...state,
    title:payload
  };
  case ACTION_TYPES.CATEGORY_CHANGE:
    return {
      ...state,
      category:payload
    };
    case ACTION_TYPES.DESCRIPTION_CHANGE:
      return{
        ...state,
        description:payload
      };
      case ACTION_TYPES.FORM_SUBMIT:
        return INITIAL_STATE
      default: return state
  }
}
function CreateFeedBack() {
  const navigatorFn=useNavigate()
 const {addNewProductRequest}=useContext(ProductRequestContext)
  const [state,dispatch]=useReducer(feedBackReducerFn,INITIAL_STATE)
    const dataReceiver=(data)=>{
       if(data==="" || !data)return alert("You must choose category")
       dispatch({
        type:ACTION_TYPES.CATEGORY_CHANGE,
        payload:data
       })
    }
const inputHandler=(e)=>{
  const title=e.target.value
  dispatch({
    type:ACTION_TYPES.TITLE_CHANGE,
    payload:title
  })
}
const textAreaHandler=(e)=>{
const description=e.target.value
dispatch({
  type:ACTION_TYPES.DESCRIPTION_CHANGE,
  payload:description
})
}
    const formHandler=(e)=>{
e.preventDefault()
const randomId=randomID()
const newProductRequest={
  id:randomId,
  category:state.category,
  upvotes:1,
  status:"suggestion",
  title:state.title,
  description:state.description,
  comments:[]
}
addNewProductRequest(newProductRequest)
dispatch({
  type:ACTION_TYPES.FORM_SUBMIT
})
navigatorFn("/")
MySwal.fire({
  position: 'center',
  icon: 'success',
  title: 'Your feedback has been saved',
  showConfirmButton: false,
  timer: 2000
})

    }
  return (
    <FormWrapper>
<Link to="/"><ButtonMain   transparent> <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg> Go Back</ButtonMain></Link>
   <Form onSubmit={formHandler}>
   <svg className='form-icon' width="56" height="56" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a"><stop stop-color="#E84D70" offset="0%"/><stop stop-color="#A337F6" offset="53.089%"/><stop stop-color="#28A7ED" offset="100%"/></radialGradient></defs><g fill="none" fill-rule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28"/><path fill="#FFF" fill-rule="nonzero" d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"/></g></svg>
    <h1 className="title">
    Create New Feedback
    </h1>
      <div>
        <FormLabel htmlFor='title'>
<span>Feedback title</span>
<span>Add a short, descriptive headline</span>
        </FormLabel>
        <FormInput id="title" value={state.title} onChange={inputHandler} name="title" />
      </div>
      <div>
        <FormLabel htmlFor='category'>
<span>Category</span>
<span>
    Choose the category for your feedback
</span>
        </FormLabel>
        <DropDown dataReceiver={dataReceiver} options={["UI","UX","Enhancement","Bug","Feature"]}/>
      </div>
      <div>
        <FormLabel>
<span>Feedback Detail</span>
<span>Include any specific comments on what should be improved, added, etc.</span>
        </FormLabel>
        <textarea value={state.description} onChange={textAreaHandler} name="textArea" id="" cols="30" rows="5"></textarea>
      </div>
<div style={{display:"flex",gap:"2rem",justifyContent:"right"}}>
 <Link to="/"> <ButtonMain type='button' gray>Cancel</ButtonMain></Link>
  <ButtonMain type="submit" purple>Add feedback</ButtonMain>
</div>

    

   </Form>
    </FormWrapper>
  )
}

export default CreateFeedBack
