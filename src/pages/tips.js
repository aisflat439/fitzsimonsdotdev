import React from 'react';
import { graphql } from 'gatsby';

import PostSnippet from '../components/PostSnippet';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const keywords = data.allMdx.group.map((keyword) => keyword.tag);
  const { title } = data.allMdx.edges[0].node.frontmatter;
  const { body, fields, timeToRead } = data.allMdx.edges[0].node;
  const { slug } = fields;

  return (
    <Layout>
      <SEO title="Tips" keywords={keywords} />
      <h1>Ecommerce and development tips from a developers perspective</h1>
      <main>
        <h2>Most Recent Tip</h2>
        <PostSnippet title={title} content={body} slug={slug} timeToRead={timeToRead} />
      </main>
      <aside>
        <h2>Tips Listing</h2>
        <ul>
          <li>List of tips goes here once I get around to making a tips list!</li>
        </ul>
      </aside>
    </Layout>
  );
};

export const query = graphql`
query {
  allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/tips/"}}) {
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
        body
        timeToRead
      }
    }
  }
}

`;

export default IndexPage;
