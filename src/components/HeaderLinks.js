import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 2rem;
  display: inline-block;
  margin: 0 1rem;
  padding: 1rem 0;
  text-decoration: none;
  color: ${(props) => props.theme.text.header}
`;

const HeaderLinks = ({ siteTitle }) => (
  <div>
    <StyledLink
      to="/"
    >
      {siteTitle}
    </StyledLink>
    <StyledLink
      to="/site-reviews"
    >
      Site Reviews
    </StyledLink>
    <StyledLink
      to="/thoughts"
    >
      Thoughts
    </StyledLink>
    <StyledLink
      to="/tips"
    >
      Tips
    </StyledLink>
  </div>
);

HeaderLinks.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default HeaderLinks;
