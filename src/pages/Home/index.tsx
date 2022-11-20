import React from "react";
import Header from "../../components/Header";
import Category from "../../components/Category";
import { Container, Body } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Category title="Adicionados recentemente" />
        <Category title="Top 10" />
      </Body>
    </Container>
  );
};

export default Home;
