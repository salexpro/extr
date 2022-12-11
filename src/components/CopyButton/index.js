import React, { useState } from 'react'
import Icon from '../Icon'

import * as s from './CopyButton.module.scss'

const Copy = ({ data }) => {
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

  return (
    <div className={s.copy}>
      {!copied ? (
        <button
          type="button"
          className={s.copy__button}
          onClick={() => handleCopy(data)}
        >
          <Icon name="icon-copy" size={34} />
        </button>
      ) : (
        <Icon name="icon-success" size={34} color="white" />
      )}
    </div>
  )
}

export default Copy
