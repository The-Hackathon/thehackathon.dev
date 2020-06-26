import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { SEO } from "../Seo"
import { Logo } from "../components/Logo"
import { GlobalStyle } from "../components/GloabalStyle"

const Layout = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: stretch;
    align-items: stretch;
    height: 100%;
    width: 100%;
  }
`

const Content = styled.div`
  max-width: calc(8 * 70px);
`

const Left = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: flex-end;
`

const Right = styled.div`
  flex-basis: 90vh;
  background: #1d2021;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem;
  text-align: center;

  p {
    margin-bottom: 0.5rem;
  }

  h1 {
    margin-top: 0;
  }

  @media (min-width: 800px) {
    position: fixed;
    left: 50%;
    top: 0;
    width: 50%;
    height: 100%;
  }

  ${Content} {
    transform: translateY(-3rem);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="The Hackathon" />
    <GlobalStyle />
    <Left>
      <Content>
        <h2>Purpose</h2>
        <p>Our purpose, is to serve the community.</p>
        <h2>Rules</h2>
        <p>
          Do you see any Teletubbies in here? Do you see a slender plastic tag
          clipped to my shirt with my name printed on it? Do you see a little
          Asian child with a blank expression on his face sitting outside on a
          mechanical helicopter that shakes when you put quarters in it? No?
          Well, that's what you see at a toy store. And you must think you're in
          a toy store, because you're here shopping for an infant named Jeb.{" "}
        </p>
        <p>
          Follow us on{" "}
          <Link to="https://twitter.com/the_hackathon">Twitter</Link> for more
          information.
        </p>
      </Content>
    </Left>
    <Right>
      <Content>
        <Logo />
        <p>
          The Super Grand National World Hacker Bowl Cup Games causally known as
        </p>
        <h1>The Hackathon</h1>
      </Content>
    </Right>
  </Layout>
)

export default IndexPage
