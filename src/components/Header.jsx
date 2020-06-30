import React from "react"
import styled from "styled-components"

import { GlitchText } from "./GlitchText"
import { Champion } from "./Champion"

const Lead = styled.p`
  margin-bottom: 2rem;
  padding: 0 1rem;
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 65vh;
  max-width: calc(8 * 57px + 4rem);
  text-align: center;
  width: 100%;
  align-items: center;
`

const Title = styled.div`
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Date = styled.div`
  padding: 0 1rem;
  font-style: italic;
  margin-bottom: 14rem;

  @media (max-width: 800px) {
    margin-bottom: 8rem;
  }
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8rem;
`

export const Header = () => {
  return (
    <Root>
      <Title>
        <Lead>
          The Super Grand National World Hacker Bowl Cup Games
          <br />
          <span>casually known as</span>
        </Lead>
        <GlitchText>The Hackathon</GlitchText>
      </Title>
      <Logo>
        <Champion />
      </Logo>
      <Date>
        The next edition is 24/07/2020 - For more information, see The Hackathon
        on Twitter
      </Date>
    </Root>
  )
}
