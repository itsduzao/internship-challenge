import styled from 'styled-components';

export const StyledButton = styled.button`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 0.5rem 1rem;
font-size: 0.875rem;
font-weight: 500;
color: white;
background-color: rgb(17, 24, 39);
border: none;
border-radius: 0.375rem;
cursor: pointer;

&:hover {
  background-color: rgba(17, 24, 39, 0.9);
}

&:disabled {
  background-color: rgb(156, 163, 175);
  cursor: not-allowed;
}

& > svg {
  margin-right: 0.5rem;
}
`;