import React from "react"
import styled from "styled-components"

const range = (start, end, increment = 1) => {
  const items = []

  for (let i = start; i <= end; i += increment) {
    items.push(i)
  }

  return items
}

const LogoSVG = styled.svg`
  margin-bottom: 2rem;
`

export const Logo = () => {
  if (typeof window !== "object") return null

  return (
    <LogoSVG width="160" height="160" viewBox="-180 -180 340 340">
      {range(-10, 9).map(j =>
        range(-10, 9).map(i =>
          Math.max(Math.abs(i), Math.abs(j)) / 9 - Math.random() * 0.7 < 0.4 ? (
            <rect
              key={`${i}${j}`}
              width="20"
              height="20"
              x={i * 20}
              y={j * 20}
              style={{ fill: "#fe8019" }}
              shapeRendering="crispEdges"
            />
          ) : null
        )
      )}
      <rect
        width="40"
        height="160"
        x="-80"
        y="-80"
        style={{ fill: "#1d2021" }}
        shapeRendering="crispEdges"
      />
      <rect
        width="80"
        height="40"
        x="-40"
        y="-20"
        style={{ fill: "#1d2021" }}
        shapeRendering="crispEdges"
      />
      <rect
        width="40"
        height="160"
        x="20"
        y="-80"
        style={{ fill: "#1d2021" }}
        shapeRendering="crispEdges"
      />
    </LogoSVG>
  )
}
