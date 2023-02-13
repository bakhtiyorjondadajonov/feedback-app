import styled from "styled-components";


export const CardContainer=styled.div`
position: relative;
overflow: hidden;
&:before{
    content: "";
    top: 0;
    left: 0;
    height: 5px;
    width: 100%;
    background-color:${
    ((props)=>{
if(props.status==="live") return "var(--light-blue)"
if(props.status==="in-progress") return "var(--purple)"
if(props.status==="planned") return "var(--orange)"

    })
    };
    position: absolute; 
}
.btn-upvotes{

  height:min-content;  
  display:flex ;
  flex-direction: row !important;

}
.comments-btn{
  display: flex;
  gap: 1rem;
  grid-column: 3/4;
  grid-row:2/3;
  justify-self: end;
}
display:flex;
flex-direction: column;
gap: 1rem;
background-color: white;
padding: 3rem;
border-radius: 10px;
`
export const ButtonsContainer=styled.div`
display: flex;
justify-content:space-between;
`
export const Status=styled.div`
text-transform:capitalize;
font-size: 16px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0px;
text-align: left;
position: relative;
margin-left: 1.5rem;
&:before{
content: "";
position: absolute;
width: 1rem;
height:1rem;
border-radius: 50%;
background-color:${((props)=>{
if(props.status==="live") return "var(--light-blue)"
if(props.status==="in-progress") return "var(--purple)"
if(props.status==="planned") return "var(--orange)"

    })};
top:50%;
transform:translateY(-50%);

left:-1.5rem;


}




`
export const Title=styled.div`
text-transform:capitalize;
font-size: 16px;
font-weight: 700;
line-height: 26px;
letter-spacing: -0.25px;
text-align: left;

`
export const Description=styled.div`
color:#647196;
font-size: 14px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0px;
text-align: left;

`
