import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Kesha Ipsum" keywords={[`Lorem Ipsum Generator`, `kesha ipsum`, `ipsum`]} />
    <h1>We are the crazy people</h1>
    <Link to="/page-2/">Barbell Calculator</Link>
    <Link to="/kesha/">Kesha Ipsum</Link>
  </Layout>
)

export default IndexPage
