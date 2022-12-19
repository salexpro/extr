import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Social from '~components/Social'
import AnimatedLink from '~components/AnimatedLink'

import logo from '~img/logo.svg'

import * as s from './Footer.module.scss'

const Footer = ({ siteTitle, isHome }) => {
  return (
    <footer className={cn(s.footer, { [s.explorer]: !isHome })}>
      <Container className={s.footer__inner}>
        <div className={s.footer__logo}>
          <img src={logo} width={89} alt={siteTitle} />
        </div>
        <AnimatedLink
          className={cn(s.footer__mail, 'gtm-email-down')}
          href="mailto:hey@extrnode.com"
          target="_blank"
          rel="noreferrer"
        >
          hey@extrnode.com
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
