import React from "react"
import styled, { keyframes } from "styled-components"

import { range } from "../utils"

const show = rotate => keyframes`
  0% {
    transform: rotate(${rotate}deg) scale(0, 1);
  }

  2% {
    transform: rotate(${rotate}deg) scale(1.1);
  }

  3%, 50% {
    transform: rotate(${rotate}deg) scale(1);
  }

  50% {
    transform: rotate(${rotate}deg) scale(1);
  }

  52%, 100% {
    transform: rotate(${rotate}deg) scale(0, 1);
  }
`

const Base = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  transform: scale(0) rotate(${({ rotate }) => rotate}deg);
  transform-origin: left;

  animation-name: ${({ rotate }) => show(rotate)};
  animation-delay: ${({ delay }) => delay}s;
  animation-iteration-count: infinite;
  animation-duration: 20s;
`

const Line = ({ delay, top, left, rotate, color }) => {
  return (
    <Base delay={delay} rotate={rotate} top={top} left={left}>
      <svg
        width="180"
        height="3"
        viewBox="0 0 180 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0" width="180" height="3" fill={color} />
      </svg>
    </Base>
  )
}

const Root = styled.div`
  position: absolute;
  width: calc(100% + 40rem);
  height: calc(100% + 5rem);
  margin-top: -5rem;
`

const randomColor = () => {
  const val = Math.random()
  if (val > 0.75) return "var(--color-blue)"
  else if (val > 0.5) return "var(--color-aqua)"
  else if (val >= 0.25) return "var(--color-fuschia)"
  else return "var(--color-black)"
}

const randomRotation = () => {
  const val = Math.random()
  if (val > 0.75) return 0
  else if (val > 0.5) return 90
  else if (val >= 0.25) return 180
  else return -90
}

const generatePosition = () => {
  const position = {
    rotate: randomRotation(),
    top: `${Math.floor(Math.random() * 50 + 25)}%`,
    left: `${Math.floor(Math.random() * 100)}%`,
    color: randomColor(),
  }

  return position
}

export const Confetti = () => {
  return (
    <Root>
      {range(-10, 10).map(i => (
        <Line delay={i * 2 * Math.random()} key={i} {...generatePosition()} />
      ))}
      {range(0, 10).map(i => (
        <Line delay={i * 2 * Math.random()} key={i} {...generatePosition()} />
      ))}
      {range(0, 10).map(i => (
        <Line delay={i * 2 * Math.random()} key={i} {...generatePosition()} />
      ))}
      {range(0, 10).map(i => (
        <Line delay={i * 2 * Math.random()} key={i} {...generatePosition()} />
      ))}
      {range(0, 10).map(i => (
        <Line delay={i * 2 * Math.random()} key={i} {...generatePosition()} />
      ))}
      {range(0, 10).map(i => (
        <Line delay={i * 2 * Math.random()} key={i} {...generatePosition()} />
      ))}
    </Root>
  )
}
