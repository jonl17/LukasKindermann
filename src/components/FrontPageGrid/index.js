import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Grid } from "./Styled"

const spitOutImages = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allImageSharp {
            edges {
              node {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `}
      render={data =>
        data.allImageSharp.edges.map(item => (
          <Img fluid={item.node.fluid}></Img>
        ))
      }
    ></StaticQuery>
  )
}

const FrontPageGrid = () => {
  return <Grid>{spitOutImages()}</Grid>
}

export default FrontPageGrid
