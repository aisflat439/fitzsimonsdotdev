import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import { colors } from "../theme"

const StyledArticle = styled.article`
  border: 1px solid ${colors.secondary};
  max-width: 40vw;
  margin: 10px;
  padding: 10px;
`

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
    <h1>Ecommerce design and development tips, reviews, opinions and products</h1>
    <main>
      <StyledArticle>
        <h2>What are tips from a deveopers perspective?</h2>
        <p>
          Developement is difficult work that requires focus, understanding and
          great attention to detail. An ecommerce site is easy to get started but extremely challenging to grow. While there are ample resources for shop owners to get started there are very few that communicate what a shop owner can do to get the most out of their site from a developers perspective.
        </p>
        <Link to="/tips">Tips from a deveopers perspective</Link>
      </StyledArticle>
      <StyledArticle>
        <h2>Request site review</h2>
        <p>
          I do brief site reivews from time to time and post them on the internet. If you'd like me to review your site let me know **here**.
        </p>
        <Link to="/site-reviews">Site-reviews</Link>
      </StyledArticle>
      <StyledArticle>
        <h2>Tools and products</h2>
        <p>
          Tools and products are available, email me for now
        </p>
        <Link to="/products">products</Link>
      </StyledArticle>
      <StyledArticle>
        <h2>About me</h2>
        <p>
          general business thoughts go here. If you're interested in my ramblings
        </p>
        <Link to="/thoughts">Tips from a deveopers perspective</Link>
      </StyledArticle>
    </main>
  </Layout>
)

export default IndexPage
