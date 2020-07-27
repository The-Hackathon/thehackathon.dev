import React from "react"
import styled from "styled-components"

import { SEO } from "../Seo"
import { GlobalStyle } from "../components/GlobalStyle"
import { Header } from "../components/Header"

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <GlobalStyle />
      <Header />
    </Layout>
  )
}
