import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 8vh;
  width: 100%;

  input {
    padding-left: 0.8vw;
    height: 100%;
    width: 100%;
    outline: 0;
    color: var(--white);
    font-size: 2vh;
    border: 0.2vh solid #ddd;
    border-radius: 0.8vh;
    background-color: transparent;
  }

  label {
    padding-left: 1vw;
    position: absolute;
    transform: translate(0, 100%) scale(1);
    color: #999;
    pointer-events: none;
    transform-origin: top left;
    transition: all 0.2s ease-out;
  }

  &:focus-within label,
  .active {
    transform: translate(0, 30%) scale(0.8);
  }
`;
