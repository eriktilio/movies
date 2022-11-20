import React from "react";
import CardList from "../CardList";
import { Container } from "./styles";

interface CategoryProps {
  title: string;
  cardList?: Array<any>;
}

const Category: React.FC<CategoryProps> = ({ title, cardList }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <CardList />
    </Container>
  );
};

export default Category;
