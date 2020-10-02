/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { useSelector } from 'react-redux';
import { createMuiTheme, ThemeProvider as MUITheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider as StyledThemeProvider, ThemeProvider } from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import theme from '../theme';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  let prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const hasSelectedPreference = useSelector((state) => state.userPreferences.lightmode);
  if (hasSelectedPreference !== undefined) {
    prefersDarkMode = hasSelectedPreference;
  }

  theme.palette.type = prefersDarkMode ? 'dark' : 'light';
  const customTheme = React.useMemo(() => createMuiTheme(theme), [prefersDarkMode]);

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
          <ThemeProvider theme={theme}>
            <MUITheme theme={customTheme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Header siteTitle={site.siteMetadata.title} />
              <Box maxWidth={1440} px={3} my={10} mx="auto">{children}</Box>
              <Footer />
            </MUITheme>
          </ThemeProvider>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
