import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `ecommerce`,
        `ecommerce development`,
        `ecommerce design and development`,
      ]}
    />
    <Box component="main">
      <h1>Ecommerce design and development tips, reviews, opinions and products</h1>
      <Grid container spacing={2}>

        <Grid item sm={6}>
          <Box component={Card} height="100%">
            <CardHeader
              avatar={
                <Avatar aria-label="tips">
                  tips
                </Avatar>
              }
              title="Ecommerce tips from a developer"
              subheader="Straightforward choices a site can make to delight it's users" />
            <CardContent>
              <Typography>
                Development is difficult work that requires focus, understanding and
                great attention to detail. An ecommerce site is easy to get started but extremely challenging to grow. While there are ample resources for shop owners to get started there are very few that communicate what a shop owner can do to get the most out of their site from a developers perspective.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/tips">Most recent tip</Link>
              <Link to="/tips">all tips</Link>
            </CardActions>
          </Box>
        </Grid>

        <Grid item sm={6}>
          <Box component={Card} height="100%">
            <CardHeader
              avatar={
                <Avatar aria-label="site-reviews">
                  R
                </Avatar>
              }
              title="Site Reviews"
              subheader="Opportunities a developer sees when they look at your ecommerce site" />
            <CardContent>
              <Typography>
                I do brief site reviews from time to time and post them on the internet. If you'd like me to review your site let me know **here**.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/site-reviews">Reviews</Link>
              <Link to="/site-reviews">Request a review</Link>
            </CardActions>
          </Box>
        </Grid>

        <Grid item sm={6}>
          <Box component={Card} height="100%">
            <CardHeader
              avatar={
                <Avatar aria-label="Thoughts">
                  ?
                </Avatar>
              }
              title="General Ecommerce Thoughts"
              subheader="More broad thoughts around ecommerce and it's ecosystem" />
            <CardContent>
              <Typography>
                Whamboozles abound
                </Typography>
            </CardContent>
            <CardActions>
              <Link to="/thoughts">Thoughts</Link>
            </CardActions>
          </Box>
        </Grid>

        <Grid item sm={6}>
          <Box component={Card} height="100%">
            <CardHeader
              avatar={
                <Avatar aria-label="Tools and products">
                  T
                </Avatar>
              }
              title="Tools and products"
              subheader="I have tools and products available" />
            <CardContent>
              <Typography>
                I have several tools to help you have more productive hours. They're in alpha join the list
                </Typography>
            </CardContent>
            <CardActions>
              <Link to="/tools">Join the list</Link>
            </CardActions>
          </Box>
        </Grid>

      </Grid>
    </Box>
  </Layout>
)

export default IndexPage
