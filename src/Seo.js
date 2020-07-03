/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

export function SEO({ description, lang, meta, title }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            image
            siteUrl
            title
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const image = `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`
  const fullTitle = title
    ? `${site.siteMetadata.title} | ${title}`
    : site.siteMetadata.title
  const url = `${site.siteMetadata.siteUrl}${pathname}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={fullTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "og:url",
          content: url,
        },
        {
          property: `og:title`,
          content: fullTitle,
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
          content: fullTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: image,
        },
        {
          name: "og:image",
          content: image,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
