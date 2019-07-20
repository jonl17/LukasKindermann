import React from "react"
import { graphql } from "gatsby"

import Wrap from "../components/Wrap"
import Header from "../components/Header"

export default ({
  data: {
    site: {
      siteMetadata: { name },
    },
  },
}) => (
  <Wrap>
    <Header title={name}></Header>
  </Wrap>
)

export const query = graphql`
  {
    site {
      siteMetadata {
        name
      }
    }
  }
`
