import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';

import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Footer from '../footer';

describe('<Footer/>', () => {
  const setup = (overrides) => {
    const props = {
      ...overrides
    };

    const R = render(
      <ThemeProvider theme={theme}>
        <Footer {...props} />
      </ThemeProvider>
    );

    return {
      ...R,
      props
    };
  };
  beforeEach(() => {
    useStaticQuery.mockReturnValue({
      allDirectory: {
        edges: [
          {
            node: {
              base: 'query',
              id: 123,
            }
          },
          {
            node: {
              base: 'response',
              id: 1234,
            }
          },
        ]
      },
      site: {
        siteMetadata: {
          identityData: [
            {
              siteName: 'Twitter',
              siteLink: 'https://twitter.com/fitzsimons_dev',
            },
          ]
        }
      }
    });
  });

  it('renders', () => {
    const { getByText } = setup();

    expect(getByText(/Site Links/i)).toBeInTheDocument();
  });

  it('displays the query response', () => {
    const { queryByText } = setup();

    expect(queryByText('query')).toBeInTheDocument();
    expect(queryByText('response')).toBeInTheDocument();
  });
});
