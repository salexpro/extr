import React from 'react'
import { Container, Button } from 'react-bootstrap'

import Window from '../Window'

import * as s from './Community.module.scss'

import SOCIAL from '../Social/constants'

const Community = () => {
  return (
    <section className={s.community}>
      <Container>
        <Window title="Community" variant="fluid">
          <div className={s.window}>
            <h2 className={s.window__title}>
              Join our community to
              <br /> build a decentralized RPC <br /> layer of Web3
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
      </Container>
    </section>
  )
}

export default Community
