import React from "react"
import styled from "styled-components"

import sub from "../images/subvisual.svg"
import tuple from "../images/tuple.svg"
import { Link } from "gatsby"

const Root = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 2rem;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;

  li {
    margin: 0;
  }
`

const Subvisual = styled.img`
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
    </Root>
  )
}
