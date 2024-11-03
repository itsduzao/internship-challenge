import styled from 'styled-components';

export const AlertWrapper = styled.div`
  padding: 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  
  ${props => props.variant === 'error' && `
    background-color: #fee2e2;
    color: #991b1b;
    border: 1px solid #fecaca;
  `}
  
  ${props => props.variant === 'success' && `
    background-color: #f0fdf4;
    color: #166534;
    border: 1px solid #dcfce7;
  `}
`;