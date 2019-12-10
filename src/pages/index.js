import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ecommerce`, `ecommerce development`, `ecommerce design and development`]} />
    <h1>Ecommerce Tips from Developers</h1>
    <main>
      <article>
        <h2>Why tips from deveopers?</h2>
        <p>Most ecommerce sites are missing opportunites that are very straightforward.</p>
      </article>
    </main>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {/* <Link to="/page-2/">Barbell Calculator</Link> */}
    {/* <Link to="/kesha/">Kesha Ipsum</Link> */}
  </Layout>
)

export default IndexPage
