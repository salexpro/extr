import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import cn from 'classnames'

import Icon from '../Icon'

import * as s from './Tweet.module.scss'

const Tweet = ({ avatar, link, name, handle, tweet, variant, className }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={cn(s.tweet, { [s[variant]]: variant }, className)}
      rel="noreferrer"
      tabIndex="0"
    >
      <div className={s.bar}>
        <Icon name="icon-twitter" size={30} />
        <span>
          Twitter
          <Icon name="icon-arrow-up" size={22} />
        </span>
      </div>
      <div className={s.content}>
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
