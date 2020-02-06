import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { useDispatch } from 'react-redux';

import ContactMeDialog from '../ContactMeDialog'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}))
jest.mock('@material-ui/core/Link', () => ({ children }) => <div>{children}</div>)
jest.mock('../Contact', () => () => 'MockContact')
jest.mock('../NewsletterSignup', () => () => 'MockNewsletterSignup')

const renderWith = (overrides) => {
  const props = {
    title: "the button title",
    form: "contact",
    ...overrides
  }

  return render(<ContactMeDialog {...props} />)
}

describe('<ContactMeDialog />', () => {
  it("renders the contact form title when passed form='contact'", () => {
    const { getByText } = renderWith({
      form: 'contact'
    })

    expect(getByText(/request a site review/i)).toBeInTheDocument()
    expect(getByText(/MockContact/i)).toBeInTheDocument()
  })

  it("renders the Newsletter signup when passed form is not passed contact", () => {
    const { getByText, getByTestId } = renderWith({
      form: 'anything else'
    })

    expect(getByTestId('newsletter-title')).toBeInTheDocument()
    expect(getByText(/MockNewsletterSignup/i)).toBeInTheDocument()
  })

  it("handles opening of the modal", () => {
    const mockDispatch = jest.fn()
    useDispatch.mockReturnValue(mockDispatch)

    const { getByText } = renderWith({
      title: 'buttonTitle'
    })

    expect(mockDispatch).not.toHaveBeenCalled()
    fireEvent.click(getByText('buttonTitle'))
    expect(mockDispatch).toHaveBeenCalled()
  })
})