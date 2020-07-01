import React from "react"
import styled from "styled-components"

import { range } from "../utils"

const diffDates = (date1, date2) => {
  return date2.getTime() - date1.getTime()
}

const Root = styled.svg`
  margin-bottom: 3rem;

  text {
    font-family: "Mohave";
    font-size: 7rem;
    font-weight: bold;
    fill: var(--color-white);
  }
`

export class Logo extends React.Component {
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
      range(-6, 4).map(j =>
        range(-6, 4).map(
          i =>
            (this.els[i][j].style.fill =
              Math.max(Math.abs(i), Math.abs(j)) / 5 - Math.random() * 0.7 < 0.4
                ? "var(--color-fuschia)"
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
      <Root width="160" height="160" viewBox="-85 -85 170 170">
        {range(-6, 4).map(j =>
          range(-6, 4).map(i => (
            <rect
              ref={el => this.saveRef(el, i, j)}
              key={`${i}${j}`}
              width="17"
              height="17"
              x={i * 17}
              y={j * 17}
              style={{
                fill:
                  Math.max(Math.abs(i), Math.abs(j)) / 5 - Math.random() * 0.7 <
                  0.4
                    ? "var(--color-fuschia)"
                    : "transparent",
              }}
              shapeRendering="crispEdges"
            />
          ))
        )}
        <text x="-25" y="40">
          H
        </text>
      </Root>
    )
  }
}
