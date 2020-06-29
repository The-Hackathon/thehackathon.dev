import React from "react"
import styled, { keyframes } from "styled-components"

const mainFill = "#1d2021"
const overlayFill = "#00b7ff"
const invertedOverlayFill = "#d400ff"
const secondaryFill = "#00ff9f"

const range = (start, end, increment = 1) => {
  const items = []

  for (let i = start; i <= end; i += increment) {
    items.push(i)
  }

  return items
}

const diffDates = (date1, date2) => {
  return date2.getTime() - date1.getTime()
}

const LogoSVG = styled.svg`
  margin-bottom: 2rem;
`

const Glitch = keyframes`
  0% {
    transform: none;
  }

  5% {
    transform: translate(4px, 8px);
  }

  10% {
    transform: none;
  }

  30% {
    transform: translate(9px, 4px);
  }

  35% {
    transform: none;
  }

  55% {
    transform: translate(8px, -3px);
  }

  60% {
    transform: none;
  }

  75% {
    transform: translate(3px, 9px);
  }

  80% {
    transform: none;
  }
`

const InvertedGlitch = keyframes`
  0% {
    transform: none;
  }

  5% {
    transform: translate(-5px, -3px);
  }

  10% {
    transform: none;
  }

  30% {
    transform: translate(-3px, -8px);
  }

  35% {
    transform: none;
  }

  55% {
    transform: translate(4px, -10px);
  }

  60% {
    transform: none;
  }

  75% {
    transform: translate(-8px, -4px);
  }

  80% {
    transform: none;
  }
`

const GlitchOverlay = styled.rect`
  animation: ${Glitch} 3s infinite;
  fill: ${overlayFill};
`

const InvertedGlitchOverlay = styled.rect`
  animation: ${InvertedGlitch} 3s infinite;
  fill: ${invertedOverlayFill};
`

export class Logo2 extends React.Component {
  constructor() {
    super()
    this.els = {}
  }

  componentDidMount() {
    this.time = new Date()
    this.update()
  }

  shouldComponentUpdate() {
    return false
  }

  update = () => {
    const newTime = new Date()

    if (diffDates(this.time, newTime) > 150) {
      range(-10, 9).map(j =>
        range(-10, 9).map(
          i =>
            (this.els[i][j].style.fill =
              Math.max(Math.abs(i), Math.abs(j)) / 9 - Math.random() * 0.7 < 0.4
                ? secondaryFill
                : "transparent")
        )
      )

      this.time = newTime
    }

    requestAnimationFrame(this.update)
  }

  saveRef = (el, i, j) => {
    this.els[i] = this.els[i] || {}
    this.els[i][j] = el
  }

  render() {
    return (
      <LogoSVG width="160" height="160" viewBox="-180 -180 340 340">
        {range(-10, 9).map(j =>
          range(-10, 9).map(i => (
            <rect
              ref={el => this.saveRef(el, i, j)}
              key={`${i}${j}`}
              width="20"
              height="20"
              x={i * 20}
              y={j * 20}
              style={{
                fill:
                  Math.max(Math.abs(i), Math.abs(j)) / 9 - Math.random() * 0.7 <
                  0.4
                    ? secondaryFill
                    : "transparent",
              }}
              shapeRendering="crispEdges"
            />
          ))
        )}
        <GlitchOverlay
          width="40"
          height="160"
          x="-80"
          y="-80"
          shapeRendering="crispEdges"
        />
        <GlitchOverlay
          width="80"
          height="40"
          x="-40"
          y="-20"
          shapeRendering="crispEdges"
        />
        <GlitchOverlay
          width="40"
          height="160"
          x="20"
          y="-80"
          shapeRendering="crispEdges"
        />
        <InvertedGlitchOverlay
          width="40"
          height="160"
          x="-80"
          y="-80"
          shapeRendering="crispEdges"
        />
        <InvertedGlitchOverlay
          width="80"
          height="40"
          x="-40"
          y="-20"
          shapeRendering="crispEdges"
        />
        <InvertedGlitchOverlay
          width="40"
          height="160"
          x="20"
          y="-80"
          shapeRendering="crispEdges"
        />
        <rect
          width="40"
          height="160"
          x="-80"
          y="-80"
          style={{ fill: mainFill }}
          shapeRendering="crispEdges"
        />
        <rect
          width="80"
          height="40"
          x="-40"
          y="-20"
          style={{ fill: mainFill }}
          shapeRendering="crispEdges"
        />
        <rect
          width="40"
          height="160"
          x="20"
          y="-80"
          style={{ fill: mainFill }}
          shapeRendering="crispEdges"
        />
      </LogoSVG>
    )
  }
}
