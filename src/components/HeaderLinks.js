import React from 'react'
import { Link, prefetchPathname } from "gatsby"
import { useLocation } from "@reach/router"

const HeaderLinks = ({ siteTitle }) => {
  const location = useLocation()

  return (
    <>
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
      <Link
        to="/site-reviews"
      >
        Site Reviews
      </Link>
      <Link
        to="/thoughts"
      >
        Thoughts
      </Link>
      <Link
        to="/tips"
      >
        Tips
      </Link>
    </>
  )
}

export default HeaderLinks