import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import MuiLink from '@material-ui/core/Link';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core"

import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import RedditIcon from '@material-ui/icons/Reddit';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Contact from './Contact'
import Link from './Link'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.secondary.dark,
    color: palette.primary.main,
  },
  width: {
    maxWidth: 1440,
    margin: 'auto',
    padding: 24
  }
}))

const Footer = () => {
  const { allDirectory } = useStaticQuery(graphql`
    query FoldersQuery {
      allDirectory {
        edges {
          node {
            base
            id
          }
        }
      }
    }
`)

  const classes = useStyles()

  return (
    <Box component="footer" px={3} data-testid="footer" className={classes.root}>
      <Grid container spacing={3} className={classes.width}>
        <Grid item xs={12} md={3}>
          <Box component="section" >
            <Typography component="h5">Site Links</Typography>
            <List component="nav" aria-label="main site links">
              {allDirectory.edges.map(({ node }) => {
                if (node.base === 'deprecated' || node.base === 'images' || node.base === 'posts') return null
                return (
                  <ListItem key={node.id}>
                    <Link to={`/${node.base}`}>{`${node.base}`}</Link>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component="section" >
            <Contact />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>Social</Typography>
          <List component="nav" aria-label="external social links">
            <ListItem><MuiLink target="blank" rel="noopener" href="https://twitter.com/fitzsimons_dev"><TwitterIcon />Twitter</MuiLink></ListItem>
            <ListItem><MuiLink><InstagramIcon />instagram</MuiLink></ListItem>
            <ListItem><MuiLink target="blank" rel="noopener" href="https://github.com/aisflat439/fitzsimonsdotdev"><GitHubIcon />github</MuiLink></ListItem>
            <ListItem><MuiLink><RedditIcon />reddit</MuiLink></ListItem>
            <ListItem><MuiLink target="blank" rel="noopener" href="https://www.linkedin.com/in/fitzsimonsdevin"><LinkedInIcon />LinkedIn</MuiLink></ListItem>
          </List>
        </Grid>
      </Grid>
      <Box className={classes.width}>
        © {new Date().getFullYear()} by Devin Fitzsimons
      </Box>
    </Box>
  )
}

export default Footer
