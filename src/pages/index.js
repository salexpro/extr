import React from 'react'

import SEO from '~components/seo'

import Hero from '~components/Hero'
import PublicBalancer from '~components/PublicBalancer'
import Community from '~components/Community'
import Balancer from '~components/Balancer'
import Map from '~components/Map'
import Endpoints from '~components/Endpoints'
import Problem from '~components/Problem'
import Vision from '~components/Vision'
import Roadmap from '~components/Roadmap'
import Partners from '~components/Partners'
import Contact from '~components/Contact'
import FAQ from '~components/FAQ'

export const Head = () => <SEO />

const IndexPage = () => (
  <>
    <Hero />
    <PublicBalancer />
    <Community />
    <Balancer />
    <Map />
    <Endpoints />
    <Problem />
    <Vision />
    <Roadmap />
    <Partners />
    <Contact />
    <FAQ />
  </>
)

export default IndexPage
