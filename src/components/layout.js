/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import styled, { ThemeProvider } from 'styled-components';
import {
  createMuiTheme,
  ThemeProvider as MUITheme,
} from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyle from '../globalStyles';

import theme from '../theme';
import Header from './header';
import Footer from './footer';

const StyledPage = styled.div`
  background-color: ${(props) => props.theme.palette.alternate.lowlight};
`;

const StyledContent = styled.div`
  max-width: 1440px;
  margin: 1rem auto;
  padding: 1rem;
`;

const Layout = ({ children }) => {
  let prefersDarkMode = false;
  const hasSelectedPreference = undefined;
  if (hasSelectedPreference !== undefined) {
    prefersDarkMode = hasSelectedPreference;
  }

  theme.palette.type = prefersDarkMode ? 'dark' : 'light';
  const customTheme = React.useMemo(() => createMuiTheme(theme), [
    prefersDarkMode,
  ]);

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
            <GlobalStyle />
            <StyledPage>
              <MUITheme theme={customTheme}>
                {/* CssBaseline kickstart an elegant, consistent, 
              and simple baseline to build upon. */}
                <CssBaseline />
                <Header siteTitle={site.siteMetadata.title} />
                <StyledContent>{children}</StyledContent>
                <Footer />
              </MUITheme>
            </StyledPage>
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
