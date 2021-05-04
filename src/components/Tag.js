import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import { Link } from 'gatsby';

const TagContainer = styled.div`
  display: flex;
  min-width: 75px;
  background: linear-gradient(to bottom, ${({ theme }) => theme.palette.alternate.base} 0 4px, ${({ theme }) => theme.palette.main.saturated} 4px);
  height: 70px;
  position: relative;
  margin: 1rem 2rem;
  text-transform: capitalize;
  border-bottom: 4px solid ${({ theme }) => theme.palette.alternate.base};
  box-shadow: 14px 5px 8px 0px rgba(2, 6, 80, .3);

  &:hover {
    opacity: .9;
  }

  a {
    height: 70px;
    justify-content: center;
    align-items: flex-end;
    display: flex;
    color: ${({ theme }) => theme.palette.brand.lowlight};
    text-decoration: none;
    text-align: center;

    > div {
      z-index: 5;
      padding: .5rem 0;
    }
  }

  small {
    color: ${({ theme }) => theme.palette.main.saturated};
    position: absolute;
    transform: translate(17px, 20px);
    display:inline-block;
    height: 20px;
    width: 20px;
    background-color: ${({ theme }) => theme.palette.alternate.base};
    top: 0;
    right: 0; 
  }

  span {
    border-right: 4px solid ${({ theme }) => theme.palette.alternate.base}; 
    border-bottom: 4px solid ${({ theme }) => theme.palette.alternate.base}; 
    border-top: 4px solid ${({ theme }) => theme.palette.alternate.base}; 
    transform: skewX(12deg) translateX(10px);
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.palette.main.saturated};
    height: 70px;
    width: 20px;
    display:inline-block;

    :last-of-type {
      border-right: none;
      border-left: 4px solid ${({ theme }) => theme.palette.alternate.base}; 
      background-color: ${({ theme }) => theme.palette.main.saturated};
      transform: skewX(-10deg) translateX(-10px);
      bottom: 0;
      left: 0;      
    }
  }
`;

const Tag = ({ title, count }) => {
  const linkLocation = title.replace(/\s+/g, '-').toLowerCase();

  return (
    <TagContainer>
      <Link
        to={`/categories/${linkLocation}`}
      >
        <span />
        <div>
          {title}
        </div>
        <small>{count}</small>
        <span />
      </Link>
    </TagContainer>
  );
};

Tag.propTypes = {
  title: T.string.isRequired,
  count: T.number.isRequired,
};

export default Tag;
