import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import Footer from '../footer'
jest.mock('@material-ui/core/Link', () => ({ children }) => <div>{children}</div>)

describe('<Footer/>', () => {
  beforeEach(() => {
    useStaticQuery.mockReturnValue({
      allDirectory: {
        edges: [
          {
            node: {
              base: "deprecated",
              id: 123,
            }
          },
          {
            node: {
              base: "anything else",
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
    }
    )
  })

  it("renders", () => {
    const { getByTestId } = render(<Footer />)

    expect(getByTestId("footer")).toBeInTheDocument()
  })

  it("displays only the correct folders", () => {
    const { queryByText } = render(<Footer />)

    expect(queryByText("deprecated")).not.toBeInTheDocument()
    expect(queryByText("images")).not.toBeInTheDocument()
    expect(queryByText("posts")).not.toBeInTheDocument()
    expect(queryByText("anything else")).toBeInTheDocument()
  })
})