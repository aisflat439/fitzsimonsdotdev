import React from "react"
import { render } from "@testing-library/react"
import Footer from '../footer'

test("Displays the correct title", () => {
  const { getByTestId } = render(<Footer />)
  
  expect(getByTestId("footer")).toBeInTheDocument()
})