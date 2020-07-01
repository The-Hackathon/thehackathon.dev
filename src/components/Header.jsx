import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { GlitchText } from "./GlitchText"
import { Champion } from "./Champion"
import { Logo } from "./Logo"

const Lead = styled.p`
  margin-bottom: 2rem;
  padding: 0 1rem;
  font-size: 0.8em;
  line-height: 1.2em;
`

const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 65vh;
  max-width: calc(8 * 57px + 4rem);
  text-align: center;
  width: 100%;
  align-items: center;
`

const Title = styled.div`
  height: 90vh;
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

const Podium = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const LogoWrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);

  svg {
    width: 64px;
    height: 64px;
  }
`

export const Header = () => {
  return (
    <Root>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Title>
        <Lead>
          The Super Grand National World Hacker Bowl Cup Games
          <br />
          <span>casually known as</span>
        </Lead>
        <GlitchText>The Hackathon</GlitchText>
      </Title>
      <Podium>
        <Champion />
      </Podium>
      <Date>
        The next edition is 27/07/2020.
        <br />
        For more information, see{" "}
        <Link to="https://twitter.com/the_hackathon">
          The Hackathon on Twitter
        </Link>
        .
      </Date>
    </Root>
  )
}
