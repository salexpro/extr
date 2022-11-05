import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Social from '~components/Social'

import logo from '~img/logo.svg'

import * as s from './Footer.module.scss'

const Footer = ({ siteTitle }) => {
  return (
    <Container as="footer" className={s.footer}>
      <div className={s.footer__logo}>
        <img src={logo} width={89} alt={siteTitle} />
      </div>
      <a href="mailto:hey@etrnode.com" target="_blank" rel="noreferrer">
        hey@etrnode.com
      </a>
      <Social />
    </Container>
  )
}

Footer.defaultProps = {
  siteTitle: '',
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

export default Footer
