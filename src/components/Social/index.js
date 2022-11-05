import React from 'react'
import cn from 'classnames'

import Icon from '../Icon'

import DATA from './constants'

import * as s from './Social.module.scss'

const Social = ({ variant }) => {
  return (
    <ul className={cn(s.social, { [s[variant]]: variant })}>
      {DATA.map(({ name, link }) => (
        <li key={name}>
          <a href={link} aria-label={name} target="_blank" rel="noreferrer">
            {name}
            <Icon name="icon-arrow-up" size={28} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
