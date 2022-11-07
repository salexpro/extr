import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper'

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
    <section id="partners" className={s.partners}>
      <Container>
        <div className={s.top}>
          <h2>
            What our <span>partners</span> say
          </h2>
          <div className={s.controls}>
            <button type="button" className={s.control__prev}>
              <Icon name="icon-arrow-right" size={42} />
            </button>
            <button type="button" className={s.control__next}>
              <Icon name="icon-arrow-right" size={42} />
            </button>
          </div>
        </div>
      </Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode
        navigation={{
          prevEl: `.${s.control__prev}`,
          nextEl: `.${s.control__next}`,
        }}
        modules={[FreeMode, Navigation]}
        className={s.carousel}
        grabCursor
      >
        {allCarouselJson.nodes.map((tweet) => (
          <SwiperSlide key={tweet.handle}>
            <Tweet variant="partner" {...tweet} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Partners
