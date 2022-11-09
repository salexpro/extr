import React, { forwardRef } from 'react'
import cn from 'classnames'

import * as s from './Window.module.scss'

const Window = forwardRef(
  ({ title, variant, children, width, ...rest }, ref) => {
    return (
      <div
        className={cn(
          s.window,
          variant && variant.split(' ').map((v) => [s[v]])
        )}
        style={width && { maxWidth: width }}
        ref={ref}
      >
        <div className={s.window__bar}>{title}</div>
        <div className={s.window__content} {...rest}>
          {children}
        </div>
      </div>
    )
  }
)

export default Window
