import React from 'react';
import { render } from '@testing-library/react';

import ThoughtsPage from '../thoughts';

jest.mock('@material-ui/core/Link', () => ({ children }) => <div>{children}</div>);
jest.mock('../../components/PostSnippet', () => () => <div data-testid="TEST-PostSnippet">PostSnippet</div>);
jest.mock('../../components/layout', () => ({ children }) => <div>{children}</div>);
jest.mock('../../components/seo', () => () => 'SEO');

const renderWith = (overrides) => {
  const props = {
    data: {
      allMarkdownRemark: {
        edges: [
          {
            node: {
              frontmatter: {
                title: 'The title'
              },
              fields: {
                slug: '/the-path'
              }
            }
          },
          {
            node: {
              frontmatter: {
                title: 'The other title'
              },
              fields: {
                slug: '/the-other-path'
              }
            }
          },
          {
            node: {
              frontmatter: {
                title: 'The last title'
              },
              fields: {
                slug: '/the-last-path'
              }
            }
          },
        ],
        group: [
          {
            tag: 'One',
            totalCount: 1
          },
          {
            tag: 'Two',
            totalCount: 4
          }
        ],
        ...overrides
      },
    },
  };

  return render(<ThoughtsPage {...props} />);
};

describe('Thoughts', () => {
  it('only renders one post', () => {
    const { queryByTestId } = renderWith();

    expect(queryByTestId('TEST-PostSnippet')).toBeInTheDocument();
  });

  it("doesn't render the first post in previous posts", () => {
    const mockData = {
      edges: [
        {
          node: {
            frontmatter: {
              title: "I don't get rendered",
            },
            html: 'something about an excerpt',
            fields: {
              slug: '/not-rendered'
            }
          }
        },
        {
          node: {
            frontmatter: {
              title: 'I get rendered',
            },
            html: 'something about an excerpt',
            fields: {
              slug: '/the-rendered-path'
            }
          }
        },
      ],
    };
    const { getByTestId, queryByTestId } = renderWith(mockData);

    expect(getByTestId('/the-rendered-path')).toBeInTheDocument();
    expect(queryByTestId('/not-rendered')).not.toBeInTheDocument();
  });

  it('only renders the h2 title (Previous Posts) once', () => {
    const { getByText, queryAllByText } = renderWith();

    expect(getByText(/Previous Posts/i)).toBeInTheDocument();
    expect(queryAllByText(/Previous Posts/i).length).toEqual(1);
  });

  it('renders a grid of related posts if there are related posts', () => {
    const relatedPosts = {
      group: [
        {
          tag: 'OMG',
          totalCount: 1
        },
        {
          tag: 'GMO',
          totalCount: 4
        }
      ],
    };
    const { getByTestId } = renderWith(relatedPosts);

    expect(getByTestId('tags')).toBeInTheDocument();
  });

  it('does not renders a grid if there are no related posts', () => {
    const relatedPosts = {
      group: [],
    };
    const { queryByTestId } = renderWith(relatedPosts);

    expect(queryByTestId('tags')).not.toBeInTheDocument();
  });
});
