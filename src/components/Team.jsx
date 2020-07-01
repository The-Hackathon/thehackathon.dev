import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Member = styled.li`
  display: flex;
  flex-direction: column;
  width: 80px;
  margin-right: 1rem;
  text-align: center;
`

const Root = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

export const Team = ({ members }) => {
  return (
    <Root>
      <Link to="https://twitter.com/DavideSilva_">
        <Member>
          <Img
            alt="Davide Silva"
            fluid={members.davide.childImageSharp.fluid}
          />
          <span> Davide</span>
        </Member>
      </Link>
      <Link to="https://twitter.com/gabrielgpoca">
        <Member>
          <Img
            alt="Gabriel Poca"
            fluid={members.gabriel.childImageSharp.fluid}
          />
          <span>Gabriel</span>
        </Member>
      </Link>
      <Link to="https://twitter.com/justmnds">
        <Member>
          <Img
            alt="Fernando Mendes"
            fluid={members.mendes.childImageSharp.fluid}
          />
          <span>Mendes</span>
        </Member>
      </Link>
      <Link to="https://twitter.com/naps62">
        <Member>
          <Img alt="Miguel Palhas" fluid={members.naps.childImageSharp.fluid} />
          <span> Naps</span>
        </Member>
      </Link>
      <Link to="https://twitter.com/Resende_666">
        {" "}
        <Member>
          <Img
            alt="José Resende"
            fluid={members.resende.childImageSharp.fluid}
          />
          <span>Resende</span>
        </Member>
      </Link>
    </Root>
  )
}
