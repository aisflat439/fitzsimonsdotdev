import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography } from "@material-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Posts" keywords={[`ecommerce`, `ecommerce development`, `shopfiy`]} />
    <Typography variant="h3" component="h1">Site Reviews</Typography>
    <p>Yee.</p>
  </Layout>
)

export default IndexPage
