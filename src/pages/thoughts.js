import React from "react"
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

const ThoughtsPage = ({ data }) => (
  <Layout>
    <SEO title="Posts" keywords={[`ecommerce`, `ecommerce development`, `shopfiy`]} />
    <Box>
      <Typography variant="h1">Thoughts</Typography>
      <p>Most recent post:</p>
      {data.allMarkdownRemark.edges[0].node.frontmatter.title}<br />
      {data.allMarkdownRemark.edges[0].node.excerpt}
      <Link to={data.allMarkdownRemark.edges[0].node.fields.slug} >yeee</Link>
    </Box>
    <Box>
      <Box>
        <Typography variant="h2">Hashtags</Typography>
        {data.allMarkdownRemark.group.map(({ tag }) => (
          <p key={tag}>{tag}</p>
        ))}
      </Box>
      <Box>
        <Typography variant="h2">Previous Posts</Typography>
        {data.allMarkdownRemark.edges.map(({ title, slug }, index) => {
          if (index === 0) return null
          return (
            <Box key={slug}>
              <p>{title}</p>
              <p>{slug}</p>
            </Box>
          )
        })}
      </Box>
    </Box>
  </Layout>
)

export const query = graphql`
query {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/thoughts/"}}) {
      group(field: frontmatter___hashtags) {
      tag: fieldValue
    totalCount
  }
    edges {
      node {
      id
        frontmatter {
      title
          hashtags
  }
        fields {
      slug
    }
    excerpt
  }
}
}
}

`

export default ThoughtsPage
