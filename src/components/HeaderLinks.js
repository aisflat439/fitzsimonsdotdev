import React from 'react'
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core"
import { useLocation } from "@reach/router"

const useStyles = makeStyles((theme) => ({
  root: {
    color: `orange`,
    fontWeight: 'bolder',
    fontSize: '1rem',
    textDecoration: 'none',
    position: 'relative',
    marginRight: '1.75rem',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    '&:not(:last-child)': {
      '&::after': {
        [theme.breakpoints.up('sm')]: {
          content: '""',
          height: '10px',
          width: '10px',
          right: '-19px',
          backgroundColor: `${theme.palette.primary.main}`,
          borderRadius: '50%',
          position: 'absolute',
          top: '25%',
        }
      }
    }
  },
}))

const HeaderLinks = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <>
      <Link
        className={classes.root}
        to="/"
      >
        {siteTitle}
      </Link>
      <Link
        className={`${classes.root}`}
        to="/site-reviews"
      >
        Site Reviews
    </Link>
      <Link
        className={classes.root}
        to="/thoughts"
      >
        Thoughts
      </Link>
      <Link
        className={classes.root}
        to="/tips"
      >
        Tips
      </Link>
    </>
  )
}

export default HeaderLinks