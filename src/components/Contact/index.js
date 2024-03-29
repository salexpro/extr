import React from 'react'
import { Container, Button } from 'react-bootstrap'
import cn from 'classnames'

import Window from '../Window'
import Icon from '../Icon'

import * as s from './Contact.module.scss'

import SOCIAL from '../Social/constants'

const Contact = ({ explorer }) => {
  return (
    <section id="contact" className={cn(s.contact, { [s.explorer]: explorer })}>
      <Container className={s.contact__inner}>
        <Window title="Community" variant="contact">
          <div className={s.window__content}>
            <h2>
              Join our community to build a decentralized RPC layer of Web3
            </h2>
            <div className={s.window__buttons}>
              {SOCIAL.slice(1)
                .reverse()
                .map(({ key, link, variant, label }) => (
                  <Button
                    key={key}
                    href={link}
                    target="_blank"
                    variant={variant}
                    className={`gtm-${key}-third`}
                  >
                    {label}
                  </Button>
                ))}
            </div>
          </div>
        </Window>
        <Window title="Contact us" variant="envelope">
          <div className={s.window__envelope}>
            <Icon name="ill-envelope" size={80} />
            <div>
              Contacts us via email: <br />
              <a
                href="mailto:hey@extrnode.com"
                target="_blank"
                rel="noreferrer"
                className="gtm-email-third"
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
