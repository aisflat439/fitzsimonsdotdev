/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const schema = `{[{
          "@context": "https://schema.org/",
          "@type": "Person",
          "name": "Devin",
          "url": "http://www.fitzsimons.dev",
          "image": "",
          "sameAs": [
            "https://twitter.com/fitzsimons_dev",
            "https://www.linkedin.com/in/fitzsimonsdevin/",
            "https://github.com/aisflat439"
          ],
          "jobTitle": "software engineer"
        }]}`
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
            : []
        )
        .concat(meta)}
    >
      {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
      {/* {!article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>} */}
      {/* {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>} */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      {/* <script type="application/ld+json">{`
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Devin",
  "url": "http://www.fitzsimons.dev",
  "image": "",
  "sameAs": [
    "https://twitter.com/fitzsimons_dev",
    "https://www.linkedin.com/in/fitzsimonsdevin/",
    "https://github.com/aisflat439"
  ],
  "jobTitle": "software engineer"  
}
    `}</script> */}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
