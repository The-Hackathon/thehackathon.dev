import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Root = styled.div`
  background: var(--color-fuschia);
  color: var(--color-white);
  width: 100%;
  padding: 8rem 0 4rem;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  max-width: calc(8 * 70px + 4rem);
  width: 100%;
  padding: 0 2rem;
  display: grid;
  grid-row-gap: 2rem;
`

export const Footer = () => {
  return (
    <Root>
      <Content>
        <Link to="/">Home</Link>
        <Link to="/sponsors">Sponsors</Link>
        <Link to="/code-of-conduct">Code of Conduct</Link>
      </Content>
    </Root>
  )
}
