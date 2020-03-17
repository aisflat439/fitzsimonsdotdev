import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import Seo from '../seo'

const renderWith = (overrides) => {
  const props = {
    title: "I'm a title!",
    description: "Yolo!",
    ...overrides
  }

  return render(<Seo {...props} />)
}

describe('<SEO />', () => {
  it('works', () => {
    const { debug } = renderWith()

    expect(1).toBe(1)
  })

  beforeEach(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: "I'm a title!",
          description: "Yolo!"
        }
      }
    }
    )
  })
})