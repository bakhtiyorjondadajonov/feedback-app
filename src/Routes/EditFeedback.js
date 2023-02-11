import React, { useContext, useReducer } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { ButtonMain } from '../components/Buttons'
import DropDown from '../components/forms/drop-down/DropDown'
import { Form } from '../components/forms/Form'
import FormInput from '../components/forms/FormInput'
import FormLabel from '../components/forms/FormLabel'
import FormWrapper from '../components/forms/FormWrapper'
import { ProductRequestContext } from '../context/productRequestsContext'
import { MySwal } from '../utils/firebase/firebase'
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
          default: return state
      }
    }
function EditFeedback() {
  const navigatorFn=useNavigate()
    const {currentProductRequest,editProductRequestHandler}=useContext(ProductRequestContext);
   
    const [state,dispatch]=useReducer(feedBackReducerFn,currentProductRequest)
    const dataReceiver=(data)=>{
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
        console.log("state",state);
        editProductRequestHandler(state);
        // navigatorFn("/")
MySwal.fire({
  position: 'center',
  icon: 'success',
  title: 'Your feedback has been updated',
  showConfirmButton: false,
  timer: 2000
})

            }

        const deleteButtonHandler=()=>{
          MySwal.fire({
            icon: 'error',
            title: 'Unauthorized...',
            text: 'Only admin can delete feedbacks!',
            
          })
        }    
  return (
   <FormWrapper>
    <Link to="/"><ButtonMain   transparent> <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg> Go Back</ButtonMain></Link>
<Form onSubmit={formHandler}>
<svg className='form-icon' width="40" height="40" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a"><stop stop-color="#E84D70" offset="0%"/><stop stop-color="#A337F6" offset="53.089%"/><stop stop-color="#28A7ED" offset="100%"/></radialGradient></defs><g fill="none" fill-rule="evenodd"><circle fill="url(#a)" cx="20" cy="20" r="20"/><path d="M19.512 15.367l4.975 4.53-3.8 5.54L11.226 29l4.485-4.1c.759.275 1.831.026 2.411-.594a1.958 1.958 0 00-.129-2.82c-.836-.745-2.199-.745-2.964.068-.57.607-.767 1.676-.44 2.381L11 28.713c.255-1.06.683-2.75 1.115-4.436l.137-.531c.658-2.563 1.287-4.964 1.287-4.964l5.973-3.415zM23.257 12L28 16.443l-2.584 2.606-4.89-4.583L23.257 12z" fill="#FFF" fill-rule="nonzero"/></g></svg>
<h1 className="title">Editing Add a dark theme option</h1>
<div>
    <FormLabel htmlFor='title'>
        <span>
            Feedback Title
        </span>
        <span>Add a short, descriptive headline</span>
    </FormLabel>

   <FormInput onChange={inputHandler} id="title"/>
</div>
<div>
        <FormLabel>
<span>Category</span>
<span>
    Choose the category for your feedback
</span>
        </FormLabel>
        <DropDown dataReceiver={dataReceiver} options={["UI","UX","Feature","Bug","Enhancement"]}/>
      </div>
      <div>
        <FormLabel>
<span>Feedback Detail</span>
<span>Include any specific comments on what should be improved, added, etc.</span>
        </FormLabel>
        <textarea onChange={textAreaHandler} name="" id="" cols="30" rows="5"></textarea>
      </div>
<div style={{display:"flex",gap:"1rem",justifyContent:"right"}}>
    <ButtonMain onClick={deleteButtonHandler} type='button' style={{marginRight:"auto"}} red>Delete</ButtonMain>
    <Link to="/"><ButtonMain type='button' gray>Cancel</ButtonMain></Link>
    <ButtonMain type='submit' purple>Add Feedback</ButtonMain>
</div>
</Form>


   </FormWrapper>
  )
}

export default EditFeedback
