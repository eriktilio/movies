import React from "react";
import Card from "../../components/Card";
import Movie from "../../interfaces";
import { Container } from "./styles";

interface CardListProps {
  list: Movie[];
}

const CardList: React.FC<CardListProps> = ({ list }) => {
  return (
    <Container>
      {list.map((item: Movie, index: number) => {
        return <Card key={index} item={item} />;
      })}
    </Container>
  );
};

export default CardList;
