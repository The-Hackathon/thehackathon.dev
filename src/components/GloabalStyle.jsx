import { createGlobalStyle } from "styled-components"

import "../fonts.css"

export const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper  {
    background: white;
    color: #333;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    height: 100%;
    line-height: 1.2em;
    margin: 0;
    padding: 0;
    width: 100%;
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
    font-size: 3.5rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  h1,h2,h3 {
    line-height: 1em;
    margin-top: 1em;
    margin-bottom: 1rem;
    font-family: 'Merriweather', serif;
    font-weight: bold;
  }

  li {
    margin-bottom: 1rem;
  }

  ul {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`
