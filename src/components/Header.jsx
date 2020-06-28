import React from "react"
import styled from "styled-components"

import { Logo } from ".//Logo"

const Root = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 65vh;
  flex-direction: column;
  font-family: "Merriweather", serif;
  justify-content: center;
  max-width: calc(8 * 57px + 4rem);
  padding: 2rem;
  text-align: center;
  width: 100%;

  p {
    margin-bottom: 1rem;
  }

  h1 {
    margin-top: 0;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 3rem;
    }
  }
`

export const Header = () => {
  return (
    <Root>
      <Logo />
      <p>
        The Super Grand National World Hacker Bowl Cup Games causally known as
      </p>
      <h1>The Hackathon</h1>
    </Root>
  )
}
