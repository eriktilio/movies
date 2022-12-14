import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3vw;
  height: fit-content;
  width: fit-content;
  border: none;
  border-radius: 1vh;
  padding: 1vh 1.5vh;
  font-size: 2.45vh;
  font-weight: normal;
  background-color: transparent;
  color: #fff;

  &:hover {
    color: #bfbfbf;
  }
`;
