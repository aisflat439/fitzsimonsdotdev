import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { makeStyles, useScrollTrigger } from "@material-ui/core"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import { Brightness4 } from "@material-ui/icons"

import { toggleThemeMode } from '../redux/userPreferencesSlice'

const HideOnScroll = (props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.primary.main,
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
}))

const Header = ({ siteTitle }, props) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const onClick = () =>
    dispatch(toggleThemeMode())


  return (
    <HideOnScroll {...props}>
      <AppBar className={classes.root}>
        <Toolbar className={classes.width}>
          <Typography className={classes.title}>
            <Link
              to="/"
            >
              {siteTitle}
            </Link>
          </Typography>
          <IconButton onClick={onClick}>
            <Brightness4 />
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
