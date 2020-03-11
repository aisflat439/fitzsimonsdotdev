import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { useDispatch } from 'react-redux';

import Header from "../header"

jest.mock('@material-ui/core/AppBar', () => ({ children }) => <div>{children}</div>)
jest.mock('@material-ui/core/Toolbar', () => ({ children }) => <div>{children}</div>)
jest.mock('@material-ui/core/Typography', () => ({ children }) => <div>{children}</div>)
jest.mock('@material-ui/core/Slide', () => ({ children }) => <div>{children}</div>)
jest.mock('@material-ui/core/Link', () => 'Link')

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}))

const renderWith = (overrides) => {
  const props = {
    siteTitle: "OMG the Site!",
    ...overrides
  }

  return render(<Header {...props} />)
}

describe("Header", () => {
  it("renders correctly", () => {
    const { getByText } = renderWith({
      siteTitle: 'Title'
    })

    expect(getByText(/Title/i)).toBeInTheDocument()
  })

  it("dispatches toggle theme mode on click", () => {
    const mockDispatch = jest.fn()
    useDispatch.mockReturnValue(mockDispatch)
    const { getByTestId } = renderWith()

    expect(mockDispatch).not.toHaveBeenCalled()
    fireEvent.click(getByTestId('theme-toggle'))
    expect(mockDispatch).toHaveBeenCalled()
  })
})