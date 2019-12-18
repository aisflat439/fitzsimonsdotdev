import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Posts" keywords={[`ecommerce`, `ecommerce development`, `shopfiy`]} />
    <h1>Thoughts</h1>
    <p>Yerpadoo</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
