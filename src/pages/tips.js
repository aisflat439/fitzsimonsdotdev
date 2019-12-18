import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Posts" keywords={[`ecommerce`, `ecommerce development`, `shopfiy`]} />
    <h1>Ecommerce from a developers perspective</h1>
    <main>
      <h2>Most Recent Tip</h2>
      <article>
        <h3>Tip!</h3>
        <p>Do the things!</p>
      </article>
    </main>
    <aside>
      <h2>Tips Listing</h2>
      <ul>
        <li>List of tips here</li>
      </ul>
    </aside>
  </Layout>
)

export default IndexPage
