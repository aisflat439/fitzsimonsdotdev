import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography } from "@material-ui/core"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Posts" keywords={[`ecommerce`, `ecommerce development`, `shopfiy`]} />
    <Typography variant="h3" component="h1">Site Reviews</Typography>
    <p>{data.youtubeVideo.description}</p>
    <List >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="placeholder" aria-label="Reviews">R</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="YouTube review"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Some site I can't remember
              </Typography>
              {" — text here…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  </Layout>
)

export const query = graphql`
query {
  youtubeVideo {
    description
  }
}
`

export default IndexPage
