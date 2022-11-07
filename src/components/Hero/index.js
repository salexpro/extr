import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import cn from 'classnames'

import Icon from '../Icon'

import everstake from './img/everstake.svg'

import * as s from './Hero.module.scss'

import PARTNERS from './constants'

const Hero = () => {
  const [window, setWindow] = useState(true)

  return (
    <Container id="top" as="section" className={s.hero}>
      <div className={s.box}>
        <h1>Battle-tested decentralized RPC gateway</h1>
        <p className="lead">
          Connect your dApp to a decentralized cluster of RPC nodes and
          automatically reroute responses if any node is down
        </p>
        <Button href="#">Get Solana RPC endpoint</Button>

        <div className={cn(s.window, { [s.closed]: !window })}>
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
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" target="_blank">
                Everstake
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className={s.partners}>
        <h3 className={s.partners__title}>Partnered with:</h3>
        <ul className={s.partners__list}>
          {PARTNERS.map(({ name, img }) => (
            <li key={name}>
              <img src={img} width={186} height={120} alt={name} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default Hero
