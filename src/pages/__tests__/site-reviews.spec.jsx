import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import SiteReviews from '../site-reviews';
import theme from '../../theme';

// eslint-disable-next-line react/prop-types
jest.mock('../../components/layout', () => ({ children }) => <div>{children}</div>);
jest.mock('../../components/seo', () => () => 'SEO');
jest.mock('gatsby-image', () => () => 'IMAGE');

const renderWith = (overrides) => {
  const props = {
    data: {
      allYoutubeVideo: {
        edges: [
          {
            node: {
              description: 'description for vid one',
              title: 'title for vid one',
              publishedAt: '2010-05-06T22:28:54Z',
              videoId: 'video-id-for-vid-one',
              localThumbnail: {
                childImageSharp: {
                  fixed: '3'
                }
              }
            }
          },
          {
            node: {
              description: 'description for vid two',
              title: 'title for vid two',
              publishedAt: '2020-06-16T11:59:18Z',
              videoId: 'video-id-for-vid-two',
              localThumbnail: {
                childImageSharp: {
                  fixed: '3'
                }
              }
            }
          },
        ],
        ...overrides
      },
    },
  };

  return render(
    <ThemeProvider theme={theme}>
      <SiteReviews {...props} />
    </ThemeProvider>
  );
};

describe('<SiteReviews />', () => {
  it('Renders the listings, most recent first', () => {
    const { queryAllByTestId } = renderWith();

    expect(queryAllByTestId('video-date')[0]).toHaveTextContent('June 16, 2020');
    expect(queryAllByTestId('video-date')[1]).toHaveTextContent('May 06, 2010');
  });
});
