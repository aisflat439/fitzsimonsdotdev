import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import HeadingGroup from './HeadingGroup';

import SEO from './seo';

const StyledPost = styled.div`
  p {
    font-size: 1.35rem;
    line-height: 145%;
  }
`;

const PostSnippet = ({
  title, timeToRead, content, slug
}) => (
    <>
      <SEO canonical={`https://www.fitzsimons.dev${slug}`} title={title} />
      <article>
        <HeadingGroup component="h1" title={title} />
        <Typography>
          ~
        {' '}
          {timeToRead}
          {' '}
        read time
      </Typography>
        <StyledPost dangerouslySetInnerHTML={{ __html: content }} />
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
