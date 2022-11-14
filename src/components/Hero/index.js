import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import cn from 'classnames'
import gsap from 'gsap'
import { TypeAnimation } from 'react-type-animation'

import Icon from '../Icon'

import everstake from './img/everstake.svg'

import * as s from './Hero.module.scss'

import PARTNERS from './constants'

const Hero = () => {
  const [wnd, setWindow] = useState(true)

  const handleBalancer = (e) => {
    e.preventDefault()
    gsap.to(window, { scrollTo: '#balancer', ease: 'power2' })
  }

  return (
    <Container id="top" as="section" className={s.hero}>
      <div className={s.box}>
        <TypeAnimation
          sequence={['Battle-tested decentralized RPC gateway']}
          wrapper="h1"
          cursor
        />
        <p className="lead">
          Connect your dApp to a decentralized cluster of RPC nodes and
          automatically reroute responses if any node is down
        </p>
        <Button
          href="#balancer"
          onClick={handleBalancer}
          className="gtm-get-solana-endpoint-button"
        >
          Get Solana RPC endpoint
        </Button>

        <div className={cn(s.window, { [s.closed]: !wnd })}>
          <div className={s.window__bar}>
            <button
              type="button"
              onClick={() => setWindow(false)}
              className={s.window__close}
            >
              <Icon name="icon-cross" size={20} />
            </button>
          </div>
          <div className={s.window__content}>
            <img src={everstake} width={52} alt="Everstake logo" />
            <span>
              extrnode is powered by{' '}
              <a
                href="https://everstake.one"
                className="gtm-everstake-up"
                target="_blank"
                rel="noreferrer"
              >
                Everstake
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className={s.partners}>
        <h3 className={s.partners__title}>Partnered with:</h3>
        <div className={s.partners__wrap}>
          <ul className={s.partners__list}>
            {PARTNERS.map(({ name, img }) => (
              <li key={name}>
                <img src={img} width={186} height={120} alt={name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Hero
