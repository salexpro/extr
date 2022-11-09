import React from 'react'
import { Container } from 'react-bootstrap'

import Window from '../Window'

import * as s from './Vision.module.scss'

const Vision = () => {
  return (
    <Container as="section" id="vision" className={s.vision}>
      <h2>What we believe</h2>

      <div className={s.windows}>
        <Window title="Mission" variant="mission">
          <p className={s.window__content}>
            The RPC layer has to become truly reliable and properly
            decentralized so that developers can focus on making Web3 a mundane
            reality. Our mission is to make it happen.
          </p>
        </Window>

        <Window title="Vision" variant="dark">
          <p>
            <span>Decentralized.</span> <span>Open-source.</span>{' '}
            <span>Community-driven.</span> That’s what the RPC layer should be
            like. And that’s what it will become now.
          </p>
        </Window>
      </div>
    </Container>
  )
}

export default Vision
