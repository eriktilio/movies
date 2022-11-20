import React from "react";
import Card from "../../components/Card";
import { Container } from "./styles";

const CardList: React.FC = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default CardList;
