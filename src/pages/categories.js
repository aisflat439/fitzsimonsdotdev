import React from "react"

import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import { Card, GridList, GridListTile, IconButton } from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Layout from '../components/layout'
import { dashCase } from '../utils'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout>
      <Helmet title={title} />
      <div>
        <Typography variant='h1'>Categories</Typography>
        <List component="nav" aria-label="main category listing">
          <GridList cols="4">
            {group.map(tag => (
              <GridListTile grid="item" component={Card} key={tag.fieldValue}>
                <GridListTileBar
                  title={<Link to={`/categories/${dashCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>}
                  actionIcon={
                    < IconButton >
                      <ExpandMoreIcon />
                    </IconButton>
                  } />
              </GridListTile>
            ))}
          </GridList>
        </List>
      </div>
    </Layout>
  )

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___hashtags) {
        fieldValue
        totalCount
      }
    }
  }
`