import React, { useState } from 'react'
import Icon from '../Icon'

import { copyButton } from './Endpoints.module.scss'

const Copy = ({ children, ...rest }) => {
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
        <button
          type="button"
          className={copyButton}
          onClick={() => handleCopy(children.toString())}
        >
          <Icon name="icon-copy" />
        </button>
      ) : (
        <Icon name="icon-success" />
      )}
    </div>
  )
}

export default Copy
