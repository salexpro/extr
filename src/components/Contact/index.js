import React from 'react'
import { Container, Button } from 'react-bootstrap'

import Window from '../Window'
import Icon from '../Icon'

import * as s from './Contact.module.scss'

import SOCIAL from '../Social/constants'

const Contact = () => {
  return (
    <section id="contact" className={s.contact}>
      <Container className={s.contact__inner}>
        <Window title="Community" width={846}>
          <div className={s.window__content}>
            <h2>
              Join our community to build a decentralized RPC layer of Web3
            </h2>
            <div className={s.window__buttons}>
              {Object.values(SOCIAL)
                .slice(1)
                .reverse()
                .map(({ link, variant, label }) => (
                  <Button
                    key={variant}
                    href={link}
                    target="_blank"
                    variant={variant}
                  >
                    {label}
                  </Button>
                ))}
            </div>
          </div>
        </Window>
        <Window title="Contact us" variant="envelope" width={600}>
          <div className={s.window__envelope}>
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
