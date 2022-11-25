import React from "react";
import Input from "../Input";
import Button from "../Button";
import { CgClose } from "react-icons/cg";
import { HiCheck } from "react-icons/hi";
import { Overlay, Container, Header, Body, Footer } from "./styles";

interface Props {
  show: boolean;
  onClose: Function;
}

const Modal: React.FC<Props> = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <Overlay onClick={() => onClose()}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Header>
          <h3>Adicionar um novo filme</h3>
        </Header>
        <Body>
          <form>
            <Input type="text" name="title">
              Titulo
            </Input>
            <Input type="text" name="overview">
              Descrição
            </Input>
            <Input type="text" name="urlPoster">
              URL do pôster
            </Input>
          </form>
        </Body>
        <Footer>
          <Button onClick={() => onClose()}>
            <CgClose />
            Fechar
          </Button>
          <Button>
            <HiCheck />
            Concluir
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
};

export default Modal;
