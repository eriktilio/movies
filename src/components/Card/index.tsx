import React from "react";
import { Container, Overlay } from "./styles";

const Card: React.FC = () => {
  return (
    <Container>
      <Overlay>
        <h3>Titulo do filme aqui</h3>
      </Overlay>
    </Container>
  );
};

export default Card;
