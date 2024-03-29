import React, { useRef, useLayoutEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import cn from 'classnames'
import gsap from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'

import Icon from '../Icon'
import Window from '../Window'

import * as s from './Roadmap.module.scss'

import SOCIAL from '../Social/constants'
import ROADMAP from './constants'

gsap.registerPlugin(scrollTrigger)

const Roadmap = () => {
  const containerRef = useRef(null)
  const stepsRef = useRef([])

  useLayoutEffect(() => {
    const anim = gsap.from(stepsRef.current, {
      duration: 1,
      y: 40,
      opacity: 0,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
      },
    })

    return () => anim.kill()
  }, [])

  return (
    <Container as="section" id="roadmap" className={s.roadmap}>
      <h2>What extrnode builds</h2>
      <div className={s.container}>
        <div className={s.content}>
          <p>
            We are building a battle-tested decentralized RPC gateway to allow
            developers to connect their dApps to a cluster of public RPC nodes
            and automatically reroute responses if any node is down.
          </p>
          <p>
            Soon, we will release extrnode Premium. It will have only RPC nodes
            run by battle-tested validators, like Everstake, 01node, Chainflow,
            Imperator, Chainode Tech, Stakin, Staking Facilities, to provide
            clients with higher reliability.
          </p>

          <div className={s.buttons}>
            <Button
              href={SOCIAL[0].link}
              target="_blank"
              variant="outline-primary"
              className="gtm-read-more-mirror"
            >
              Read more on Mirror
            </Button>
          </div>
        </div>

        <div className={s.steps} ref={containerRef}>
          {ROADMAP.map(({ status, content }, i) => (
            <Window
              // eslint-disable-next-line react/no-array-index-key
              key={`w${i}`}
              title={status || <Icon name="icon-clock" size={20} />}
              variant={cn('step', { step__completed: status })}
              ref={(el) => {
                stepsRef.current[i] = el
              }}
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
