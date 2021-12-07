import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import T from 'prop-types';

import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Link from '../components/Link';
import CodeBlock from '../components/CodeBlock';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeadingGroup from '../components/HeadingGroup';

const components = {
  pre: CodeBlock,
  code: CodeBlock,
};

const PostPage = ({ data }) => {
  const currentPost = data.mdx;
  const {
    date,
    updated,
    title: postTitle,
    description,
  } = currentPost.frontmatter;
  const matchingTags = currentPost.frontmatter.hashtags || [];
  const relevantTags = data.allMarkdownRemark.edges.filter(({ node }) => {
    const tags = node.frontmatter.hashtags || [];
    const intersections = tags.filter((tag) => matchingTags.includes(tag));

    return !!intersections.length && node;
  });

  const schema = `"@type": "Article","headline": "${postTitle}","description": "${description}","articleSection": "${matchingTags.toString()}","datePublished": "${date}T08:08:40+00:00","dateModified": "${updated}T08:43:03+00:00",`;
  const hasSimilarPosts = !!relevantTags.length;

  const StyledPost = styled.div`
    p {
      font-size: 1.35rem;
      line-height: 145%;
    }
  `;

  return (
    <Layout>
      <SEO
        title={currentPost.frontmatter.title}
        keywords={[
          ...[
            'ecommerce',
            'gatsby',
            'ecommerce tips',
            'ecommerce design and development',
          ],
          ...matchingTags,
        ]}
        description={description}
        schema={schema}
      />
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <HeadingGroup title={currentPost.frontmatter.title} component="h1" />
        <StyledPost>
          <MDXProvider components={components}>
            <MDXRenderer>{currentPost.body}</MDXRenderer>
          </MDXProvider>
        </StyledPost>
        {hasSimilarPosts &&
          relevantTags.map(({ node }, index) => {
            const {
              frontmatter: { title },
              fields: { slug },
            } = node;

            if (title === currentPost.frontmatter.title) return null;
            return (
              <div key={slug}>
                {index === 0 && <HeadingGroup title="Similar Posts" />}
                <div data-testid={`${slug}`}>
                  <Link to={slug}>{title}</Link>
                </div>
              </div>
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
      ),
    }),
    mdx: T.shape({
      frontmatter: T.shape(),
      body: T.string,
      slug: T.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostPage;

export const query = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      slug
      frontmatter {
        slug
        hashtags
        title
        date
        description
        updated
      }
      body
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
