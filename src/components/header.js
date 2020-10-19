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
    @media only screen and (max-width: 768px)  {
      display: flex;
      flex-direction: column;
    }

    @media only screen and (max-width: 768px)  {
      a:not(:first-of-type) {
        font-size: 1.75rem;
        padding: .375rem 0;
      }
    }
  }
`;

const Header = ({ siteTitle }) => (
  <>
    <StyledHeader>
      <HeaderLinks siteTitle={siteTitle} />
    </StyledHeader>
    <div style={{ marginTop: '1rem', backgroundColor: '#d1ad70', padding: '.25rem 1.5rem' }}>
      <h3 style={{ maxWidth: '1440px', margin: 'auto' }}>This site is under construction</h3>
      <p style={{ maxWidth: '1440px', margin: 'auto' }}>For heaps of reasons I decided to move from MUI to styled-components and remark to MDX. This will be more fun for me personally, which is my primary motivation. I'm also sort of curious about trying out an Art Deco inspired aesthetic, which is what you should see a subtle smattering of thus far. While I'm making this switch please pardon the appearance of the blog. Come back in like a month if you wanna see how it turns out.</p>
    </div>
  </>
);

Header.propTypes = {
  siteTitle: T.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
