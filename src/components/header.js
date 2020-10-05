import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import HeaderLinks from './HeaderLinks';

export const HideOnScroll = () => (<></>);


const StyledHeader = styled.header`
  border-top: 5px solid #d1ad70;
  border-bottom: 5px solid #d1ad70;
  background: linear-gradient(to right, ${({ theme }) => theme.palette.main.base} 50%, ${({ theme }) => theme.palette.main.saturated} );
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
