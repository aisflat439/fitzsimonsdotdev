import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

const StyledTag = styled.div`
  h2 {
    display: inline-block;
    border-bottom: 2px solid ${({ theme }) => theme.palette.alternate.base};;
  }
`;
export default function ExternalLink({ site, title }) {
  return <StyledTag><h2><a href={site} target="_blank" rel="noreferrer">{title}</a></h2></StyledTag>;
}

ExternalLink.propTypes = {
  title: T.string.isRequired,
  site: T.string.isRequired,
};
