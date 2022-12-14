import React from "react";
import Movie from "../../interfaces";
import { Container, Overlay } from "./styles";

interface Props {
  item: Movie;
}

const Card: React.FC<Props> = ({ item }) => {
  return (
    <Container urlPoster={item.urlPoster}>
      <Overlay>
        <h3>{item.title}</h3>
        <p>{item.overview}</p>
      </Overlay>
    </Container>
  );
};

export default Card;
