import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import CodeBlock from './CodeBlock';

import HeadingGroup from './HeadingGroup';

import SEO from './seo';

const components = {
  pre: CodeBlock,
  code: CodeBlock
};

const StyledPost = styled.div`
  p {
    font-size: 1.35rem;
    line-height: 145%;
  }
`;

const PostSnippet = ({
  title, timeToRead, slug, content
}) => (
  <>
    <SEO canonical={`https://www.fitzsimons.dev${slug}`} title={title} />
    <article>
      <HeadingGroup component="h1" title={title} />
      {`Read time estimate: ${timeToRead} minutes`}
      <StyledPost>
        <MDXProvider components={components}>
          <MDXRenderer>{content}</MDXRenderer>
        </MDXProvider>
      </StyledPost>
    </article>
  </>
);

PostSnippet.propTypes = {
  title: T.string.isRequired,
  timeToRead: T.number.isRequired,
  content: T.string.isRequired,
  slug: T.string.isRequired,
};

export default PostSnippet;
