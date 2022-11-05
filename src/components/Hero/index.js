import React from 'react'
import { Container, Button } from 'react-bootstrap'

import Icon from '../Icon'

import everstake from './img/everstake.svg'

import * as s from './Hero.module.scss'

import PARTNERS from './constants'

const Hero = () => {
  return (
    <Container as="section" className={s.hero}>
      <div className={s.box}>
        <h1>Battle-tested decentralized RPC gateway </h1>
        <p className="lead">
          Connect your dApp to a decentralized cluster of RPC nodes and
          automatically reroute responses if any node is down
        </p>
        <Button href="#">Get Solana RPC endpoint</Button>
      </div>
      <div className={s.window}>
        <div className={s.window__content}>
          <img src={everstake} width={67} height={60} alt="Everstake logo" />
          extrnode is powered by{' '}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" target="_blank">
            Everstake
          </a>
        </div>
        <button type="button">
          <Icon name="icon-cross" size={26} />
        </button>
      </div>
      <div className={s.partners}>
        <h3>Partnered with:</h3>
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
