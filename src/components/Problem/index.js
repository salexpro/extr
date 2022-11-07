import React from 'react'
import { Container } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'

import Tweet from '../Tweet'

import * as s from './Problem.module.scss'

const Problem = () => {
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
    <Container as="section" id="problem" className={s.problem}>
      <h2>
        What <span>community</span> needs
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode
        modules={[FreeMode]}
        className={s.tweets}
      >
        {allNeedsJson.nodes.map((tweet) => (
          <SwiperSlide key={tweet.handle}>
            <Tweet {...tweet} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Problem
