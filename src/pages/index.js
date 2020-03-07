import React from "react"

import Layout from "../components/layout"
import Link from "../components/Link"
import SEO from "../components/seo"
import ContactMeDialog from "../components/ContactMeDialog"

import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
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
        <Typography paragraph>Hello! The goal of this site is to be a useful place to keep my general thoughts about the web development on the internet. This is not a professional blog. I don't really know anything about blogging. THis is more a location for me to keep the useful information I have, perhaps let people know about the things that I make, and experiment with discussing the things about web development that I'm interested in.
          <ul> Things you can expect to find here relate to:
            <li>ecommerce</li>
            <li>agencies</li>
            <li>Gatsby</li>
            <li>working in public</li>
            <li>projects and things I've made</li>
            <li>rants and raves about websites</li>
          </ul>
          <ul> Things you wont find:
            <li>news related stuff</li>
            <li>stuff about how I feel</li>
            <li>regular updates, expect more when I have time and something to say</li>
          </ul>
          I'll do my absolute best to keep this useful, or at least useful adjacent. Thanks for coming by
        </Typography>

        <Grid container spacing={2}>

          <Grid item md={6}>
            <Box component={Card} height="100%">
              <CardHeader
                avatar={
                  <Avatar aria-label="tips">
                    tips
                </Avatar>
                }
                title="Ecommerce tips from a developer"
                titleTypographyProps={{ component: 'h2' }}
                subheader="Straightforward choices a site can make to delight it's users" />
              <CardContent>
                <Typography>
                  Development is difficult work that requires focus, understanding and
                  great attention to detail. An ecommerce site is easy to get started but extremely challenging to grow. While there are ample resources for shop owners to get started there are very few that communicate what a shop owner can do to get the most out of their site from a developers perspective.
              </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} color="secondary" to="/tips">Most recent tip</Button>
                <Link to="/tips">all tips</Link>
              </CardActions>
            </Box>
          </Grid>

          <Grid item md={6}>
            <Box component={Card} height="100%">
              <CardHeader
                avatar={
                  <Avatar aria-label="site-reviews">
                    R
                </Avatar>
                }
                title="Site Reviews"
                titleTypographyProps={{ component: 'h2' }}
                subheader="Opportunities a developer sees when they look at your ecommerce site" />
              <CardContent>
                <Typography>
                  I do brief site reviews from time to time and post them on the internet. If you'd like me to review your site let me know!
              </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} color="secondary" to="/site-reviews">Reviews</Button >
                <ContactMeDialog title="Request a review" form="contact" />
              </CardActions>
            </Box>
          </Grid>

          <Grid item md={6}>
            <Box component={Card} height="100%">
              <CardHeader
                avatar={
                  <Avatar aria-label="Thoughts">
                    ?
                </Avatar>
                }
                title="General Ecommerce Thoughts"
                titleTypographyProps={{ component: 'h2' }}
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

          <Grid item md={6}>
            <Box component={Card} height="100%">
              <CardHeader
                avatar={
                  <Avatar aria-label="Tools and products">
                    T
                </Avatar>
                }
                title="Tools and products"
                titleTypographyProps={{ component: 'h2' }}
                subheader="I have tools and products available" />
              <CardContent>
                <Typography>
                  I have several tools to help you have more productive hours. They're in alpha join the list
              </Typography>
              </CardContent>
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
