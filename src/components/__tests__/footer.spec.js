import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import Footer from '../footer'


describe('<Footer/>', () => {
  beforeEach(() => {
    useStaticQuery.mockReturnValue({
      allDirectory: {
        edges: [
          {node: {
            base: "deprecated",
            id: 123,
          }},
          {node: {
            base: "anything else",
            id: 1234,
          }},
        ]
      },
    }
  ) })

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