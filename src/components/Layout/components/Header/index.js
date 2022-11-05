import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Social from '~components/Social'
import logo from '~img/logo.svg'
import Menu from '../Menu'

import * as s from './Header.module.scss'

const Header = ({ siteTitle }) => (
  <Container as="header" className={s.header}>
    <div className={s.header__logo}>
      <img src={logo} width={140} alt={siteTitle} />
    </div>
    <Menu />
    <Social variant="header" />
  </Container>
)

Header.defaultProps = {
  siteTitle: '',
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
