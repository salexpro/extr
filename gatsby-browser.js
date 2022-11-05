/* eslint-disable import/prefer-default-export */
import React from 'react'
import Layout from './src/components/Layout'

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
