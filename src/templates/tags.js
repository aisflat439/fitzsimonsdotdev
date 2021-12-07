import React from 'react';
import T from 'prop-types';

import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, group } = data.allMdx;
  const { totalCount } = group.find((g) => g.tag === tag);
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields;
          const { title } = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/categories">All categories</Link>
    </Layout>
  );
};
export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { hashtags: { in: [$tag] } } }
    ) {
      group(field: frontmatter___hashtags) {
        tag: fieldValue
        totalCount
      }
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

Tags.propTypes = {
  pageContext: T.shape().isRequired,
  data: T.shape().isRequired,
};
