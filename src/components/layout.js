/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { useSelector } from "react-redux"
import { createMuiTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from "@material-ui/core/Box"
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../src/theme';
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const isLightMode = useSelector(state => state.userPreferences.lightmode)
  theme.palette.type = isLightMode ? 'light' : 'dark'
  const customTheme = createMuiTheme(theme)

  return (
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
      render={({ site }) => (
        <>
          <ThemeProvider theme={customTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Header siteTitle={site.siteMetadata.title} />
            <Box maxWidth={1440} px={3} my={10} mx="auto">{children}</Box>
            <Footer />
          </ ThemeProvider>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
