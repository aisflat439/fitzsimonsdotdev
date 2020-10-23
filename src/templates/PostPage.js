import React from 'react';
import { graphql } from 'gatsby';
import T from 'prop-types';
import Box from '@material-ui/core/Box';
import Link from '../components/Link';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeadingGroup from '../components/HeadingGroup';

const PostPage = ({ data }) => {
  const currentPost = data.markdownRemark;
  const matchingTags = currentPost.frontmatter.hashtags || [];
  const relevantTags = data.allMarkdownRemark.edges.filter(({ node }) => {
    const tags = node.frontmatter.hashtags || [];
    const intersections = tags.filter((tag) => matchingTags.includes(tag));

    return !!intersections.length && node;
  });

  const hasSimilarPosts = !!relevantTags.length;

  return (
    <Layout>
      <SEO
        title={currentPost.frontmatter.title}
        keywords={[
          ...['ecommerce',
            'gatsby',
            'ecommerce tips',
            'ecommerce design and development',
          ],
          ...matchingTags
        ]}
      />
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <HeadingGroup title={currentPost.frontmatter.title} component="h1" />
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: currentPost.html }} />
        {hasSimilarPosts
          && relevantTags.map(({ node }, index) => {
            const { frontmatter: { title }, fields: { slug } } = node;

            if (title === currentPost.frontmatter.title) return null;
            return (
              <Box key={slug}>
                {index === 0 && <HeadingGroup title="Similar Posts" />}
                <Box data-testid={`${slug}`}>
                  <Link to={slug}>{title}</Link>
                </Box>
              </Box>
            );
          })}
      </div>
    </Layout>
  );
};

PostPage.propTypes = {
  data: T.shape({
    allMarkdownRemark: T.shape({
      edges: T.arrayOf(
        T.shape({
          node: T.shape({
            frontmatter: T.shape(),
            fields: T.shape(),
          }).isRequired,
        })
      )
    }),
    markdownRemark: T.shape({
      frontmatter: T.shape(),
      html: T.string
    }).isRequired,
  }).isRequired,
};

export default PostPage;

export const query = graphql`
  query($slug: String!) {
      markdownRemark(fields: {slug: {eq: $slug } }) {
        html
        frontmatter {
          title
          hashtags
        }
      }
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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
        }
      }
    }
  }
`;
