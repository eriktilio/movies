import React from "react";
import Card from "../../components/Card";
import Movie from "../../interfaces";
import { Container } from "./styles";

interface Props {
  list: Movie[];
}

const CardList: React.FC<Props> = ({ list }) => {
  return (
    <Container>
      {list.map((item: Movie, index: number) => {
        return <Card key={index} item={item} />;
      })}
    </Container>
  );
};

export default CardList;
