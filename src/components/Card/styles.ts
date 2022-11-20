import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background: rgba(0, 0, 0, 0.7);
  transition: 0.3s ease;
  opacity: 0;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 1vh;
  background-color: var(--color5);
  height: 60vh;
  width: 100%;
  user-select: none;

  transition: transform 0.2s; /* Animation */

  &:hover {
    cursor: pointer;
    border-radius: 0;
    transform: scale(1.02);
  }

  &:hover ${Overlay} {
    opacity: 1;
  }
`;
