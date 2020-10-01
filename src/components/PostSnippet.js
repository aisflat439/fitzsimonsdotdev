import React from 'react';
import Typography from '@material-ui/core/Typography';
import SEO from './seo';
import Markdown from './Markdown';

const PostSnippet = ({
    title, timeToRead, content, slug
}) => (
        <>
            <SEO canonical={`https://www.fitzsimons.dev${slug}`} />
            <article>
                <Typography component="h1" variant="h5" display="inline">{title}</Typography>
                <Typography>
                    ~
        {timeToRead}
                    {' '}
        read time
      </Typography>
                <Markdown>
                    {content}
                </Markdown>
            </article>
        </>
    );

export default PostSnippet;
