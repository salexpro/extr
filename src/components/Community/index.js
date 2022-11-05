import React from 'react'
import { Container, Button } from 'react-bootstrap'

import Window from '../Window'

import * as s from './Community.module.scss'

import SOCIAL from '../Social/constants'

const Community = () => {
  const BUTTONS = ['dark', 'outline-dark']

  return (
    <section className={s.community}>
      <Container>
        <Window title="Community" variant="fluid">
          <h2>Join our community to build a decentralized RPC layer of Web3</h2>
          <div className={s.buttons}>
            {BUTTONS.map((variant, i) => (
              <Button key={variant} href={SOCIAL[i + 1].link} variant={variant}>
                {SOCIAL[i + 1].name}
              </Button>
            )).reverse()}
          </div>
        </Window>
      </Container>
    </section>
  )
}

export default Community
