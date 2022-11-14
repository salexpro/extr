import React from 'react'
import cn from 'classnames'

import Icon from '../Icon'

import DATA from './constants'

import * as s from './Social.module.scss'

const Social = ({ variant, scroll, gtm }) => {
  return (
    <ul className={cn(s.social, { [s[variant]]: variant, [s.scroll]: scroll })}>
      {DATA.map(({ key, link, label }) => (
        <li key={key}>
          <a
            href={link}
            aria-label={label}
            className={`gtm-${key}-${gtm}`}
            target="_blank"
            rel="noreferrer"
          >
            {label}
            <Icon name="icon-arrow-up" size={18} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
