import React from 'react';
import T from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PostSnippet from '../components/PostSnippet';
import SEO from '../components/seo';
import Tag from '../components/Tag';
import HeadingGroup from '../components/HeadingGroup';

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ThoughtsPage = ({ data }) => {
  const keywords = data.allMdx.group.map((keyword) => keyword.tag);
  const { title: postTitle, hashtags } = data.allMdx.edges[0].node.frontmatter;
  const { body, fields, timeToRead } = data.allMdx.edges[0].node;
  const { slug: postSlug } = fields;

  return (
    <Layout>
      <SEO title="Posts" keywords={keywords} />
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h5>Most recent post:</h5>
        <PostSnippet title={postTitle} timeToRead={timeToRead} content={body} slug={postSlug} />
      </div>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div>
          <HeadingGroup title="Related Posts" />
          <Grid>
            {data.allMdx.group.map(({ tag, totalCount }) => {
              if (!hashtags.includes(tag)) {
                return null;
              }
              return (
                <div key={`${tag}-${totalCount}`} data-testid="tags">
                  <Tag title={tag} count={totalCount} />
                </div>
              );
            })}
          </Grid>
        </div>
        {
          data.allMdx.edges.map(({ node }, index) => {
            const { title } = node.frontmatter;
            const { slug } = node.fields;
            if (index === 0) return null;
            return (
              <div key={slug}>
                {index === 1 && <HeadingGroup title="Previous Posts" />}
                <div data-testid={`${slug}`}>
                  <Link to={slug}>{title}</Link>
                </div>
              </div>
            );
          })
        }
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/thoughts/"}}) {
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
        body
        }
      }
    }
  }
`;

ThoughtsPage.propTypes = {
  data: T.shape().isRequired
};

export default ThoughtsPage;
