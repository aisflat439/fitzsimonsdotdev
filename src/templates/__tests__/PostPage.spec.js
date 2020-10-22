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
          group: [
            { tag: 'one', totalCount: 3 },
            { tag: 'three', totalCount: 1 },
          ],
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

  it('renders', () => {
    const { getByText } = setup();

    expect(getByText(/markdownRemarkTitle/i)).toBeInTheDocument();
  });
});
