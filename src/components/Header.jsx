import React from "react"
import styled from "styled-components"

import { Glitch } from "./Glitch"
import { Logo } from "./Logo"

const Lead = styled.p`
  margin-bottom: 1rem;
  font-family: "Lato", sans-serif;
  font-size: 0.9rem;
  line-height: 1.2em;
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
      <Glitch />
      <p>
        <em>24/07/2020 - 26/07/2020</em>
      </p>
    </Root>
  )
}
