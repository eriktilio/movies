import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  padding: 2rem 0;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  justify-content: center;
  justify-items: center;
`;
