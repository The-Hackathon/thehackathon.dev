import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { SEO } from "../Seo"
import { GlobalStyle } from "../components/GloabalStyle"
import { Header } from "../components/Header"

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  max-width: calc(8 * 70px + 4rem);
  width: 100%;
  padding: 2rem;
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

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="The Hackathon" />
      <GlobalStyle />
      <Header />
      <Content>
        <h2>Purpose</h2>
        <p>
          Our main goal is to get "hackers" together to learn, meet interesting
          people and, above all, help charitable institutions. We're not looking
          to have any monetary prize for the winners other than being given the
          winners title and being hailed as so on the website. However, we also
          wanted to give something back to them. We're not willing to allow
          large sponsors, with potentially ulterior motives, to help us fund
          this. Any potential monetary sponsor we have (we're not sold on the
          idea) would be encouraged to donate to an institution as sponsorship
          instead.
        </p>
        <p>
          So we’re reaching out to some potential partners about a prize. Our
          idea was to build a “hacker kit” with resources to learn and help them
          in the future. Would you be willing to provide one of the seasons of
          Destroy All Software for the winning team or individual? We would
          include DAS on the website as one of the sponsors, of course.
        </p>
        <h2>Rules</h2>
        <p>
          Follow us on{" "}
          <Link to="https://twitter.com/the_hackathon">Twitter</Link> for more
          information.
        </p>
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
