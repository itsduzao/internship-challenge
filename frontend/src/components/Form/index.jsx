import { FormWrapper, FormGroup, Label, Input } from './styles';

export const Form = ({ children, ...props }) => (
  <FormWrapper {...props}>{children}</FormWrapper>
);

export const FormField = ({ label, id, ...props }) => (
  <FormGroup>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} {...props} />
  </FormGroup>
);