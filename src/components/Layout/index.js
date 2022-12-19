/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'
import { SSRProvider } from 'react-bootstrap'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '~api'

import '~styles/app.scss'

import Header from './components/Header'
import Footer from './components/Footer'

import { layout } from './Layout.module.scss'

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

  const { pathname } = useLocation()

  const isHome = pathname === '/'

  return (
    <SSRProvider>
      <div className={layout}>
        <Header siteTitle={data.site.siteMetadata?.title} isHome={isHome} />
        <QueryClientProvider client={queryClient}>
          <main className="main">{children}</main>
        </QueryClientProvider>
        <Footer siteTitle={data.site.siteMetadata?.title} isHome={isHome} />
        {/* <SVGDefs /> */}
      </div>
    </SSRProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
