import React from "react"
import { render } from "@testing-library/react"

import ThoughtsPage from "../thoughts"

jest.mock("../../components/layout", () => ({ children }) => <div>{children}</div>)
jest.mock("../../components/seo", () => () => 'SEO')

const renderWith = (overrides) => {
  const props = {
    data: {
      allMarkdownRemark: {
        edges: [
          {
            node: {
              frontmatter: {
                title: "The title"
              },
              fields: {
                slug: '/the-path'
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
  }

  return render(<ThoughtsPage {...props} />)
}

describe("Thoughts", () => {
  it("only renders the first excerpt", () => {
    const mockData = {
      edges: [
        {
          node: {
            frontmatter: {
              title: "yee",
            },
            excerpt: 'something something',
            fields: {
              slug: '/the-path'
            }
          }
        },
        {
          node: {
            frontmatter: {
              title: "Not this title",
            },
            excerpt: "nothing nothing",
            fields: {
              slug: '/the-other-path'
            }
          }
        },
      ],
    }
    const { getByText, queryByText } = renderWith(mockData)

    expect(getByText(/something something/i)).toBeInTheDocument()
    expect(queryByText(/nothing nothing/i)).not.toBeInTheDocument()
  })

  it("doesn't render the first post in previous posts", () => {
    const mockData = {
      edges: [
        {
          node: {
            frontmatter: {
              title: "yee",
            },
            excerpt: 'something something',
            fields: {
              slug: '/not-rendered'
            }
          }
        },
        {
          node: {
            frontmatter: {
              title: "Not this title",
            },
            excerpt: "nothing nothing",
            fields: {
              slug: '/the-rendered-path'
            }
          }
        },
      ],
    }
    const { getByTestId, queryByTestId } = renderWith(mockData)

    expect(getByTestId('/the-rendered-path')).toBeInTheDocument()
    expect(queryByTestId('/not-rendered')).not.toBeInTheDocument()
  })
})