import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import sub from "../images/subvisual.svg"
import tuple from "../images/tuple.svg"
import goRails from "../images/gorails.svg"

const Root = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 3rem;

  li {
    margin: 0;
  }

  @media (max-width: 400px) {
    grid-template-columns: auto;
  }
`

const Subvisual = styled.img`
  height: 2rem;
`

const GoRails = styled.img`
  height: 2rem;
`

const Tuple = styled.img`
  height: 5rem;
`

export const Sponsors = () => {
  return (
    <Root>
      <li>
        <Link target="_blank" to="https://subvisual.com">
          <Subvisual alt="Subvisual" src={sub} />
        </Link>
      </li>
      <li>
        <Link target="_blank" to="https://tuple.app">
          <Tuple alt="Tuple" src={tuple} />
        </Link>
      </li>
      <li>
        <Link target="_blank" to="https://gorails.com/">
          <GoRails alt="Go Rails" src={goRails} />
        </Link>
      </li>
    </Root>
  )
}
