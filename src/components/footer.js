import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MuiLink from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import RedditIcon from '@material-ui/icons/Reddit';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

// import Link from './Link';
import NewsletterSignup from './NewsletterSignup';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.secondary.dark,
    color: palette.primary.main,
  },
  width: {
    maxWidth: 1440,
    margin: 'auto',
    padding: 24
  },
  centerFlex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const StyledFooter = styled.footer`
  background: linear-gradient(to right, ${({ theme }) => theme.palette.main.base} 50%, ${({ theme }) => theme.palette.main.saturated} );
  border-bottom: 5px solid #d1ad70;
  border-top: 5px solid #d1ad70;
  display: flex;
  justify-content: space-around;
  color: ${(props) => props.theme.text.header};
`;

const Footer = () => {
  const { allDirectory, site: { siteMetadata } } = useStaticQuery(graphql`
  query FoldersQuery {
    allDirectory(filter: {base: {nin: ["images", "deprecated", "posts"]}}) {
      edges {
        node {
          base
          id
        }
      }
    }
    site {
      siteMetadata {
        identityData {
          siteLink
          siteName
        }
      }
    }
  }
  `);

  const classes = useStyles();

  return (
    <>
      <StyledFooter>
        <div>
          <h4>Site Links</h4>
          <ul>
            {allDirectory.edges.map(({ node }) => (
              <li key={node.base}><Link to={`/${node.base}`}>{`${node.base}`}</Link></li>
            ))}
          </ul>
        </div>
        <div><h4>Newsletter</h4></div>
        <div>
          <h4>Social</h4>
          <ul>
            {siteMetadata.identityData.map((
              { siteLink, siteName }
            ) => (
                <li key={siteLink}>
                  <Link to={`/${siteLink}`}>
                    {`${siteName}`}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </StyledFooter>
      <Box className={classes.width}>
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        by Devin Fitzsimons
      </Box>
    </>
  );
};

export default Footer;
