import React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Posts" keywords={[`ecommerce`, `ecommerce development`, `shopfiy`]} />
    <h1>Ecommerce from a developers perspective</h1>
    <main>
      <h2>Most Recent Tip</h2>
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
