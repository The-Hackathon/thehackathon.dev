import React from "react"
import styled from "styled-components"

import { GlitchText } from "./GlitchText"
import { Champion } from "../components/Champion"

const Lead = styled.p`
  margin-bottom: 1rem;
`

const Root = styled.div`
  display: grid;
  flex-basis: 65vh;
  max-width: calc(8 * 57px + 4rem);
  padding-top: 10rem;
  padding-bottom: 10rem;
  text-align: center;
  width: 100%;
  grid-row-gap: 8rem;
  grid-template-columns: 1fr;
`

export const Header = () => {
  return (
    <Root>
      <Champion />
      <div>
        <Lead>
          The Super Grand National World Hacker Bowl Cup Games
          <br />
          <span>casually known as</span>
        </Lead>
        <GlitchText>The Hackathon</GlitchText>
      </div>
      <p>
        <em>
          The next edition is 24/07/2020 - For more information, see The
          Hackathon on Twitter
        </em>
      </p>
    </Root>
  )
}
