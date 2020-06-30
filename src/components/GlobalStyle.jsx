import { createGlobalStyle } from "styled-components"

import "../fonts.css"

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-fuschia: #EF32DC;
    --color-aqua: #00f9ff;
    --color-blue: #154884;
    --color-black: #333333;
    --color-white: #ffffff;
    --color-eminence: #7A2E98;
  }

  html, body, #___gatsby, #gatsby-focus-wrapper  {
    background: var(--color-white);
    color: var(--color-black);
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    height: 100%;
    line-height: 1.5em;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  ::selection {
    background-color: var(--color-fuschia);
    color: var(--color-black);
  }

  a {
    color: inherit;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: 8rem;
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
    font-family: 'Mohave', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: -1px;
  }

  li {
    margin-bottom: 0.5rem;
  }

  ul {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`
