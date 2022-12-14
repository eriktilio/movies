import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Category from "../../components/Category";
import Modal from "../../components/Modal";
import Movie from "../../interfaces";
import api from "../../service/api";
import { Container, Body } from "./styles";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const fetchData = async () => {
    try {
      await api.get("/movies").then((res) => {
        setMovies(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Header handleAddMovie={() => setShowModal(true)} />
      <Body>
        <Category title="Top 10 da semana" carousel list={movies} />
        <Category title="Filmes e séries" list={movies} />
        <Modal show={showModal} onClose={() => setShowModal(false)} />
      </Body>
    </Container>
  );
};

export default Home;
