import React from "react"
import { Link } from "gatsby"
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
  margin-bottom: 2rem;
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
        The winners of the first edition, on the 24th of July, will be featured
        here until the second edition, where they will have to defend their
        title. For more information, see{" "}
        <Link to="https://twitter.com/the_hackathon">
          The Hackathon on Twitter
        </Link>
        .
      </Date>
    </Root>
  )
}
