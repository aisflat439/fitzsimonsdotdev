import React from 'react';

import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import { dashCase } from '../utils';

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
      <h1>Categories</h1>
      <nav aria-label="main category listing">
        <ul cols="4">
          {group.map(({ fieldValue, totalCount }) => (
            <li key={fieldValue}>
              <div />
              <Link to={`/categories/${dashCase(fieldValue)}/`}>
                {`${fieldValue} (${totalCount})`}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </Layout>
);

export default TagsPage;

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
`;
