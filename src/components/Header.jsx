import React from "react"
import styled from "styled-components"

import { Logo } from ".//Logo"

const Lead = styled.p`
  margin-bottom: 1rem;
`

const Root = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 65vh;
  flex-direction: column;
  justify-content: center;
  max-width: calc(8 * 57px + 4rem);
  padding: 2rem;
  text-align: center;
  width: 100%;

  h1 {
    margin-top: 0;
    font-size: 8rem;
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
      <Lead>
        The Super Grand National World Hacker Bowl Cup Games
        <br />
        <span>casually known as</span>
      </Lead>
      <h1>The Hackathon</h1>
      <p>
        <em>24/07/2020 - 26/07/2020</em>
      </p>
    </Root>
  )
}
