import React from "react"
import { useSelector } from 'react-redux'

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
  const counter = useSelector(state => state.counter)
  return (
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
        <h1>{counter}Ecommerce design and development tips, reviews, opinions and products</h1>
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
    </Layout>
  )
}

export default IndexPage
