import React from "react"

import Layout from "../components/layout"
import Link from "../components/Link"
import SEO from "../components/seo"
import ContactMeDialog from "../components/ContactMeDialog"
import HomePageCardContent from "../components/HomePageCardContent"

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const IndexPage = () => {

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `ecommerce`,
          `gatsby`,
          `ecommerce development`,
          `ecommerce design and development`,
        ]}
      />
      <Box component="main">

        <Typography variant="h3" component="h1" paragraph>Ecommerce design and development tips, reviews, opinions and products</Typography>
        <Typography paragraph>Hello! The goal of this site is to be a useful place to keep my general thoughts about web development on the internet. This is not a professional blog. I don't really know anything about blogging. Think of this more as a location for me to keep the useful information I have, perhaps let people know about the things that I make, and experiment with discussing the things about web development.
        </Typography>
        Things you can expect to find here relate to:
        <ul>
          <li>ecommerce</li>
          <li>agencies</li>
          <li>Gatsby</li>
          <li>working in public</li>
          <li>projects and things I've made</li>
          <li>rants and raves about websites</li>
        </ul>
        Things you wont find:
        <ul>
          <li>news related stuff</li>
          <li>stuff about how I feel</li>
          <li>regular updates, expect more when I have time and something to say</li>
        </ul>
        <Typography paragraph>
          I'll do my absolute best to keep this useful, or at least useful adjacent. Thanks for coming by!
        </Typography>

        <Grid container spacing={2}>

          <Grid item md={6}>
            <Box component={Card} height="100%">
              <HomePageCardContent
                avatar="tips"
                title="Ecommerce tips from a developer"
                subheader="Straightforward choices a site can make to delight it's customers"
                content="Development is difficult work that requires focus, understanding and great attention to detail. An ecommerce site is easy to get started but extremely challenging to grow. While there are ample resources for shop owners to get started there are very few that communicate what a shop owner can do to get the most out of their site from a developers perspective."
              />
              <CardActions>
                <Button component={Link} color="secondary" to="/tips">Most recent tip</Button>
                <Link to="/tips">all tips</Link>
              </CardActions>
            </Box>
          </Grid>

          <Grid item md={6}>
            <Box component={Card} height="100%">
              <HomePageCardContent
                avatar="reviews"
                title="Site Reviews"
                subheader="Opportunities a developer sees when they look at your ecommerce site"
                content="I do brief site reviews from time to time and post them on the internet. If you'd like me to review your site let me know!"
              />
              <CardActions>
                <Button component={Link} color="secondary" to="/site-reviews">Reviews</Button >
                <ContactMeDialog title="Request a review" form="contact" />
              </CardActions>
            </Box>
          </Grid>

          <Grid item md={6}>
            <Box component={Card} height="100%">
              <HomePageCardContent
                avatar="Thoughts"
                title="General Ecommerce Thoughts"
                subheader="More broad thoughts around ecommerce and it's ecosystem"
                content="Whamboozles abound"
              />
              <CardActions>
                <Link to="/thoughts">Thoughts</Link>
              </CardActions>
            </Box>
          </Grid>

          <Grid item md={6}>
            <Box component={Card} height="100%">
              <HomePageCardContent
                avatar="Products and Tools"
                title="Products and Tools"
                subheader="Check out the things I build"
                content="I have several tools to help you have more productive hours. None are publicy for sale today and all are in various stages of development. If you have a problem or would like information, sign up on the list!"
              />
              <CardActions>
                <Button component={Link} color="secondary" to="/products">Learn about andybuilt</Button>
                <ContactMeDialog title="Get on the list" form="newsletter" />
              </CardActions>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </Layout >
  )
}

export default IndexPage
