import React from "react";
import { GiFilmSpool } from "react-icons/gi";
import { Container, Logo, Options, Item } from "./styles";

interface Props {
  handleAddMovie: Function;
}

const Header: React.FC<Props> = ({ handleAddMovie }) => {
  return (
    <Container>
      <Logo>
        <h1>
          <GiFilmSpool /> The Movies
        </h1>
      </Logo>
      <Options>
        <Item onClick={() => handleAddMovie()}>Adicionar</Item>
      </Options>
    </Container>
  );
};

export default Header;
