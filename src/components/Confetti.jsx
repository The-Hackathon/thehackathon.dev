import React from "react"
import styled, { keyframes } from "styled-components"

import { range } from "../utils"

const show = rotate => keyframes`
  0% {
    transform: rotate(${rotate}deg) scale(0, 1);
  }

  1% {
    transform: rotate(${rotate}deg) scale(1.1);
  }

  2%, 50% {
    transform: rotate(${rotate}deg) scale(1);
  }

  50% {
    transform: rotate(${rotate}deg) scale(1);
  }

  51%, 100% {
    transform: rotate(${rotate}deg) scale(0, 1);
  }
`

const Base = styled.div`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;

  transform: scale(0) rotate(${({ rotate }) => rotate}deg);
  transform-origin: left;

  animation-name: ${({ rotate }) => show(rotate)};
  animation-delay: ${({ delay }) => delay}s;
  animation-iteration-count: infinite;
  animation-duration: 15s;
`

const Cross = ({ delay, top, left, rotate, color }) => {
  return (
    <Base delay={delay} rotate={rotate} top={top} left={left}>
      <svg
        width="46"
        height="45"
        viewBox="0 0 46 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.383 27.0585L18.383 38.8322L27.383 38.8322L27.383 27.0585L39.1575 27.0585L39.1575 18.0585L27.383 18.0585L27.383 6.28484L18.383 6.28484L18.383 18.0585L6.61012 18.0585L6.61012 27.0585L18.383 27.0585Z"
          fill={color || "#2FFBB1"}
        />
      </svg>
    </Base>
  )
}

const Line = ({ delay, top, left, rotate, color }) => {
  return (
    <Base delay={delay} rotate={rotate} top={top} left={left}>
      <svg
        width="25"
        height="33"
        viewBox="0 0 25 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="28.1868"
          width="32.5473"
          height="9"
          fill={color || "#AC58FF"}
        />
      </svg>
    </Base>
  )
}

const Circle = ({ delay, top, left, rotate, color }) => {
  return (
    <Base delay={delay} rotate={rotate} top={top} left={left}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6" cy="6" r="6" fill={color || "#87CAEF"} />
      </svg>
    </Base>
  )
}

const Root = styled.div`
  position: absolute;
  width: calc(100% + 40rem);
  height: calc(100% + 5rem);
  margin-top: -5rem;
  margin-left: -20rem;
  margin-right: -20rem;
`

const generatePosition = () => {
  const position = {
    rotate: Math.floor(Math.random() * 360),
    top: Math.floor(Math.random() * 90),
    left: Math.floor(Math.random() * 100),
    color: `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`,
  }

  return position
}

export const Confetti = () => {
  return (
    <Root>
      {range(0, 15).map(i => (
        <Line delay={i * 2 * Math.random()} key={i} {...generatePosition()} />
      ))}
      {range(0, 15).map(i => (
        <Circle delay={i * 2 * Math.random()} key={i} {...generatePosition()} />
      ))}
      {range(0, 15).map(i => (
        <Cross delay={i * 2 * Math.random()} key={i} {...generatePosition()} />
      ))}
    </Root>
  )
}
