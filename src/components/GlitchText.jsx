// Inspired by Isaac Doud (@cipherbeta): https://codepen.io/cipherbeta/pen/YLdVjw

import React from "react"
import styled, { keyframes } from "styled-components"

const superFuschia = "#FF00EF"
const turquoiseN7 = "#00F9FF"

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
        clip: rect(${random(500)}px, 9999px, ${random(500)}px, 0);
        transform: skew(${random(100) / 100}deg);
        `
  )}
`

const GlitchedText = styled.h1`
      position: relative;
      margin-top: 0;
      font-size: 8rem;
      padding: 0 1rem;

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
        text-shadow: -2px 0 ${superFuschia};
        clip: rect(44px, 450px, 56px, 0);
        animation: ${() => generateGlitchSkewClip()} 5s infinite linear
          alternate-reverse;
      }

      &:after {
        left: -2px;
        text-shadow: -2px 0 ${turquoiseN7}, 2px 2px ${superFuschia};
        animation: ${() => generateGlitchSkewClip()} 1s infinite linear
          alternate-reverse;
      }

      @media (max-width: 600px) {
        font-size: 8rem;
      }

      @media (max-width: 500px) {
        font-size: 7rem;
      }

      @media (max-width: 400px) {
        font-size: 6rem;
      }

      @media (max-width: 300px) {
        font-size: 5rem;
      }
    `

export const GlitchText = ({ children }) => {
  return <GlitchedText>{children}</GlitchedText>
}
