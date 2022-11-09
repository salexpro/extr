import React from 'react'
import { Container } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper'

import Controls from '../Controls'
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
      <div className={s.top}>
        <h2>
          What <span>community</span> needs
        </h2>
        <Controls />
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        modules={[FreeMode, Navigation]}
        navigation={{
          prevEl: '#problem .swiper__prev',
          nextEl: '#problem .swiper__next',
        }}
        breakpoints={{
          640: {
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            freeMode: true,
          },
        }}
        grabCursor
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
