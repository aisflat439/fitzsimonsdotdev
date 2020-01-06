import React from "react"
import { render } from "@testing-library/react"

import ContactMeDialog from '../ContactMeDialog'

jest.mock('@material-ui/core/Link', () => ({ children }) => <div>{children}</div>)

const renderWith = (overrides) => {
  const props = {
    title: "the title",
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

  it("renders the contact form when passed form='contact'", () => {
    const { getByText } = renderWith({
      form: 'contact'
    })

    expect(getByText(/request a site review/i)).toBeInTheDocument()
  })

  // it("displays only the correct folders", () => {
  //   const { queryByText } = render(<Footer />)

  //   expect(queryByText("deprecated")).not.toBeInTheDocument()
  //   expect(queryByText("images")).not.toBeInTheDocument()
  //   expect(queryByText("posts")).not.toBeInTheDocument()
  //   expect(queryByText("anything else")).toBeInTheDocument()
  // })
})