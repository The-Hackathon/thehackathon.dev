import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import logo from "../images/inverted_logo.png"

const emojis = ["🌈", "🚀", "🕶", "🎸", "🔥"]

const Root = styled.div`
  background: var(--color-fuschia);
  color: var(--color-white);
  width: 100%;
  padding: 8rem 0 4rem;
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    font-weight: bold;
  }
`

const Content = styled.div`
  max-width: calc(8 * 70px + 4rem);
  width: 100%;
  padding: 0 2rem;
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
`

const Row = styled.div`
  grid-column: 1 / span 4;
  text-align: center;
`

const Logo = styled.img`
  width: 6rem;
  height: 6rem;
  grid-row: 1 / span 3;
`

const randomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)]

export const Footer = () => {
  return (
    <Root>
      <Content>
        <Logo src={logo} />
        <Link to="/">Home</Link>
        <Link to="/sponsors">Sponsors</Link>
        <a href="mailto:root@thehackathon.dev">Contact</a>
        <Row>
          <Link
            to="https://github.com/The-Hackathon/thehackathon.dev"
            target="_blank"
          >
            Open sourced with {` ${randomEmoji()} `} by 5 fearless
            {
              <span
                dangerouslySetInnerHTML={{
                  __html: `<!-- does this include spiders? cuz im afraid of spiders -->`,
                }}
              />
            }{" "}
            developers
          </Link>
        </Row>
      </Content>
    </Root>
  )
}
