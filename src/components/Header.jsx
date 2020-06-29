import React from "react"
import styled from "styled-components"

import { GlitchText } from "./GlitchText"
import { Logo } from "./Logo"

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
      <GlitchText>The Hackathon</GlitchText>
      <p>
        <em>24/07/2020 - 26/07/2020</em>
      </p>
    </Root>
  )
}
