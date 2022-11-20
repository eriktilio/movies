import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: sticky;
  z-index: 1001;
  top: 0;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color1);
  height: 100%;
  padding: 1.5vh 3vw;
  user-select: none;
`;

export const Logo = styled.div`
  display: flex;
  cursor: pointer;
  color: #fff;

  h1 {
    display: flex;
    gap: 0.8vw;
    align-items: center;
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 2vw;
`;

export const Item = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 2.5vh;
  color: #fff;
  gap: 0.5vw;

  &:hover {
    color: #bfbfbf;
  }
`;
