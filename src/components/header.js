import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import HeaderLinks from './HeaderLinks';

const StyledHeader = styled.header`
  background: linear-gradient(to right, ${({ theme }) => theme.palette.main.base} 50%, ${({ theme }) => theme.palette.main.saturated} );
  border-bottom: 5px solid #d1ad70;
  border-top: 5px solid #d1ad70;
  
   div {
    margin: 0 auto;
    max-width: 1440px;
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderLinks siteTitle={siteTitle} />
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: T.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
