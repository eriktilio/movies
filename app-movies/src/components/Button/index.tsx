import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => (
  <Container type="button" {...rest} style={rest.style}>
    {children}
  </Container>
);

export default Button;
