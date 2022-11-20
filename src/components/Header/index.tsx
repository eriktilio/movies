import React from "react";
import { SlFilm, SlPlus } from "react-icons/sl";
import { Container, Logo, Options, Item } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <SlFilm /> Movies
      </Logo>
      <Options>
        <Item>
          <SlPlus />
          Adicionar
        </Item>
      </Options>
    </Container>
  );
};

export default Header;
