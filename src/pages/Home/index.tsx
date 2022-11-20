import React from "react";
import Header from "../../components/Header";
import Category from "../../components/Category";
import { Container, Body } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Category title="Top 10 da semana" carousel />
        <Category title="Filmes e séries" />
      </Body>
    </Container>
  );
};

export default Home;
