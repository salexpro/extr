import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'

import SEO from '~components/seo'

export const Head = () => <SEO title="Page two" />

const SecondPage = () => (
  <Container>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Container>
)

export default SecondPage
