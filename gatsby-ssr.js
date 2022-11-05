import React from 'react'
import Layout from './src/components/Layout'

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en' })
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

// Hack, to reorder the helmet components as first in <head> tag
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  /**
   * @type {any[]} headComponents
   */
  const headComponents = getHeadComponents()

  headComponents.sort((a) => {
    if (a.props && a.props['data-gatsby-head']) {
      return -1
    }
    return 1
  })

  replaceHeadComponents(headComponents)
}
