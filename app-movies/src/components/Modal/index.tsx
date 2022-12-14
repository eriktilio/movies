import React, { useRef } from "react";
import Input from "../Input";
import InputImage from "../InputImage";
import Button from "../Button";
import { Form } from "@unform/web";
import { CgClose } from "react-icons/cg";
import { HiCheck } from "react-icons/hi";
import { Overlay, Container, Header, Body, Footer } from "./styles";
import api from "../../service/api";

interface Props {
  show: boolean;
  onClose: Function;
}

const Modal: React.FC<Props> = ({ show, onClose }) => {
  const formRef = useRef(null);
  const handleSubmit = async (data: Object) => {
    try {
      await api.post("/movies", data);
    } catch (error) {
      console.log(error);
    } finally {
      onClose();
    }
  };

  if (!show) return null;
  return (
    <Overlay onClick={() => onClose()}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Header>
          <h3>Adicionar um novo filme</h3>
        </Header>
        <Form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
          <Body>
            <Input type="text" name="title">
              Titulo
            </Input>
            <Input type="text" name="overview">
              Descrição
            </Input>
            <InputImage name="urlPoster" />
          </Body>
          <Footer>
            <Button onClick={() => onClose()}>
              <CgClose />
              Fechar
            </Button>
            <Button type="submit">
              <HiCheck />
              Concluir
            </Button>
          </Footer>
        </Form>
      </Container>
    </Overlay>
  );
};

export default Modal;
