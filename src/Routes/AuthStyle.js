import styled from "styled-components";
import { Form } from "../components/forms/Form";

const AuthForm=styled(Form)`
width:500px;
background-color:var(--color-primary--dark) ;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
h1{
    color: #fff;
    font-size: 3.5rem;
    margin-bottom: 1rem;
    text-align: center
}
div{
    display: flex;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h2{
    color: #fff !important;
    display: block;
    
    font-weight: 700 !important;
    margin-bottom: 0.5rem !important;
}
button{
   width:80%; 
   text-align: center;
   text-transform: uppercase;
}

p{
    display: flex;
    
    gap: 1rem;
    align-items: center;
}
a{
    color: white;
    &:hover{
        color: var(--blue);
    }
}
`
export default AuthForm