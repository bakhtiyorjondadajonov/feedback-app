import React from 'react'
import { BtnCategory, BtnUpvotes, ButtonMain } from '../../Buttons'
import { ButtonsContainer, CardContainer, Description, Status, Title } from './RoadmapCardStyle'

function RoadmapCard() {
  return (
    <CardContainer>
     <Status>
        Planned
        </Status> 
        <Title>More comprehensive reports</Title>
        <Description>
        It would be great to see a more detailed breakdown of solutions.
        </Description>
        <BtnCategory>status</BtnCategory>
        <ButtonsContainer>

        <BtnUpvotes className='btn-upvotes'><svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
    <span className='number'>5</span></BtnUpvotes>
        <ButtonMain  className="comments-btn" transparent >
    <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fill-rule="nonzero"/></svg>
    <h3>111</h3>
    </ButtonMain>
        </ButtonsContainer>
    </CardContainer>
  )
}

export default RoadmapCard
