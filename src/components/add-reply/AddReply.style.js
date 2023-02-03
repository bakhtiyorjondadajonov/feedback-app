import styled from "styled-components";

export const AddReplyContainer=styled.div`
grid-column: 2/span 2;
margin-top: 1.5rem;
margin-bottom: 1.5rem;
grid-row: 4/span 1;
display: grid;
grid-template-columns: 1fr min-content;
align-items: start;
gap: 2rem;
`
export const TextArea=styled.textarea`


border-radius: 10px;
border-color:var(--blue);
padding: 0.5rem 1rem;
&:focus{
    outline:1px solid var(--blue);
}

`