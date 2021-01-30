import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostSnippet from '../components/PostSnippet';

const OneHundredDaysPage = ({ data }) => {
  const { title: postTitle, hashtags } = data.allMdx.edges[0].node.frontmatter;
  const { body, fields, timeToRead } = data.allMdx.edges[0].node;
  const { slug: postSlug } = fields;

  return (
    <Layout>
      <SEO title="100 Day Challenges" />
      100 days here
      <PostSnippet title={postTitle} timeToRead={timeToRead} content={body} slug={postSlug} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/100DaysOfCode/"}}) {
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
        timeToRead
        body
        }
      }
    }
  }
`;

export default OneHundredDaysPage;
