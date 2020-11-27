/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  canonical,
  publisher,
  schema,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            identityData {
              siteLink
              siteName
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={
        canonical
          ? [{ rel: 'canonical', key: canonical, href: canonical }]
          : []
      }
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'publisher',
          content: publisher
        }
      ]
        .concat(
          keywords.length > 0
            ? {
              name: 'keywords',
              content: keywords.join(', '),
            }
            : []
        )
        .concat(meta)}
    >
      <script type="application/ld+json">
        {`
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Devin Fitzsimons",
  "givenName": "Devin Fitzsimons",
  "alternateName": "aisflat439",
  "url": "http://www.fitzsimons.dev",
  "image": "",
  "inLanguage": "en-US",
  "sameAs": [
    ${site.siteMetadata.identityData.map((identity) => `"${identity.siteLink}"`)}
  ],
  ${schema || ''}
  "jobTitle": "software engineer"
}
    `}
      </script>
    </Helmet>
  );
}

SEO.defaultProps = {
  canonical: '',
  description: '',
  keywords: [],
  lang: 'en',
  meta: [],
  publisher: 'Devin Fitzsimons',
  schema: '',
};

SEO.propTypes = {
  canonical: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  publisher: PropTypes.string,
  schema: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
