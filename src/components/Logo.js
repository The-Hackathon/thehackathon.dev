import React from "react"
import styled from "styled-components"

import { range } from "../utils"

const diffDates = (date1, date2) => {
  return date2.getTime() - date1.getTime()
}

const Root = styled.svg`
  margin-bottom: 3rem;
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
      range(-10, 9).map(j =>
        range(-10, 9).map(
          i =>
            (this.els[i][j].style.fill =
              Math.max(Math.abs(i), Math.abs(j)) / 9 - Math.random() * 0.7 < 0.4
                ? "#fe8019"
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
      <Root width="160" height="160" viewBox="-180 -180 340 340">
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
                    ? "#FFB800"
                    : "transparent",
              }}
              shapeRendering="crispEdges"
            />
          ))
        )}
        <rect
          width="40"
          height="160"
          x="-80"
          y="-80"
          style={{ fill: "#FFFFFF" }}
          shapeRendering="crispEdges"
        />
        <rect
          width="80"
          height="40"
          x="-40"
          y="-20"
          style={{ fill: "#FFFFFF" }}
          shapeRendering="crispEdges"
        />
        <rect
          width="40"
          height="160"
          x="20"
          y="-80"
          style={{ fill: "#FFFFFF" }}
          shapeRendering="crispEdges"
        />
      </Root>
    )
  }
}
