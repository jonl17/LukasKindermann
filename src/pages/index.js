import React from "react"
import { graphql } from "gatsby"

import Wrap from "../components/Wrap"
import Header from "../components/Header"
import FrontPageGrid from "../components/FrontPageGrid"

export default ({
  data: {
    site: {
      siteMetadata: { name },
    },
  },
}) => (
  <Wrap>
    <Header title={name}></Header>
    <FrontPageGrid></FrontPageGrid>
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
