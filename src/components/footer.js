import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 9rem;
  background: linear-gradient(to right, ${({ theme }) => theme.palette.main.base} 50%, ${({ theme }) => theme.palette.main.saturated} );
  border-bottom: 5px solid #d1ad70;
  border-top: 5px solid #d1ad70;
  color: ${(props) => props.theme.text.header};
  text-align: center;
  
  div {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

const StyledChevron = styled.div`
  font-size: 4rem;
  height: 8rem;
  position: relative;

  div {
    border: 5px solid #d1ad70;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 10rem;
    top: -5rem;
    left: 50%;
    right: 50%;
    background-color: ${({ theme }) => theme.palette.alternate.base};
    position: absolute;
    transform: rotate(45deg) translate(-3rem, 3rem);
    
    span {
      color: ${({ theme }) => theme.palette.main.base};
      transform: rotate(-45deg);  
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 3rem;

  a {
    color: ${(props) => props.theme.text.header};
    text-decoration: none;
    display: block;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  li {
    padding: 2rem 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.palette.alternate.base};
    position: relative;

    ::after {
      content: "";
      position: absolute;
      transform: translate(-.7rem,1.3rem) rotate(45deg);
      height: 1.5rem;
      width: 1.5rem;
      background-color: ${({ theme }) => theme.palette.alternate.base};
      border: 2px solid ${({ theme }) => theme.palette.highlight.base};
    }
  }
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
        <StyledChevron>
          <div>
            <span>
              DF
            </span>
          </div>
        </StyledChevron>
        <FooterLinks>
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
        </FooterLinks>
        <div>
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          by Devin Fitzsimons
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
