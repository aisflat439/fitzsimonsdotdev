import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core';

import { Link } from 'gatsby';

const TagContainer = styled.div`
  display: flex;
  min-width: 75px;
  background: ${({ theme }) => theme.palette.highlight.saturated};
  height: 60px;
  position: relative;
  margin: 1rem;
  text-transform: capitalize;

  a {
    height: 60px;
    justify-content: center;
    align-items: flex-end;
    display: flex;
    color: ${({ theme }) => theme.palette.main.saturated};
    text-decoration: none;
    text-align: center;

    > div {
      z-index: 5;
    }
  }

  span {
    transform: skewX(10deg) translateX(10px);
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.palette.highlight.saturated};
    height: 60px;
    width: 20px;
    display:inline-block;

    :last-of-type {
    background-color: ${({ theme }) => theme.palette.highlight.saturated};
      transform: skewX(-10deg) translateX(-10px);
      bottom: 0;
      left: 0;      
    }
  }
`;

const Tag = ({ title, count }) => {
  const linkLocation = title.replace(' ', '-').toLowerCase();

  return (
    <TagContainer>
      <Link
        to={`/categories/${linkLocation}`}
      >
        <span />
        <div>
          {title}
          <small>{count}</small>
        </div>
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
