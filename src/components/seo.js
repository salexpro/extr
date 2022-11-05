/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import ogImage from '~img/og-image.png'

const SEO = ({ description, title, image, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            domain
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const domain = site.siteMetadata?.domain
  const titleTemplate = title ? `${title} – ${defaultTitle}` : defaultTitle

  const ogImageUrl = `${
    domain.includes('http') ? domain : `https://${domain}`
  }${ogImage || image}`

  return (
    <>
      <title>{titleTemplate}</title>
      <meta name="description" content={metaDescription} />
      <meta name="og:locale" content="en_EN" />
      <meta name="og:title" content={titleTemplate} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={ogImageUrl} />
      <meta name="og:width" content="1200" />
      <meta name="og:height" content="630" />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titleTemplate} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="msapplication-TileColor" color="#000000" />
      <meta name="theme-color" color="#000000" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      {children}
    </>
  )
}

SEO.defaultProps = {
  description: undefined,
  title: undefined,
  image: undefined,
  children: undefined,
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
}

export default SEO
