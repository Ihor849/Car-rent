import styled from "styled-components";

export const StyledButton = styled.button`
font-family: inherit;
font-weight: 500;
font-size: 16px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
border: none;
border-radius: 12px;
background: var(--blue);
color: var(--white);
padding: 12px ;
cursor: pointer;
outline: none;

transition: all 0.4s ease; 

&:hover, &:focus {
  transition: all 0.4s ease; 
  background: var(--hover-blue);
 }
`