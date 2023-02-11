import styled from "styled-components";
import RoadmapCard from "../RoadmapCard/RoadmapCard";


export const RoadmapColumnContainer=styled.div`
display: flex;
flex-direction: column;
width:100%;
gap: 2rem;
`

const RoadmapColumn=()=>{
    return (
        <RoadmapColumnContainer>
            <RoadmapCard/>
            <RoadmapCard/>
        </RoadmapColumnContainer>
    )
}
export default RoadmapColumn