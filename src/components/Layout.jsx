import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { GlobalStyle } from "./GlobalStyle"
import { Champion } from "./Champion"
import { GlitchText } from "./GlitchText"
import { Logo } from "./Logo"
import { Footer } from "./Footer"

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  padding-top: 8rem;
  padding-bottom: 8rem;
  max-width: calc(8 * 70px + 4rem);
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
`

const Title = styled(Link)`
  text-decoration: none;
  margin: 0 0 3rem;

  h1 {
    font-size: 2rem !important;
  }
`

const LogoWrapper = styled.div`
  svg {
    width: 64px;
    height: 64px;
  }
`

const Header = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  justify-items: center;
  padding: 2rem;
  width: 100%;
`

const ChampionWrapper = styled.div`
  padding-bottom: 8rem;
`

export const Layout = ({ children }) => {
  return (
    <Root>
      <GlobalStyle />
      <Header>
        <Title to="/">
          <GlitchText>The Hackathon</GlitchText>
        </Title>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </Header>
      <Content>{children}</Content>
      <ChampionWrapper>
        <Champion small />
      </ChampionWrapper>
      <Footer />
    </Root>
  )
}
