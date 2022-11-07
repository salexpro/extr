import React from 'react'
import cn from 'classnames'

import * as s from './Window.module.scss'

const Window = ({ title, variant, children, width, ...rest }) => {
  return (
    <div
      className={cn(s.window, variant && variant.split(' ').map((v) => [s[v]]))}
      style={width && { maxWidth: width }}
    >
      <div className={s.window__bar}>{title}</div>
      <div className={s.window__content} {...rest}>
        {children}
      </div>
    </div>
  )
}

export default Window
