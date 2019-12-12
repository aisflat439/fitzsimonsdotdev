/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            <section>
              <h5>email</h5>
              <p>sign up for updates</p>
            </section>
            <section>
              <h5>links</h5>
              <ul>
                <li><Link to="/tips">Tips</Link></li>
                <li><Link to="/site-reviews">Site Reviews</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/thoughts">Thoughts</Link></li>
              </ul>
            </section>
            <section>
              <h5>social</h5>
              <ul>
                <li>twitter</li>
                <li>instagram</li>
                <li>linkedin</li>
              </ul>
            </section>
            © {new Date().getFullYear()}
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
