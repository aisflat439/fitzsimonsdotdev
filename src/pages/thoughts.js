import React from 'react';
import { graphql } from 'gatsby';
import T from 'prop-types';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout';
import PostSnippet from '../components/PostSnippet';
import SEO from '../components/seo';
import Link from '../components/Link';
import Tag from '../components/Tag';

const ThoughtsPage = ({ data }) => {
  const keywords = data.allMarkdownRemark.group.map((keyword) => keyword.tag);
  const { postTitle } = data.allMarkdownRemark.edges[0].node.frontmatter;
  const { html: body, fields, timeToRead } = data.allMarkdownRemark.edges[0].node;
  const { postSlug } = fields;

  return (
    <Layout>
      <SEO title="Posts" keywords={keywords} />
      <Box style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Typography component="h3" variant="h5">Most recent post:</Typography>
        <PostSnippet title={postTitle} timeToRead={timeToRead} content={body} slug={postSlug} />
      </Box>
      <Box style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Box>
          <Typography variant="h2">Related Posts</Typography>
          {data.allMarkdownRemark.group.length
            && (
              <Grid container spacing={3} data-testid="tags">
                {data.allMarkdownRemark.group.map(({ tag, totalCount }) => (
                  <Grid key={`${tag}-${totalCount}`} item xs={6} sm={3} md={2}>
                    <Tag title={tag} count={totalCount} />
                  </Grid>
                ))}
              </Grid>
            )}
        </Box>
        {
          data.allMarkdownRemark.edges.map(({ node }, index) => {
            const { title } = node.frontmatter;
            const { slug } = node.fields;
            if (index === 0) return null;
            return (
              <Box key={slug}>
                {index === 1 && <Typography variant="h2">Previous Posts</Typography>}
                <Box data-testid={`${slug}`}>
                  <Link to={slug}>{title}</Link>
                </Box>
              </Box>
            );
          })
        }
      </Box>
    </Layout>
  );
};

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
        timeToRead
        html
        }
      }
    }
  }
`;

ThoughtsPage.propTypes = {
  data: T.shape().isRequired
};

export default ThoughtsPage;
