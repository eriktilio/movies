import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Category from "../../components/Category";
import Movie from "../../interfaces";
import api from "../../service/api";
import { Container, Body } from "./styles";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const fetchData = async () => {
    await api.get("/movies").then((res) => {
      const { data } = res;
      setMovies(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      <Body>
        <Category title="Top 10 da semana" carousel list={movies} />
        <Category title="Filmes e séries" list={movies} />
      </Body>
    </Container>
  );
};

export default Home;
