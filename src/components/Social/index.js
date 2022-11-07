import React from 'react'
import cn from 'classnames'

import Icon from '../Icon'

import DATA from './constants'

import * as s from './Social.module.scss'

const Social = ({ variant, scroll }) => {
  return (
    <ul className={cn(s.social, { [s[variant]]: variant, [s.scroll]: scroll })}>
      {Object.values(DATA).map(({ label, link }) => (
        <li key={label}>
          <a href={link} aria-label={label} target="_blank" rel="noreferrer">
            {label}
            <Icon name="icon-arrow-up" size={18} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
