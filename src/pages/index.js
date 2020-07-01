import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { SEO } from "../Seo"
import { GlobalStyle } from "../components/GlobalStyle"
import { Header } from "../components/Header"
import { Signature } from "../components/Signature"
import { Rules } from "../components/Rules"
import { Team } from "../components/Team"

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
          <Rules />
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
          <h2>Brought to you</h2>
          <p>
            The Super Grand National World Hacker Bowl Cup Games is brought to
            you by 5 fearless{" "}
            {
              <span
                dangerouslySetInnerHTML={{
                  __html: `<!-- does this include spiders? cuz im afraid of spiders -->`,
                }}
              />
            }{" "}
            developers:
          </p>
          <Team members={data} />
        </div>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query {
    mendes: file(relativePath: { eq: "mendes.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 160, maxHeight: 160, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    naps: file(relativePath: { eq: "naps.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 160, maxHeight: 160, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    resende: file(relativePath: { eq: "resende.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 160, maxHeight: 160, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    davide: file(relativePath: { eq: "davide.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 160, maxHeight: 160, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gabriel: file(relativePath: { eq: "gabriel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 160, maxHeight: 160, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
