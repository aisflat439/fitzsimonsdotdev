import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

const WrappingDiv = styled.div`
  background: linear-gradient(to top, transparent 0, 46%, ${({ theme }) => theme.palette.main.saturated} 46% 48%, transparent 48% 52%, ${({ theme }) => theme.palette.main.saturated} 52% 54%, transparent 54%);
  text-align: center;

  h1, h2 {
    color: ${({ theme }) => theme.palette.main.base};
    padding: .5rem 1.75rem;
    display: inline;
    background-color: ${({ theme }) => theme.palette.alternate.lowlight};
  }
`;

const HeadingGroup = ({ title, component }) => (
  <WrappingDiv>
    {component.toLowerCase() === 'h1' ? (<h1>{title}</h1>) : <h2>{title}</h2>}
  </WrappingDiv>
);

HeadingGroup.defaultProps = {
  component: 'h2',
};

HeadingGroup.propTypes = {
  title: T.string.isRequired,
  component: T.string,
};

export default HeadingGroup;
