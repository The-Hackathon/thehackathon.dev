import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { SEO } from "../Seo"
import { GlobalStyle } from "../components/GlobalStyle"
import { Header } from "../components/Header"
import { Signature } from "../components/Signature"

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  max-width: calc(8 * 70px + 4rem);
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-row-gap: 2rem;
`

const TeamMember = styled(Link)`
  display: grid;
  grid-row-gap: 0.25rem;
  justify-content: center;

  span {
    text-align: center;
  }
`

const Team = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 80px);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`

const Section = styled.div`
  margin-bottom: 4rem;
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="The Hackathon" />
      <GlobalStyle />
      <Header />
      <Signature />
      <Content>
        <div>
          <h2>Win the crown</h2>
          <p>
            The The Super Grand National World Hacker Bowl Cup Games is a
            Hackathon to win the right to wear the crown!
          </p>
          <p>
            But our real goal is to have fun and get together as a community.
            It’s for the glory of winning, there is no major prize, no $50k
            cheque, no incubation period for a startup or whatever. It’s all
            about people getting together and building something special.
          </p>
          <p>
            There is no particular theme, such as blockchain, decentralisation
            or some technology. The funnier, more creative the project is, the
            higher chance of winning.
          </p>
        </div>
        <div>
          <h2>The Rules</h2>
          <ul>
            <li>
              to enter, participants must donate to a charitable instituition
              and email us proof.
            </li>
            <li>
              participants can go at it as a team, individually or join a pool
              of other participants who also have no team, to get to know each
              other, bounce ideas and take on a project together.
            </li>
          </ul>
        </div>
        <div>
          <h2>The Prize</h2>
          <p>If you win, you get two prizes:</p>
          <ul>
            <li>
              The right to wear the crown! This means being featured on the
              website until the next edition, where you'll get the chance to
              defend your title!
            </li>
            <li>A Hacker Kit! We don't know yet what it is though.</li>
          </ul>
          <p>
            Out communication platform will be{" "}
            <Link to="https://twitter.com/the_hackathon">Twitter</Link>, so
            follow us there to keep up with the event and participate!
          </p>
        </div>
        <div>
          <h2>Brought to you by</h2>
          <Team>
            <TeamMember to="#">
              <Img fixed={data.davide.childImageSharp.fixed} />
              <span>Davide</span>
            </TeamMember>
            <TeamMember to="#">
              <Img fixed={data.gabriel.childImageSharp.fixed} />
              <span>Gabriel</span>
            </TeamMember>
            <TeamMember to="#">
              <Img fixed={data.mendes.childImageSharp.fixed} />
              <span>Mendes</span>
            </TeamMember>
            <TeamMember to="#">
              <Img fixed={data.naps.childImageSharp.fixed} />
              <span>Naps</span>
            </TeamMember>
            <TeamMember to="#">
              <Img fixed={data.resende.childImageSharp.fixed} />
              <span>Resende</span>
            </TeamMember>
          </Team>
        </div>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query {
    mendes: file(relativePath: { eq: "mendes.jpg" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    naps: file(relativePath: { eq: "naps.jpg" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    resende: file(relativePath: { eq: "resende.jpg" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    davide: file(relativePath: { eq: "davide.jpg" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    gabriel: file(relativePath: { eq: "gabriel.jpg" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`
