import { createGlobalStyle } from "styled-components"

import "../fonts.css"

export const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper  {
    color: #edbbb2;
    background: #282828;
    height: 100%;
    width: 100%;
    font-size: 16px;
    font-family: 'JetBrains', sans-serif;
    line-height: 1.2rem;
    margin: 0;
    padding: 0;
  }

  a {
    color: #fe8019;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h1,h2,h3 {
    line-height: 1em;
    margin-top: 1em;
    margin-bottom: 1rem;
  }
`
