import React from 'react';
import styled from 'styled-components';

import Img from 'gatsby-image';

export const StyledDivider = styled.div`
  border-bottom: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, 
    ${({ theme }) => theme.palette.brand.base},
    ${({ theme }) => theme.palette.brand.saturated},
    ${({ theme }) => theme.palette.alternate.base},
    ${({ theme }) => theme.palette.alternate.saturated}
  );
  margin: 3rem;
`;

const StyledImg = styled(Img)`
  border: 9px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(0.7turn,
    ${({ theme }) => theme.palette.highlight.base},
    ${({ theme }) => theme.palette.highlight.saturated},
    ${({ theme }) => theme.palette.highlight.base}
  ); 
`;

const StyledListItem = styled.li`
  background-color: ${({ theme }) => theme.palette.brand.lowlight};
  padding: .5rem;

  > div {
    border: 2px solid ${({ theme }) => theme.palette.highlight.base};
    position: relative;
    padding: 0 2rem;

    :before, :after {
      width: 30px;
      height: 25px;
      background: ${({ theme }) => theme.palette.highlight.base};
      content: "";
      display: block;
      position: absolute;
      top: 45%;
      z-index: 100;
    }

    :before {
      left: -.5rem;
    }

    :after {
      right: -.5rem;
    }

    > div {
      display: flex;
      margin-bottom: .5rem;
      @media only screen and (max-width: 768px)  {
        flex-direction: column-reverse;
      }

      > div, p {
        padding: 8px;
      }

      > div {
        flex: 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      >p {
        flex: 7;
      }
    }
  }

  h2 {
    text-align: center;
    margin: .5rem auto;
  }
`;

const formatVideoDate = (dateString) => {
  const date = new Date(dateString);
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  return `${month} ${day}, ${year}`;
};

const VideoListing = ({
  video: {
    title, description, videoId, localThumbnail, publishedAt
  }
}) => (
    <>
      <StyledListItem>
        <div>
          <h2>{title}</h2>
          <div>
            <p>{description}</p>
            <div>
              <span data-testid="video-date">{formatVideoDate(publishedAt)}</span>
              <StyledImg fixed={localThumbnail.childImageSharp.fixed} />
              <a
                target="blank"
                rel="noopener"
                href={`https://www.youtube.com/watch?v=${videoId}`}
              >
                View on YouTube
            </a>
            </div>
          </div>
        </div>
      </StyledListItem>
      <StyledDivider />
    </>
  );

export default VideoListing;
