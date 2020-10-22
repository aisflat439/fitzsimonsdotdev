import React from 'react';
import { graphql } from 'gatsby';
import Box from '@material-ui/core/Box';
import Link from '../components/Link';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeadingGroup from '../components/HeadingGroup';

const PostPage = ({ data }) => {
  const currentPost = data.markdownRemark;
  const matchingTags = data.markdownRemark.frontmatter.hashtags ? data.markdownRemark.frontmatter.hashtags : [];
  const relevantTags = data.allMarkdownRemark.edges.filter(({ node }) => {
    const tags = node.frontmatter.hashtags;
    const intersections = tags !== null ? tags.filter((tag) => (matchingTags ? matchingTags.includes(tag) : null)) : null;
    return intersections?.length > 0 ? node : null;
  });

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
        {relevantTags.length
          && relevantTags.map(({ node }, index) => {
            const { title } = node.frontmatter;
            const { slug } = node.fields;
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
        }
      }
    }
  }
`;
