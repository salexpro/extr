import React from 'react'
import cn from 'classnames'

import * as s from './Window.module.scss'

const Window = ({ title, variant, children, width }) => {
  return (
    <div
      className={cn(s.window, { [s[variant]]: variant })}
      style={width && { maxWidth: width }}
    >
      <div className={s.window__bar}>{title}</div>
      <div className={s.window__content}>{children}</div>
    </div>
  )
}

export default Window
