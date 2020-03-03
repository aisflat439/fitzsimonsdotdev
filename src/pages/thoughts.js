import React from "react"
import { graphql } from 'gatsby'
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import PostSnippet from "../components/PostSnippet"
import SEO from "../components/seo"
import Link from '../components/Link'


const ThoughtsPage = ({ data }) => {
  const keywords = data.allMarkdownRemark.group.map(keyword => keyword.tag)
  const { title } = data.allMarkdownRemark.edges[0].node.frontmatter
  const { excerpt, fields } = data.allMarkdownRemark.edges[0].node
  const { slug } = fields

  return (
    <Layout>
      <SEO title="Posts" keywords={keywords} />
      <Box>
        <Typography variant="h2">Thoughts</Typography>
        <Typography component="span" variant="h5">Most recent post:</Typography>
        <PostSnippet title={title} excerpt={excerpt} slug={slug} />
      </Box>
      <Box>
        <Box>
          <Typography variant="h2">Related Posts</Typography>
          {data.allMarkdownRemark.group.map(({ tag }) => (
            <p key={tag}>{tag}</p>
          ))}
        </Box>
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          const { title } = node.frontmatter
          const { slug } = node.fields
          if (index === 0) return null
          return (
            <Box key={slug}>
              {index === 1 && <Typography variant="h2">Previous Posts</Typography>}
              <Box data-testid={`${slug}`}>
                <Link to={slug}>{title}</Link>
              </Box>
            </Box>
          )
        })}
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
