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
            Soon we will release a free public load balancer and extrnode
            Premium for production use.
          </p>
          <p>
            Our public load balancer will be hosted on Everstake&apos;s
            infrastructure. Developers will need to send requests to
            extrnode&apos;s RPC endpoint for the load balancer to reroute them
            to other RPCs. The premium version will have only nodes run by
            battle-tested validators to provide clients with higher reliability.
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
