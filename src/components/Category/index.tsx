import React from "react";
import CardList from "../CardList";
import CardCarousel from "../CardCarousel";
import { Container } from "./styles";

interface CategoryProps {
  title: string;
  carousel?: boolean;
  cardList?: Array<any>;
}

const Category: React.FC<CategoryProps> = ({
  title,
  carousel = false,
  cardList,
}) => {
  return (
    <Container>
      <h2>{title}</h2>
      {carousel ? <CardCarousel /> : <CardList />}
    </Container>
  );
};

export default Category;
