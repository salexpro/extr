import React, { useState } from 'react'
import { Container, Offcanvas } from 'react-bootstrap'
import PropTypes from 'prop-types'
import gsap from 'gsap'
import cn from 'classnames'

import useScroll from '~hooks/useScroll'

import Icon from '~components/Icon'
import Social from '~components/Social'
import logo from '~img/logo.svg'
import Menu from '../Menu'

import * as s from './Header.module.scss'

const Header = ({ siteTitle }) => {
  const { scrollY } = useScroll()

  const isScrolled = scrollY > 160

  const handleTop = (e) => {
    e.preventDefault()
    gsap.to(window, { scrollTo: '#top', ease: 'power2' })
  }

  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu((prev) => !prev)
  }

  return (
    <header className={cn(s.header, { [s.scroll]: isScrolled })}>
      <Container className={s.inner}>
        <a href="#top" onClick={handleTop} className={s.logo}>
          <img src={logo} width={140} alt={siteTitle} />
        </a>
        <Menu variant="header" scroll={isScrolled} />
        <Social variant="header" scroll={isScrolled} />
        <div className={s.bg}>
          <div className={s.circles}>
            {[...Array(3)].map((_, i) => (
              <Icon
                // eslint-disable-next-line react/no-array-index-key
                key={`i${i}`}
                className={s.circle}
                name="icon-circle"
                size={16}
              />
            ))}
          </div>
        </div>
      </Container>

      <button
        type="button"
        className={cn(s.hamb, { [s.open]: menu })}
        onClick={handleMenu}
      >
        <span />
      </button>

      <Offcanvas
        show={menu}
        onHide={handleMenu}
        responsive="xl"
        placement="end"
        restoreFocus={false}
      >
        <Offcanvas.Body>
          <Menu variant="mobile" handleClose={handleMenu} />
          <Social variant="mobile" />
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  )
}

Header.defaultProps = {
  siteTitle: '',
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
