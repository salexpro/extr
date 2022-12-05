/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { SSRProvider } from 'react-bootstrap'
import { QueryClientProvider } from '@tanstack/react-query'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

import { queryClient } from '~api'

import '~styles/app.scss'

import Header from './components/Header'
import Footer from './components/Footer'

import { layout } from './Layout.module.scss'

gsap.registerPlugin(ScrollToPlugin)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <SSRProvider>
      <div className={layout}>
        <Header siteTitle={data.site.siteMetadata?.title} />
        <QueryClientProvider client={queryClient}>
          <main className="main">{children}</main>
        </QueryClientProvider>
        <Footer siteTitle={data.site.siteMetadata?.title} />
        {/* <SVGDefs /> */}
      </div>
    </SSRProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
