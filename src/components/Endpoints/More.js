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
      {list.map((el) => el.replace('For', '\u00ADFor')).join(', ')}
      {data.length > SHORT_NUMBER && (
        <button type="button" className="table__link" onClick={handleShow}>
          {BUTTON[+show]}
        </button>
      )}
    </div>
  )
}

export default More
