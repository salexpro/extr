import React from 'react'
import { Container, Button } from 'react-bootstrap'

import Window from '../Window'
import Icon from '../Icon'

import * as s from './Contact.module.scss'

import SOCIAL from '../Social/constants'

const Contact = () => {
  const BUTTONS = ['dark', 'outline-dark']

  return (
    <section className={s.contact}>
      <Container>
        <Window title="Community">
          <h2>Join our community to build a decentralized RPC layer of Web3</h2>
          <div className={s.buttons}>
            {BUTTONS.map((variant, i) => (
              <Button key={variant} href={SOCIAL[i + 1].link} variant={variant}>
                {SOCIAL[i + 1].name}
              </Button>
            )).reverse()}
          </div>
        </Window>
        <Window title="Contact us" variant="dark" width={600}>
          <div className={s.contact}>
            <Icon name="ill-envelope" size={80} />
            <div>
              Contacts us via email: <br />
              <a
                href="mailto:hey@extrnode.com"
                target="_blank"
                rel="noreferrer"
              >
                hey@extrnode.com
              </a>
            </div>
          </div>
        </Window>
      </Container>
    </section>
  )
}

export default Contact
