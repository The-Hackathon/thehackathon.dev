import React from "react"
import styled from "styled-components"

const Root = styled.ul`
  list-style-type: none;
  padding: 2rem 0;
  margin: 0;
`

const Rule = styled.li`
  position: relative;
  padding: 0 0 0 5rem;
  margin: 0 0 3rem;
  min-height: 3rem;
  display: flex;
  align-items: center;

  &::before {
    content: '${({ nr }) => nr}';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px dashed var(--color-fuschia);
    color: var(--color-eminence);
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "Mohave";
  }
`

const rules = [
  "The most important rule of all: have fun.",
  "In the spirit of competition, we won't allow any work done beforehand. This doesn't mean you can't think about your project, but everyone should start hacking at the same time.",
  "Your project should be hosted in an open sourced git repository so that everyone can see what you are doing and learn from your h4ck3r skillz.",
  "There is no theme or technology that you should use. Feel free to choose whatever you want to use.",
  "If you want to enter, you just need to send us some proof of a donation you or your team did to a charitable institution of your choice. Send us that proof to letmein@thehackathon.dev.",
  "There is no limit to the number of people per team. The more the merrier.",
  "If you are planning on giving a talk, you should plan for 20 minutes tops. We want everyone to have the chance to speak. And we will only allow two talks in parallel at all times, in order to give everyone the opportunity to see something they might be interested in.",
  `No need to submit us your talk beforehand. Just send a notice in the Discord with some advance so that everyone is aware of it.`,
  "The final project submissions will be done over Twitter. Post a pitch along with a video presentation of your project and the link to your public Git-based host.",
  "You should submit your final project by 02/08/2020 16:00 GMT.",
]

export const Rules = () => {
  return (
    <Root>
      {rules.map((text, i) => (
        <Rule key={i} nr={i + 1}>
          {text}
        </Rule>
      ))}
    </Root>
  )
}
