import React from 'react'
import { Container } from 'react-bootstrap'

import CopyButton from '../CopyButton'

import * as s from './PublicBalancer.module.scss'

const PublicBalancer = () => {
  return (
    <Container id="balancer" as="section" className={s.publicbalancer}>
      <h2>
        Connect your dApp to a cluster of Solana public RPC nodes via our{' '}
        <span>public</span> load balancer
      </h2>
      <p>
        The RPC cluster includes 30+ Solana public RPC endpoints scannable via
        publicly available Solana’s JSON-RPC. It is also backed by battle-tested
        RPC nodes hosted by Everstake, 01node, Chainstack, and Stakin.
      </p>
      <div className={s.connect}>
        <h3>Connect now:</h3>
        <CopyButton data="https://solana-mainnet.rpc.extrnode.com" />
      </div>
      <p>
        If any node is down, load balancer{' '}
        <span>automatically reroutes your requests.</span>
      </p>
    </Container>
  )
}

export default PublicBalancer
