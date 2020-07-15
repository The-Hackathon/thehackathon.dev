import React from "react"
import styled from "styled-components"

import { Ribbon } from "./Ribbon"

import unicorn from "../images/unicorn.png"

const Picture = styled.div`
  align-items: center;
  background: var(--color-fuschia);
  border-radius: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: ${props => (props.small ? "1rem" : "2rem")};
  width: 100%;
  z-index: 1;

  img {
    border-radius: 50%;
    mix-blend-mode: overlay;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`

const RibbonWrapper = styled.div``

const ChampionRoot = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: relative;
  width: ${props => (props.small ? "150px" : "250px")};
  height: ${props => (props.small ? "150px" : "250px")};

  ${RibbonWrapper} {
    svg {
      position: absolute;
      bottom: ${props => (props.small ? "-2px" : "-4px")};
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% + ${props => (props.small ? "3rem" : "6rem")});
      z-index: 1;
    }
  }

  @media (max-width: 600px) {
    width: 150px;
    height: 150px;

    ${RibbonWrapper} {
      svg {
        width: calc(100% + 3rem);
        bottom: -18px;
      }
    }
  }
`
export const Champion = ({ small }) => {
  return (
    <ChampionRoot small={small}>
      <Picture small={small}>
        <img src={unicorn} alt="A stuffed unicorn" />
      </Picture>
      <RibbonWrapper>
        <Ribbon />
      </RibbonWrapper>
    </ChampionRoot>
  )
}
