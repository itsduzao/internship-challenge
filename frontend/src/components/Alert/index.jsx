import { AlertWrapper } from './styles';

export const Alert = ({ variant, children }) => (
  <AlertWrapper variant={variant}>{children}</AlertWrapper>
);