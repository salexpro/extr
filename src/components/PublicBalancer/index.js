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
        RPC nodes in the cluster are hosted by battle-tested validators:
        Everstake, 01node, Stakin, and Chainstack. It also includes 30+ Solana
        public RPC endpoints scanned via publicly available Solana’s JSON-RPC.
      </p>
      <div className={s.connect}>
        <h3>Connect now:</h3>
        <div className={s.connect__link}>
          <a
            href="https://solana-mainnet.rpc.extrnode.com"
            target="_blank"
            rel="noreferrer"
          >
            https://solana-mainnet.rpc.extrnode.com
          </a>
          <CopyButton data="https://solana-mainnet.rpc.extrnode.com" />
        </div>
      </div>
      <p>
        If any node is down, load balancer{' '}
        <span>automatically reroutes your requests.</span>
      </p>
    </Container>
  )
}

export default PublicBalancer
