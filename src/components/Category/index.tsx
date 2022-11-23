import React from "react";
import CardList from "../CardList";
import CardCarousel from "../CardCarousel";
import Movie from "../../interfaces";
import { Container } from "./styles";

interface CategoryProps {
  title: string;
  carousel?: boolean;
  list: Movie[];
}

const Category: React.FC<CategoryProps> = ({
  title,
  carousel = false,
  list,
}) => {
  return (
    <Container>
      <h2>{title}</h2>
      {carousel ? <CardCarousel list={list} /> : <CardList list={list} />}
    </Container>
  );
};

export default Category;
