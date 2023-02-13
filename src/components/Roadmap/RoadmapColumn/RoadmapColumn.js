import styled from "styled-components";
import RoadmapCard from "../RoadmapCard/RoadmapCard";
import { Description, Title } from "../RoadmapCard/RoadmapCardStyle";


export const RoadmapColumnContainer=styled.div`
display: flex;
flex-direction: column;
width:100%;
gap: 2rem;
`

const RoadmapColumn=({productRequests,status})=>{
    return (
        <RoadmapColumnContainer>
            <div>
            <Title>{status}({productRequests.length})</Title>
            {
                status=="planned"&&<Description>Ideas prioritized for research</Description>
            }
            {
                status=="in-progress"&&<Description>Currently being developed</Description>
            }
            {
                status=="live"&&<Description>Released features</Description>
            }
            
            
            </div>
            {
                productRequests.map(productRequest=>{
                    return (<RoadmapCard key={Math.random()} productRequest={productRequest}/>)
                })
            }
            
            
        </RoadmapColumnContainer>
    )
}
export default RoadmapColumn