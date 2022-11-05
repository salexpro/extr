import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'react-bootstrap'

import Icon from '../Icon'
import Tweet from '../Tweet'

import * as s from './Partners.module.scss'

const Partners = () => {
  const { allCarouselJson } = useStaticQuery(graphql`
    {
      allCarouselJson {
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
    <Container as="section" className={s.partners}>
      <div className={s.top}>
        <h2>
          What our <span>partners</span> say
        </h2>
        <div className={s.controls}>
          <button type="button">
            <Icon name="icon-arrow-right" size={42} />
          </button>
          <button type="button">
            <Icon name="icon-arrow-right" size={42} />
          </button>
        </div>
      </div>
      <div className={s.carousel}>
        {allCarouselJson.nodes.map((tweet) => (
          <Tweet key={tweet.handle} {...tweet} />
        ))}
      </div>
    </Container>
  )
}

export default Partners
