import React from "react"
import { graphql } from 'gatsby'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Posts" keywords={[`ecommerce`, `ecommerce development`, `shopfiy`]} />
    <Typography variant="h3" component="h1">Site Reviews</Typography>
    <List >
      {data.allYoutubeVideo.edges.map(({ node: video }) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="placeholder" aria-label="Reviews">R</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={video.title}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {video.description}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      )).reverse()}
    </List>
  </Layout>
)

export const query = graphql`
query {
  allYoutubeVideo(filter: {publishedAt: {gt: "2020"}}) {
    edges {
      node {
        description
        thumbnail {
          url
          height
          width
        }
        title
        publishedAt
      }
    }
  }
}
`

export default IndexPage
