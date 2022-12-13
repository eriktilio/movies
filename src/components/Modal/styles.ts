import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  colort: var(--white);
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(--overlay);
  user-select: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color1);
  border-radius: 1vh;
  padding: 3vh;
  height: 70%;
  width: 40%;

  form {
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  height: 10%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  gap: 10%;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 10%;
  gap: 1vw;
`;
