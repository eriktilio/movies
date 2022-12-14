import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    /*PALETA DE CORES*/
    --color1: #141414;
    --color2: #1d262d;
    --color3: #3c505d;
    --color4: #5c7c94;
    --color5: #7db5d2;

    /*VAR FIXAS*/
    --font: 'Maven Pro', sans-serif;
    --white: #fff;
    --overlay: rgba(0, 0, 0, 0.5);
  }

  *{
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  html body {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(var(--color1), #000);
    background-repeat: no-repeat;
    color: var(--white);
    -webkit-font-smoothing: antialiased;
    font-size: 2vh;
  }

  body, input, button {
    font-family: var(--font);
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  h1 {
    font-size: 5vh;
  }

  h2 {
    font-size: 4vh;
  }

  h3 {
    font-size: 3vh;
  }

  span {
    font-size: 2vh;
  }

  p {
    font-size: 1.8vh;
  }

  button {
    cursor: pointer;
  }

  /*CUSTOM SCROLLBAR*/
  /* width */
  ::-webkit-scrollbar {
    width: 0.65vw;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: var(--color4);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color3);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color2);
  }
  /**/
`;
