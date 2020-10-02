import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'gatsby';
import T from 'prop-types';
import { makeStyles, useScrollTrigger } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { Brightness4 } from '@material-ui/icons';
import styled from 'styled-components';

import { toggleThemeMode } from '../redux/userPreferencesSlice';
import HeaderLinks from './HeaderLinks';

export const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const useStyles = makeStyles(({ palette }) => ({
  root: {
    background: `linear-gradient(to top, ${palette.primary.main} 10%, ${palette.primary.contrastText} 10%)`
  },
  title: {
    flexGrow: 1
  },
  width: {
    maxWidth: 1440,
    width: '100%',
    margin: '0 auto',
    padding: '0 24px'
  }
}));

const StyledHeader = styled.header`
  border-top: 5px solid #d1ad70;
  border-bottom: 5px solid #d1ad70;
  background-color: ${({ theme }) => theme.palette.main};
`;

const Header = ({ siteTitle }, props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClick = () =>
    dispatch(toggleThemeMode());


  return (
    <>
      <StyledHeader>
        <HeaderLinks siteTitle={siteTitle} />
      </StyledHeader>
      <Hidden xsUp>
        <HideOnScroll {...props}>
          <AppBar className={classes.root}>
            <Toolbar className={classes.width}>
              <Typography className={classes.title}>
                <HeaderLinks siteTitle={siteTitle} />
              </Typography>
              <IconButton data-testid="theme-toggle" onClick={onClick}>
                <Brightness4 />
              </IconButton>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Hidden>
    </>
  );
};

Header.propTypes = {
  siteTitle: T.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
