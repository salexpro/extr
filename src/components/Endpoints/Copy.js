import React, { useState } from 'react'
import Icon from '../Icon'

import { copyButton } from './Endpoints.module.scss'

const Copy = ({ children, ...rest }) => {
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
        <button
          type="button"
          className={copyButton}
          onClick={() => handleCopy(children.toString())}
        >
          <Icon name="icon-copy" />
        </button>
      ) : (
        <Icon name="icon-success_round" />
      )}
    </div>
  )
}

export default Copy
