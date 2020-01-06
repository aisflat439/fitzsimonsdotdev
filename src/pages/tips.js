import React from "react"
import { graphql } from 'gatsby'

import PostSnippet from "../components/PostSnippet"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const keywords = data.allMarkdownRemark.group.map(keyword => keyword.tag)
  const { title } = data.allMarkdownRemark.edges[0].node.frontmatter
  const { excerpt, fields } = data.allMarkdownRemark.edges[0].node
  const { slug } = fields

  return (
    <Layout>
      <SEO title="Posts" keywords={keywords} />
      <h1>Ecommerce from a developers perspective</h1>
      <main>
        <h2>Most Recent Tip</h2>
        <PostSnippet title={title} excerpt={excerpt} slug={slug} />
        <article>
          <h3>Tip!</h3>
          <p>Do the things!</p>
        </article>
      </main>
      <aside>
        <h2>Tips Listing</h2>
        <ul>
          <li>List of tips here</li>
        </ul>
      </aside>
    </Layout>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/tips/"}}) {
    totalCount
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

export default IndexPage
