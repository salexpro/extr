import React, { useState } from 'react'
import cn from 'classnames'
import Icon from '../../../Icon'

import { copyButton } from './Copy.module.scss'

const Copy = ({ children, as, ...rest }) => {
  // yeah yeah I know it's the same code here as in CopyButton component (⩾﹏⩽)
  // it's 2am day before deadline fuck that
  const [copied, setCopied] = useState(null)

  const handleCopy = (data) => {
    // if (!copied) {
    navigator.clipboard.writeText(data).then(
      () => {
        setCopied(data)

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

  return (
    <div {...rest}>
      <span>{!copied ? children : 'Copied'}</span>
      {!copied ? (
        React.createElement(
          as || 'button',
          {
            type: 'button',
            className: cn(copyButton, 'solana-explorer-endpoint-copied'),
            onClick: () => handleCopy(children.toString()),
          },
          <Icon name="icon-copy" />
        )
      ) : (
        <Icon name="icon-success_round" />
      )}
    </div>
  )
}

export default Copy
