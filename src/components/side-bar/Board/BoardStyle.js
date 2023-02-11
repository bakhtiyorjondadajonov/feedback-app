import styled from "styled-components";
import { SideBarCard } from "../SideBarCard";


export const BoardStyle=styled(SideBarCard)`
background: radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%);
color: var(--color-secondary);
display: flex;

.container{
align-self: flex-end;
display: flex;
flex-direction: column;
gap: 0.5rem;

}
.title{
font-size: 20px;
font-weight: 700;
line-height: 29px;
letter-spacing: -0.25px;
text-align: left;
 
}
.sub-title{
font-size: 15px;
font-weight: 500;
line-height: 22px;
letter-spacing: 0px;
text-align: left;
 opacity: 0.7;
}
@media (max-width:900px) {
  border-radius  :0 !important;
  width: 100%;
  min-height:auto !important ;
 
}
`