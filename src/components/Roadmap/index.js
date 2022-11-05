import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Button } from 'react-bootstrap'

import Icon from '../Icon'
import Tweet from '../Tweet'
import Window from '../Window'

import PIPELINE from './constants'

import * as s from './Roadmap.module.scss'

const Roadmap = () => {
  const { allNeedsJson } = useStaticQuery(graphql`
    {
      allNeedsJson {
        nodes {
          link
          avatar {
            childImageSharp {
              blurHash {
                base64Image
              }
              gatsbyImageData(
                width: 64
                height: 64
                quality: 100
                placeholder: NONE
                layout: FIXED
              )
            }
          }
          name
          handle
          tweet
        }
      }
    }
  `)

  return (
    <Container>
      <section className={s.needs}>
        <h2>
          What <span>community</span> needs
        </h2>
        <div className={s.tweets}>
          {allNeedsJson.nodes.map((tweet) => (
            <Tweet key={tweet.handle} {...tweet} />
          ))}
        </div>
      </section>

      <section className={s.believe}>
        <h2>What we believe</h2>

        <div className={s.believe__windows}>
          <Window title="Mission">
            <p>
              The RPC layer has to become truly reliable and properly
              decentralized so that developers can focus on making Web3 a
              mundane reality. Our mission is to make it happen.
            </p>
          </Window>

          <Window title="Vision" variant="small">
            <p>
              <span>Decentralized. Open-source. Community-driven.</span>
              That’s what the RPC layer should be like. And that’s what it will
              become now.
            </p>
          </Window>
        </div>
      </section>

      <section className={s.builds}>
        <h2>What extrnode builds</h2>
        <div className={s.builds__container}>
          <div className={s.builds__content}>
            <p>
              We are about to release our public load balancer to allow Solana
              developers to connect their dApps to a cluster of public RPC nodes
              and automatically reroute responses if any node is down. The
              cluster will be underpinned by Everstake&apos;s validator
              infrastructure, ensuring 99.9% uptime.
            </p>
            <p>
              We are also developing a paid solution for enterprises and
              blockchain platforms. Its operation will be in the hands of
              battle-tested validators, with no single entity controlling it in
              any way.
            </p>

            <Button variant="outline-primary">Read more on Mirror</Button>
          </div>

          <div className={s.builds__pipeline}>
            {PIPELINE.map(({ status, content }, i) => (
              <Window
                // eslint-disable-next-line react/no-array-index-key
                key={`w${i}`}
                title={status || <Icon name="icon-clock" size={20} />}
              >
                {content}
              </Window>
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Roadmap
