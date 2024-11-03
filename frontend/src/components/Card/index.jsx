import { CardWrapper, CardHeader, CardTitle, CardContent } from './styles';

export const Card = ({ title, children }) => (
  <CardWrapper>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </CardWrapper>
);