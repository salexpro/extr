import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import Icon from '../Icon'

import * as s from './Tweet.module.scss'

const Tweet = ({ avatar, link, name, handle, tweet }) => {
  return (
    <a href={link} target="_blank" className={s.tweet} rel="noreferrer">
      <div className={s.bar}>
        <Icon name="icon-twitter" size={40} />
        <span>
          Twitter
          <Icon name="icon-arrow-up" size={28} />
        </span>
      </div>
      <div className={s.top}>
        <GatsbyImage
          key={handle}
          image={{
            ...avatar.childImageSharp.gatsbyImageData,
            placeholder: {
              fallback: avatar.childImageSharp.blurHash.base64Image,
            },
          }}
          alt={name}
          className={s.avatar}
        />
        <span className={s.name}>{name}</span>
        <span className={s.handle}>{handle}</span>
        <p className={s.text} dangerouslySetInnerHTML={{ __html: tweet }} />
      </div>
    </a>
  )
}

export default Tweet
