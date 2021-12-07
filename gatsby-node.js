const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx' || node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const tagTemplate = path.resolve('./src/templates/tags.js');
  const postPage = path.resolve('./src/templates/PostPage.js');

  const result = await graphql(`
    query {
      tagsGroup: allMdx {
        group(field: frontmatter___hashtags) {
          fieldValue
        }
      }
      allMdx {
        edges {
          node {
            frontmatter {
              hashtags
            }
            slug
          }
        }
      }
    }
  `);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const mdx = result.data.allMdx.edges;
  const tags = result.data.tagsGroup.group;
  const filteredMdxPosts = mdx.filter(
    ({ node }) => !node.slug.includes('deprecated')
  );

  filteredMdxPosts.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: postPage,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });

  tags.forEach((tag) => {
    createPage({
      path: `/categories/${_.kebabCase(tag.fieldValue)}`,
      component: tagTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        tag: tag.fieldValue,
      },
    });
  });
};
