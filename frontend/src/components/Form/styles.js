import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  
  &:focus {
    outline: none;
    border-color: rgba(17, 24, 39, 0.5);
    box-shadow: 0 0 0 1px rgb(17, 24, 39);
  }
  
  &:disabled {
    background-color: rgba(17, 24, 39, 0.5);
    cursor: not-allowed;
  }
`;