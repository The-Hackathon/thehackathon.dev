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
            Welcome to the 1st edition of The Super Grand National World Hacker
            Bowl Cup Games. Or, as it is casually known, The Hackathon.
          </p>
          <p>
            The Hackathon is for the right to wear the crown. It’s built by
            hackers, for hackers. Our goal is to have fun, to get together,
            share, learn and help charitable institutions along the way. Your
            goal is to be crowned The Hacker Of The Season.
          </p>
          <p>
            For 48h, you will hack by yourself, with a team or find other
            participants looking to join forces to be collectively crowned. It’s
            your choice. There will be talks. You will be giving them, if you
            are so inclined. No pressure.
          </p>
          <p>
            To enter, you just need to email us proof of donation to a
            charitable institution of your choice. If it’s a team, a collective
            donation is encouraged.
          </p>
          <p>A strange game. The only winning move is to play.</p>
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
              The Crown. The most coveted possession in the Internet. This means
              being featured on the website until the next edition, where you’ll
              get the chance to defend your title. You will also be allowed to
              use the official tagline of Hacker Of The Season™. A Hacker Kit!
              We don’t really know what it is yet...
            </li>

            <li>
              We’ll be communicating through Twitter so follow us there to keep
              up with the event.
            </li>
          </ul>
          <p>
            We’ll be communicating through{" "}
            <Link to="https://twitter.com/the_hackathon">Twitter</Link> so
            follow us there to keep up with the event.
          </p>
        </div>
        <div>
          <h2>About</h2>
          <p>
            The Hackathon will last for 48h and the 1st edition will start on
            27/07/2020 17:00 GMT and end on 29/07/2020 17:00 GMT.
          </p>
          <p>
            During 48 hours, hackers will get together, have fun and share
            knowledge. There is no particular theme, like blockchain,
            decentralisation or a particular technology. The funnier, more
            creative the project is, the higher chance of winning.
          </p>
          <p>
            The main point is to have fun. You’re in it for the glory of
            winning. There is no major prize, no $50k cheque, no incubation
            period for a startup, no shady sponsors with ulterior motives or
            whatever. It’s all about people getting together and building
            something special.
          </p>
          <p>
            Along the way we plan on helping institutions. This is the Internet,
            the hackers, giving back to the non-virtual world. To enter, you or
            your team will have to email us proof of a donation to
            letmein@thehackathon.dev. Any amount will do and you get to choose
            the institutions. That’s it. No ticket, no participation limit. Just
            give back to the world and we’ll open the doors to you. We want to
            get enough people join so that we make an impact with institutions,
            so please share with your hacker friends. We’re serious. Annoy them
            as much as you can. We salute you.
          </p>
          <p>
            Everything will happen on Discord. After the donation proof you will
            receive an invite to join the hackathon server. During those 48
            hours, teams will have a dedicated voice and text channel.
          </p>
          <p>
            We know hacking alone is a bummer, so we’ll setup a moment for those
            who want to find other hackers and get together for a project.
          </p>
          <p>
            The Hackathon is also a moment for learning, so you’ll have the
            chance to watch talks and be a speaker! You don’t have to submit a
            talk or apply. You just let everyone know what the talk is about and
            when it starts. Do so at least one hour beforehand to make sure
            people find your talk. We’ll create two dedicated talk channels to
            ensure that there aren’t too many tracks. To watch, you’ll just have
            to join the channel. That’s it! Everything will be simple, nothing
            will be fancy, the projects will awesome and the force will be with
            you.
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
