import styled from "styled-components";
import { SideBarCard } from "../SideBarCard";

export const RoadMapStyle=styled(SideBarCard)`
display: flex;
flex-direction: column;
gap: 0.8rem;
background-color: var(--color-secondary);
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
& a{
    padding:0;
    &>button{
        padding: 0 !important;
    }
   &:hover{
    text-decoration: underline;
   }
}
}
`