import { createGlobalStyle } from "styled-components";
import "./fonts.css";

const GlobalStyles = createGlobalStyle`
*,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

html {
    font-size: 62.5%;
  }
  @media (max-width: 480px) {
    html {
      font-size: 50%; /* 1rem = 8px */
    }
  }

  /* Stylowanie dla średnich ekranów (tablety) */
  @media (min-width: 481px) and (max-width: 768px) {
    html {
      font-size: 56.25%; /* 1rem = 9px */
    }
  }

  /* Stylowanie dla dużych ekranów (małe laptopy) */
  @media (min-width: 769px) and (max-width: 1024px) {
    html {
      font-size: 62.5%; /* 1rem = 10px */
    }
  }

  /* Stylowanie dla bardzo dużych ekranów (duże laptopy i monitory) */
  @media (min-width: 1025px) {
    html {
      font-size: 68.75%; /* 1rem = 11px */
    }
  }

  body {
    font-family: "Roboto", sans-serif;
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline-offset: -1px;
  }

  button:has(svg) {
    line-height: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
