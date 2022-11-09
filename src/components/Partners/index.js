import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Mousewheel } from 'swiper'

import Controls from '../Controls'
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
          <Controls />
        </div>
      </Container>
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        navigation={{
          prevEl: '#partners .swiper__prev',
          nextEl: '#partners .swiper__next',
        }}
        modules={[FreeMode, Navigation, Mousewheel]}
        grabCursor
        mousewheel={{
          forceToAxis: true,
        }}
        breakpoints={{
          640: {
            spaceBetween: 20,
            slidesPerView: 'auto',
            freeMode: false,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
            freeMode: true,
          },
        }}
        className={s.carousel}
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
