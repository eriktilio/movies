import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    /*PALETA DE CORES*/
    --color1: #060606;
    --color2: #1d262d;
    --color3: #3c505d;
    --color4: #5c7c94;
    --color5: #7db5d2;

    /*VAR FIXAS*/
    --font: 'Maven Pro', sans-serif;
    --white: #fff;
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
    background: var(--color1);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
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

  button {
    cursor: pointer;
  }

  /*CUSTOM SCROLLBAR*/
  /* width */
  ::-webkit-scrollbar {
    width: 0.5vw;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 0.5vh #0558a5; */
    border-radius: 1vh;
    background-color: #D4E3EC;
    /* border: none; */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #0558a5;
    border-radius: 1vh;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #004188;
  }
  /**/
`;
