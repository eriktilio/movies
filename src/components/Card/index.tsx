import React from "react";
import { Container, Overlay } from "./styles";

const Card: React.FC = () => {
  return (
    <Container>
      <Overlay>
        <h3>Titulo do filme aqui</h3>
        <span>Descrição do filme aqui</span>
      </Overlay>
    </Container>
  );
};

export default Card;
