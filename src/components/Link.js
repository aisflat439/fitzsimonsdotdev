import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Link = styled((props) => <GatsbyLink {...props} />)`
  text-decoration: none;
`;

export default Link;
