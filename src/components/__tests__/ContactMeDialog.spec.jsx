import React from "react"
import { render, fireEvent } from "@testing-library/react"

import ContactMeDialog from '../ContactMeDialog'

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

  it("renders", () => {
    const { getByText } = renderWith({
      title: 'Some title'
    })

    expect(getByText("Some title")).toBeInTheDocument()
  })

  it("renders the contact form title when passed form='contact'", () => {
    const { getByText } = renderWith({
      form: 'contact'
    })

    expect(getByText(/request a site review/i)).toBeInTheDocument()
  })

  it("renders the Contact signup when passed form='contact'", () => {
    const { getByText } = renderWith({
      form: 'contact'
    })

    expect(getByText(/MockContact/i)).toBeInTheDocument()
  })

  it("renders the Newsletter signup when passed form is not passed contact", () => {
    const { getByText, debug } = renderWith({
      form: 'anything else'
    })

    expect(getByText(/MockNewsletterSignup/i)).toBeInTheDocument()
  })

  it("handles opening of the modal", () => {
    const { getByText, getByLabelText, debug } = renderWith({
      title: 'buttonTitle'
    })

    debug()
    expect(getByLabelText(''))
  })
})