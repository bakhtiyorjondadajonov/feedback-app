import React, { useContext } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ProductRequestContext } from '../../context/productRequestsContext'
import { ButtonMain } from '../Buttons'
import DropDown from '../forms/drop-down/DropDown'

const NavigationStyle=styled.nav`
border-radius: 10px;
display: flex;
gap: 2rem;
padding: 1.4rem 1.6rem;
align-items: center;
background-color: var(--color-primary--dark);
.navigation__suggestions{
    color:var( --color-secondary);
font-size: 14px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0px;
text-align: left;
.number{
   margin-right:1rem; 
}
}
.navigation__sort{
    color: var(--color-primary--light);
    font-family: Jost;
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0px;
text-align: left;
display: flex;
align-items: center;
gap: 1rem;
span{
  width: 18rem;
    font-weight:700;
    &>*{
padding: 0.2rem 0.8rem !important;
    }
}
}
a{
    margin-left: auto;
}



`
function Navigation() {
  const {sortProductReqs}=useContext(ProductRequestContext)
  const dataReceiver=(data)=>{
console.log(data);
sortProductReqs(data);


  }
  const {productRequests}=useContext(ProductRequestContext)
  return (
    <NavigationStyle >
      <div className="navigation__logo">
<svg width="23" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 2.274c2.237 0 4.339.854 5.923 2.408a8.123 8.123 0 012.465 5.839 8.084 8.084 0 01-1.7 4.979 8.457 8.457 0 01-3.652 2.71l-.31.112.003.826h.369c.262 0 .475.21.475.469a.47.47 0 01-.39.46l-.085.008h-.365l.004 1.02h.36c.263 0 .476.21.476.469a.47.47 0 01-.39.461l-.085.008h-.358l.006 1.487a.466.466 0 01-.381.46l-.094.01H9.23a.478.478 0 01-.466-.378l-.01-.092.006-1.487h-.357a.472.472 0 01-.475-.47.47.47 0 01.39-.46l.085-.008h.361l.004-1.02h-.365a.472.472 0 01-.475-.468.47.47 0 01.39-.462l.085-.007h.368l.004-.826a8.452 8.452 0 01-3.996-2.867 8.08 8.08 0 01-1.666-5.056c.032-2.127.923-4.152 2.511-5.7 1.508-1.471 3.448-2.322 5.493-2.416l.324-.009h.06zm1.791 19.769H9.709l-.004 1.02h3.59l-.004-1.02zm-.007-1.958H9.716l-.003 1.02h3.574l-.003-1.02zM11.5 3.212h-.054c-3.946.027-7.327 3.325-7.384 7.2-.048 3.266 2.14 6.192 5.322 7.118.174.05.3.193.332.364l.008.088-.004 1.166h3.56l-.004-1.166a.47.47 0 01.34-.452c3.134-.912 5.323-3.794 5.323-7.01a7.197 7.197 0 00-2.185-5.173A7.453 7.453 0 0011.5 3.212zm.829 1.782a.4.4 0 01.401.397v.322c.48.12.932.307 1.346.552l.228-.226a.405.405 0 01.569 0L16.046 7.2a.393.393 0 010 .56l-.23.228c.247.41.437.858.557 1.333h.323a.4.4 0 01.402.397v1.645a.4.4 0 01-.402.396h-.323c-.12.476-.31.924-.557 1.333l.23.228a.393.393 0 010 .56l-1.173 1.163a.405.405 0 01-.57 0l-.227-.227a5.02 5.02 0 01-1.346.553v.322a.4.4 0 01-.401.396H10.67a.4.4 0 01-.402-.396v-.322a5.022 5.022 0 01-1.345-.553l-.228.227a.405.405 0 01-.569 0L6.954 13.88a.393.393 0 010-.56l.23-.228a4.924 4.924 0 01-.557-1.333h-.324a.4.4 0 01-.401-.396V9.719a.4.4 0 01.401-.397h.324c.12-.475.31-.923.557-1.333l-.23-.228a.393.393 0 010-.56L8.127 6.04a.405.405 0 01.569 0l.228.226a5.021 5.021 0 011.345-.552V5.39a.4.4 0 01.402-.397zM11.5 7.721c-1.572 0-2.846 1.263-2.846 2.82 0 1.558 1.274 2.82 2.846 2.82s2.846-1.262 2.846-2.82c0-1.557-1.274-2.82-2.846-2.82zm11.025 4.152c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008h-.498a.472.472 0 01-.475-.469.47.47 0 01.39-.461l.085-.008h.498zm-21.552 0c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008H.475A.472.472 0 010 12.342a.47.47 0 01.39-.461l.085-.008h.498zM3.112 3.45l.074.06.46.451c.185.183.186.48 0 .663a.476.476 0 01-.596.062l-.075-.06-.459-.451a.465.465 0 01-.001-.663.48.48 0 01.597-.062zm17.373.062c.162.16.182.408.06.59l-.061.073-.46.45a.476.476 0 01-.67 0 .464.464 0 01-.06-.59l.06-.074.46-.45a.48.48 0 01.671 0zM11.5 0c.233 0 .427.166.467.384l.008.085v.49a.472.472 0 01-.475.468.473.473 0 01-.467-.384l-.008-.084v-.49c0-.26.213-.469.475-.469z" fill="#FFF" fill-rule="nonzero"/></svg>
      </div>
      <div className="navigation__suggestions">
        <span className="number">{productRequests.length}</span>

        <span>Suggestions</span>
      </div>
        <div className="navigation__sort">
          <div>
            Sort by:
          </div>
          <span>
           <DropDown dataReceiver={dataReceiver} gray options={["Most Upvotes","Least Upvotes"]} />

          </span>
        </div>
        {/* <Link to='sign-in'><ButtonMain blue>Sign In</ButtonMain></Link> */}
        <Link to="new-feedback"><ButtonMain purple>+ Add Feedback</ButtonMain></Link>
    </NavigationStyle>
  )
}

export default Navigation
