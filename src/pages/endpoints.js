import React from 'react'

import SEO from '~components/seo'

import Hero from '~components/Hero'
import Endpoints from '~components/Endpoints'
import Contact from '~components/Contact'

export const Head = () => <SEO title="Endpoints" />

const IndexPage = () => (
  <>
    <Hero explorer />
    <Endpoints full />
    <Contact explorer />
  </>
)

export default IndexPage
