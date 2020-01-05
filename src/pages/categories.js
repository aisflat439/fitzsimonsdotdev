import React from "react"
import PropTypes from "prop-types"

import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'

import { dashCase } from '../utils'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout>
      <Helmet title={title} />
      <div>
        <h1>Tags</h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/categories/${dashCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
            </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___hashtags) {
        fieldValue
        totalCount
      }
    }
  }
`