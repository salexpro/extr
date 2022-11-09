import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap'
import cn from 'classnames'
import gsap from 'gsap'

import MENU from './constants'

import * as s from './Menu.module.scss'

const Menu = ({ variant, scroll, handleClose }) => {
  const handleScroll = (e, link) => {
    e.preventDefault()
    setTimeout(() => {
      gsap.to(window, { scrollTo: link, ease: 'power2' })
    }, handleClose && 300)

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
      {MENU.map(({ name, link }) => (
        <Nav.Item as="li" key={name}>
          <Nav.Link href={link} onClick={(e) => handleScroll(e, link)}>
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
