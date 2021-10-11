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
              <div>
                <h3>
                  Hopefully this is obvious but I'm doing a redesign, more just
                  a tidying up, but whatever. Sorry for the appearance
                </h3>
              </div>
              <Header siteTitle={site.siteMetadata.title} />
              <StyledContent>{children}</StyledContent>
              <Footer />
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
