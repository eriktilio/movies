import React from "react";
import Movie from "../../interfaces";
import { Container, Overlay } from "./styles";

interface CardProps {
  item: Movie;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <Container>
      <Overlay>
        <h3>{item.title}</h3>
        <span>{item.overview}</span>
      </Overlay>
    </Container>
  );
};

export default Card;
