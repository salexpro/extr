import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import cn from 'classnames'
import { TypeAnimation } from 'react-type-animation'

import { handleScroll } from '~utils'

import Icon from '../Icon'

import everstake from './img/everstake.svg'

import PARTNERS from './constants'

import * as s from './Hero.module.scss'

const Hero = ({ explorer }) => {
  const [wnd, setWindow] = useState(true)

  return (
    <Container id="top" as="section" className={s.hero}>
      <div className={cn(s.box, { [s.explorer]: explorer })}>
        {explorer ? (
          <h1>Solana RPC explorer</h1>
        ) : (
          <TypeAnimation
            className={s.header}
            sequence={['Battle-tested decentralized RPC gateway']}
            wrapper="h1"
            cursor
          />
        )}

        <p className="lead">
          {explorer
            ? 'Explore public RPC endpoints on Solana. Filter endpoints by type, supported methods, country, provider, or version. Sort them by response time'
            : 'Connect your dApp to a decentralized cluster of RPC nodes and automatically reroute responses if any node is down'}
        </p>
        {explorer ? (
          <div className={s.box__warning}>
            <Icon name="icon-warning" size={44} />
            We don&apos;t recommend using a balancer for production
            applications. Use it at your own risk and discretion. Our free
            public balancer & solution for enterprises are underway.
          </div>
        ) : (
          <Button
            href="#balancer"
            onClick={(e) => handleScroll(e, 'balancer')}
            className="gtm-get-solana-endpoint-button"
          >
            Get Solana RPC endpoint
          </Button>
        )}

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
              {explorer ? 'Solana RPC explorer' : 'extrnode'} is powered by{' '}
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

      {!explorer && (
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
      )}
    </Container>
  )
}

export default Hero
