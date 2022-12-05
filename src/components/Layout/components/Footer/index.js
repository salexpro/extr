import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Social from '~components/Social'
import AnimatedLink from '~components/AnimatedLink'

import logo from '~img/logo.svg'

import * as s from './Footer.module.scss'

const Footer = ({ siteTitle }) => {
  return (
    <footer className={s.footer}>
      <Container className={s.footer__inner}>
        <div className={s.footer__logo}>
          <img src={logo} width={89} alt={siteTitle} />
        </div>
        <AnimatedLink
          className={s.footer__mail}
          href="mailto:hey@etrnode.com"
          target="_blank"
          rel="noreferrer"
        >
          hey@etrnode.com
        </AnimatedLink>
        <Social variant="footer" gtm="down" />
      </Container>
    </footer>
  )
}

Footer.defaultProps = {
  siteTitle: '',
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

export default Footer
