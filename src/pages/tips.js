import React from 'react';
import { graphql, Link } from 'gatsby';

import PostSnippet from '../components/PostSnippet';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const keywords = data.allMdx.group.map((keyword) => keyword.tag);
  console.log('data.allMdx: ', data.allMdx);
  const { title } = data.allMdx.edges[0].node.frontmatter;
  const { body, fields, timeToRead } = data.allMdx.edges[0].node;
  const { slug } = fields;

  return (
    <Layout>
      <SEO keywords={keywords} />
      <main style={{ maxWidth: '1440px', margin: '3rem' }}>
        <h1>Ecommerce and development tips from a developers perspective</h1>
        <h2>Most Recent Tip</h2>
        <PostSnippet
          title={title}
          content={body}
          slug={slug}
          timeToRead={timeToRead}
        />
      </main>
      <aside style={{ maxWidth: '1440px', margin: '3rem' }}>
        <h2>Tips Listing</h2>
        <ul>
          {data.allMdx.edges.map(({ node: { fields, frontmatter } }) => (
            <li>
              <Link to={fields.slug}>{frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/tips/" } }
    ) {
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
