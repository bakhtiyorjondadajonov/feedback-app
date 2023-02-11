import styled from "styled-components";
import { SideBarCard } from "../SideBarCard";

export const FilterStyle=styled(SideBarCard)`
display: flex;
flex-wrap: wrap;
column-gap:0.8rem;
row-gap: 1.4rem;
background-color: var(--color-secondary);
.btn-category{
    height: max-content;
}
`