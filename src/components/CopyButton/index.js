import React, { useState } from 'react'
import cn from 'classnames'

import Icon from '../Icon'

import * as s from './CopyButton.module.scss'

const Copy = ({ data, variant, ...rest }) => {
  const [copied, setCopied] = useState(null)

  const handleCopy = (text) => {
    // if (!copied) {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(text)

        setTimeout(() => {
          setCopied(false)
        }, 3000)
      },
      () => {
        alert('Error occured')
      }
    )
    // }
  }

  return React.createElement(
    !copied ? 'button' : 'div',
    {
      type: !copied ? 'button' : null,
      onClick: !copied ? () => handleCopy(data) : null,
      className: cn(s.copybutton, {
        [s[variant]]: variant,
        [s.copied]: copied,
      }),
      ...rest,
    },
    <>
      {data}
      <Icon name={`icon-${!copied ? 'copy' : 'success'}`} size={34} />
    </>
  )
}

export default Copy
