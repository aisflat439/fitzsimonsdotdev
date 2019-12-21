import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { AppBar, Toolbar, IconButton, Typography, Slide, useScrollTrigger } from "@material-ui/core"
import { Brightness4} from "@material-ui/icons"

function HideOnScroll(props) {
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

const Header = ({ siteTitle }, props ) => (
  <HideOnScroll {...props}>
  <AppBar>
    <Toolbar>
      <Typography >
        <Link
          to="/"
          >
          {siteTitle}
        </Link>
      </Typography>
      <IconButton >
        <Brightness4 />
      </IconButton>
    </Toolbar>
</AppBar>
</HideOnScroll>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
