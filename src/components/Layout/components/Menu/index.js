import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import { Nav } from 'react-bootstrap'
import cn from 'classnames'

import { handleScroll } from '~utils'

import MENU from './constants'

import * as s from './Menu.module.scss'

const Menu = ({ variant, scroll, handleClose, isHome }) => {
  const handleLink = (e, link) => {
    handleScroll(e, link.substr(1), handleClose && 300)
    if (handleClose) handleClose()
  }

  return (
    <Nav
      className={cn(s.nav, {
        [s[variant]]: variant,
        [s.scroll]: scroll,
      })}
      as="ul"
    >
      {MENU.map(({ name, link, className }) => (
        <Nav.Item as="li" key={name}>
          <Nav.Link
            {...(isHome
              ? { href: link, onClick: (e) => handleLink(e, link) }
              : {
                  as: Link,
                  to: `/${link}`,
                })}
            className={className}
          >
            {name}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  )
}

Menu.defaultProps = {
  variant: '',
  scroll: false,
  handleClose: null,
}

Menu.propTypes = {
  variant: PropTypes.string,
  scroll: PropTypes.bool,
  handleClose: PropTypes.func,
}

export default Menu
