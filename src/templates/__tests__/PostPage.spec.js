/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

import PostPage from '../PostPage';

jest.mock('../../components/layout', () => ({ children }) => <div>{children}</div>);
jest.mock('../../components/Link', () => ({ children }) => <div>{children}</div>);
jest.mock('../../components/seo', () => () => 'SEO');

const generateMarkdownFrontmatter = (overrides) => ({
  title: 'a title',
  hashtags: ['one', 'two'],
  ...overrides
});

describe('<PostPage />', () => {
  const setup = (overrides) => {
    const props = {
      data: {
        allMarkdownRemark: {
          edges: [
            {
              node: {
                frontmatter: generateMarkdownFrontmatter({ title: 'allMarkdownTitle' }),
                fields: {
                  slug: '/some/slug'
                }
              }
            }
          ],
        },
        markdownRemark: {
          frontmatter: generateMarkdownFrontmatter({ title: 'markdownRemarkTitle' }),
          html: '<div>Some dangerous HTML</div>'
        },
        ...overrides
      }
    };

    const R = render(
      <ThemeProvider theme={theme}>
        <PostPage {...props} />
      </ThemeProvider>
    );

    return {
      ...R,
      props
    };
  };

  it('renders the title', () => {
    const { getByText } = setup();

    expect(getByText(/markdownRemarkTitle/i)).toBeInTheDocument();
  });

  it('renders the matching articles', () => {
    const mockMarkdownRemark = {
      frontmatter: generateMarkdownFrontmatter({ hashtags: ['matching'] })
    };
    const { queryByText } = setup({ markdownRemark: mockMarkdownRemark });

    expect(queryByText(/allMarkdownTitle/)).not.toBeInTheDocument();
  });

  it('renders no similar posts when are no matching articles', () => {
    const mockMarkdownRemark = {
      frontmatter: generateMarkdownFrontmatter({ hashtags: undefined })
    };
    const { getByText, queryByText } = setup({ markdownRemark: mockMarkdownRemark });

    expect(getByText(/a title/i)).toBeInTheDocument();
    expect(queryByText(/similar posts/)).not.toBeInTheDocument();
  });

  it('only renders titles with matching tags', () => {
    const allMarkdownRemark = {
      edges: [
        {
          node: {
            frontmatter: generateMarkdownFrontmatter({ title: 'no match', hashtags: ['no match'] }),
            fields: {
              slug: '/bad/slug'
            }
          }
        },
        {
          node: {
            frontmatter: generateMarkdownFrontmatter({ title: 'some match', hashtags: ['some match'] }),
            fields: {
              slug: '/good/slug'
            }
          }
        }
      ],
    };

    const markdownRemark = {
      frontmatter: generateMarkdownFrontmatter({ title: 'this title is not rendered', hashtags: ['some match'] }),
      html: '<div>Some dangerous HTML</div>'
    };

    const { getByText, queryByText } = setup({ allMarkdownRemark, markdownRemark });

    expect(getByText(/some match/)).toBeInTheDocument();
    expect(queryByText(/no match/)).not.toBeInTheDocument();
  });
});
