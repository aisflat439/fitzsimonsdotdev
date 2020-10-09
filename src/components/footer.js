import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Box from '@material-ui/core/Box';

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
                // eslint-disable-next-line react/jsx-indent
                <li key={siteLink}>
                  <Link to={`/${siteLink}`}>
                    {`${siteName}`}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </StyledFooter>
      <Box style={{ maxWidth: 1440 }}>
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
