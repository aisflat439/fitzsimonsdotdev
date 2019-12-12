import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Posts"
      keywords={[`ecommerce`, `ecommerce development`, `shopfiy`]}
    />
    <h1>Products</h1>
    <p>Currently all products are in alpha or beta so please reach out to me with questions</p>
  </Layout>
)

export default IndexPage
