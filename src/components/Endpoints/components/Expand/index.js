import React, { useState } from 'react'

const More = ({ data }) => {
  const [show, setShow] = useState(null)

  const SHORT_NUMBER = 8

  const shortList = data.slice(0, SHORT_NUMBER)

  const restLeft = data.length - SHORT_NUMBER

  const BUTTON = [`See all (+${restLeft} methods)`, 'Close']

  const handleShow = () => setShow((prev) => !prev)

  const list = show ? data : shortList

  return (
    <div className="table__more">
      {list
        .map(({ name }) =>
          name
            .replace('For', '\u00ADFor')
            .replace('getRecent', 'getRecent\u00AD')
        )

        .join(', ')}
      {data.length > SHORT_NUMBER && (
        <button type="button" className="table__link" onClick={handleShow}>
          {BUTTON[+show]}
        </button>
      )}
    </div>
  )
}

export default More
