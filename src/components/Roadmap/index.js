import React from 'react'
import { Container, Button } from 'react-bootstrap'
import cn from 'classnames'

import Icon from '../Icon'
import Window from '../Window'

import * as s from './Roadmap.module.scss'

import ROADMAP from './constants'
import SOCIAL from '../Social/constants'

const Roadmap = () => {
  return (
    <Container as="section" id="roadmap" className={s.roadmap}>
      <h2>What extrnode builds</h2>
      <div className={s.container}>
        <div className={s.content}>
          <p>
            We are about to release our public load balancer to allow Solana
            developers to connect their dApps to a cluster of public RPC nodes
            and automatically reroute responses if any node is down. The cluster
            will be underpinned by Everstake&apos;s validator infrastructure,
            ensuring 99.9% uptime.
          </p>
          <p>
            We are also developing a paid solution for enterprises and
            blockchain platforms. Its operation will be in the hands of
            battle-tested validators.
          </p>

          <div className={s.buttons}>
            <Button
              href={SOCIAL.mirror.link}
              target="_blank"
              variant="outline-primary"
            >
              Read more on Mirror
            </Button>
          </div>
        </div>

        <div className={s.steps}>
          {ROADMAP.map(({ status, content }, i) => (
            <Window
              // eslint-disable-next-line react/no-array-index-key
              key={`w${i}`}
              title={status || <Icon name="icon-clock" size={20} />}
              variant={cn('step', { step__completed: status })}
            >
              {content}
            </Window>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Roadmap
