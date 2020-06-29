import React from "react"
import styled from "styled-components"

const mainFill = "#1d2021"
const mainOverlayFill = "#00b7ff"
const secondaryOverlayFill = "#d400ff"
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

export class Logo3 extends React.Component {
  constructor() {
    super()
    this.els = {}
    this.letterParts = []
  }

  componentDidMount() {
    this.squaresRefreshTime = new Date()
    this.letterRefreshTime = new Date()
    this.update()
  }

  shouldComponentUpdate() {
    return false
  }

  update = () => {
    const newTime = new Date()

    if (diffDates(this.squaresRefreshTime, newTime) > 150) {
      range(-10, 9).map(j =>
        range(-10, 9).map(
          i =>
            (this.els[i][j].style.fill =
              Math.max(Math.abs(i), Math.abs(j)) / 9 - Math.random() * 0.7 < 0.4
                ? secondaryFill
                : "transparent")
        )
      )

      this.squaresRefreshTime = newTime
    }

    if (diffDates(this.letterRefreshTime, newTime) > 100) {
      this.letterParts.forEach(p => {
        const diff = diffDates(p.refillTime, newTime)
        const shouldRefill = diff > 500 && diff < 1000

        if (shouldRefill) {
          const fill = [mainOverlayFill, secondaryOverlayFill][
            Math.floor(Math.random() * 2)
          ]

          p.element.style.fill = fill
        } else {
          p.refillTime = newTime
          p.element.style.fill = mainFill
        }
      })

      this.letterRefreshTime = newTime
    }

    requestAnimationFrame(this.update)
  }

  saveRef = (el, i, j) => {
    this.els[i] = this.els[i] || {}
    this.els[i][j] = el
  }

  saveLetterPart = p =>
    this.letterParts.push({ element: p, refillTime: new Date() })

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
        <rect
          ref={p => this.saveLetterPart(p)}
          width="40"
          height="160"
          style={{ fill: mainFill }}
          x="-80"
          y="-80"
          shapeRendering="crispEdges"
        />
        <rect
          ref={p => this.saveLetterPart(p)}
          width="80"
          height="40"
          style={{ fill: mainFill }}
          x="-40"
          y="-20"
          shapeRendering="crispEdges"
        />
        <rect
          ref={p => this.saveLetterPart(p)}
          width="40"
          height="160"
          style={{ fill: mainFill }}
          x="20"
          y="-80"
          shapeRendering="crispEdges"
        />
      </LogoSVG>
    )
  }
}
