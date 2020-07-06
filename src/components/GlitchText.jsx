// Inspired by Isaac Doud (@cipherbeta): https://codepen.io/cipherbeta/pen/YLdVjw

import React from "react"
import styled, { keyframes } from "styled-components"

const random = limit => Math.round(Math.random() * limit)

const forSteps = (total, fn) => {
  const step = parseInt(100 / total)
  let styles = ""

  for (let i = 0; i < 100; i += step) {
    styles += `
      ${i}% {
        ${fn(i)}
      }
    `
  }

  return styles
}

const generateGlitchSkew = () => keyframes`
  ${forSteps(
    20,
    () => `
        transform: skew(${random(100) / 100}deg);
        `
  )}
`

const generateGlitchSkewClip = () => keyframes`
  ${forSteps(
    20,
    () => `
        clip: rect(min(${random(500)}px, 100vw), 9999px, min(${random(
      500
    )}px, 100vw), 0);
        transform: skew(${random(100) / 100}deg);
        `
  )}
`

const GlitchedText = styled.h1`
      position: relative;
      margin-top: 0;
      font-size: 8rem;

      animation: ${() =>
        generateGlitchSkew()} 1s infinite linear alternate-reverse;

      &:before,
      &:after {
        content: '${({ children }) => children}';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      &:before {
        left: 2px;
        text-shadow: -2px 0 var(--color-fuschia);
        clip: rect(44px, 450px, 56px, 0);
        animation: ${() => generateGlitchSkewClip()} 5s infinite linear
          alternate-reverse;
        color: var(--color-fuschia);
      }

      &:after {
        left: -2px;
        text-shadow: -2px 0 var(--color-aqua), 2px 2px var(--color-fuschia);
        animation: ${() => generateGlitchSkewClip()} 1s infinite linear
          alternate-reverse;
      }

      @media (max-width: 600px) {
        font-size: 8rem;
      }

      @media (max-width: 500px) {
        font-size: 8rem;
      }

      @media (max-width: 400px) {
        font-size: 6rem;
      }

      @media (max-width: 320px) {
        font-size: 5rem;
      }

      @media (max-width: 250px) {
        font-size: 4rem;
      }
    `

export const GlitchText = ({ children }) => {
  return <GlitchedText>{children}</GlitchedText>
}
