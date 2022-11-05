import React from 'react'

import SEO from '~components/seo'
import Hero from '~components/Hero'
import Balancer from '~components/Balancer'
import Community from '~components/Community'
import Roadmap from '~components/Roadmap'
import Partners from '~components/Partners'
import Contact from '~components/Contact'
import FAQ from '~components/FAQ'

export const Head = () => <SEO />

const IndexPage = () => (
  <>
    <Hero />
    <Balancer />
    <Community />
    <Roadmap />
    <Partners />
    <Contact />
    <FAQ />
  </>
)

export default IndexPage
