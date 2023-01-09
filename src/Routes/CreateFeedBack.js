import React from 'react'
import {Link} from "react-router-dom"
import { ButtonMain } from '../components/Buttons'
import DropDown from '../components/forms/drop-down/DropDown'
import { Form } from '../components/forms/Form'
import FormInput from '../components/forms/FormInput'
import FormLabel from '../components/forms/FormLabel'

import FormWrapper from '../components/forms/FormWrapper'

function CreateFeedBack() {
    const dataReceiver=(data)=>{
        console.log("chosen option",data)
    }
  return (
    <FormWrapper>
<ButtonMain as='a' href="/" transparent> <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg> Go Back</ButtonMain>
   <Form>
   <svg className='form-icon' width="56" height="56" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a"><stop stop-color="#E84D70" offset="0%"/><stop stop-color="#A337F6" offset="53.089%"/><stop stop-color="#28A7ED" offset="100%"/></radialGradient></defs><g fill="none" fill-rule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28"/><path fill="#FFF" fill-rule="nonzero" d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"/></g></svg>
    <h1 className="title">
    Create New Feedback
    </h1>
      <div>
        <FormLabel>
<span>Feedback title</span>
<span>Add a short, descriptive headline</span>
        </FormLabel>
        <FormInput />
      </div>
      <div>
        <FormLabel>
<span>Category</span>
<span>
    Choose the category for your feedback
</span>
        </FormLabel>
        <DropDown dataReceiver={dataReceiver} options={["option 1","option 2","option 3"]}/>
      </div>
      <div>
        <FormLabel>
<span>Feedback Detail</span>
<span>Include any specific comments on what should be improved, added, etc.</span>
        </FormLabel>
        <textarea name="" id="" cols="30" rows="5"></textarea>
      </div>


    

   </Form>
    </FormWrapper>
  )
}

export default CreateFeedBack
