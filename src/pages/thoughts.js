import React from "react"
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

const ThoughtsPage = ({ data }) => {
  const keywords = data.allMarkdownRemark.group.map(keyword => keyword.tag)

  return (
    <Layout>
      <SEO title="Posts" keywords={keywords} />
      <Box>
        <Typography variant="h2">Thoughts</Typography>
        <Typography component="span" variant="h5">Most recent post:</Typography>
        <Typography component="h1" variant="h5" display="inline">{data.allMarkdownRemark.edges[0].node.frontmatter.title}</Typography>
        <Typography>{data.allMarkdownRemark.edges[0].node.excerpt}</Typography>
        <Link to={data.allMarkdownRemark.edges[0].node.fields.slug} >yeee</Link>
      </Box>
      <Box>
        <Box>
          <Typography variant="h2">Related Posts</Typography>
          {data.allMarkdownRemark.group.map(({ tag }) => (
            <p key={tag}>{tag}</p>
          ))}
        </Box>
        <Box>
          <Typography variant="h2">Previous Posts</Typography>
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            const { title } = node.frontmatter
            const { slug } = node.fields
            if (index === 0) return null
            return (
              <Box key={slug} data-testid={`${slug}`}>
                <p>{title}</p>
                <p>{slug}</p>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Layout>
  )
}

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
    excerpt(pruneLength: 500)
  }
}
}
}

`

export default ThoughtsPage
