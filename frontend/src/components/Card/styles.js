import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 28rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.5rem 0 1.5rem;
`;

export const CardTitle = styled.h3`
  text-align: center;
  font-weight: 600;
  /* margin: 0; */
  letter-spacing: -.025em;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
`;