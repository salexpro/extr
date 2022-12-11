import React from 'react'
import { Container, Button } from 'react-bootstrap'

import Icon from '../Icon'

import * as s from './Balancer.module.scss'

import DATA from './constants'

const Balancer = () => {
  return (
    <Container id="balancer" as="section" className={s.balancer}>
      <h2>
        Use our <span>open-source</span> balancer to test <br /> your Solana
        dApps on mainnet
      </h2>
      <div className={s.steps}>
        {DATA.map(({ title, icon }) => (
          <div key={icon} className={s.step}>
            <h3>{title}</h3>
            <Icon name={`ill-${icon}`} size={100} />
          </div>
        ))}
      </div>
      <div className={s.footer}>
        <div className={s.footer__buttons}>
          <Button
            href="https://hub.docker.com/r/extrnode/solana-lb"
            target="_blank"
            variant="outline-primary"
            className="gtm-docker-hub-button"
          >
            Docker Hub
          </Button>
          <Button
            href="https://github.com/extrnode/solana-lb"
            target="_blank"
            variant="outline-light"
            className="gtm-git-hub-button"
          >
            GitHub
          </Button>
        </div>
        <div className={s.footer__warn}>
          We don&apos;t recommend using a balancer for production applications.{' '}
          <br />
          Use it at your own risk and discretion.
        </div>
      </div>
    </Container>
  )
}

export default Balancer
