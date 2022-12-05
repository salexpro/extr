import React from 'react'
import cn from 'classnames'

import * as s from './AnimatedLink.module.scss'

const AnimatedLink = ({ children, as, className, ...rest }) => {
  return React.createElement(
    as || 'a',
    { className: cn(s.animatedlink, className), ...rest },
    children
  )
}

export default AnimatedLink
