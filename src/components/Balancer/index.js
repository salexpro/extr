import React from 'react'
import { Container, Button } from 'react-bootstrap'

import Icon from '../Icon'

import * as s from './Balancer.module.scss'

import DATA from './constants'

const Balancer = () => {
  return (
    <Container id="balancer" as="section" className={s.balancer}>
      <h2>
        Connect to a cluster of Solana public <br /> RPC nodes via our{' '}
        <span>open-source</span> balancer
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
          <Button href="#" target="_blank" variant="outline-primary">
            Docker Hub
          </Button>
          <Button href="#" target="_blank" variant="outline-light">
            GitHub
          </Button>
        </div>
        <div className={s.footer__warn}>
          We don&apos;t recommend using a balancer for production applications.{' '}
          <br />
          Use it at your own risk and discretion. Our free public balancer &
          solution for enterprises are underway.
        </div>
      </div>
    </Container>
  )
}

export default Balancer
