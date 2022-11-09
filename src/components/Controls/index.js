import React from 'react'

import Icon from '../Icon'

const Controls = () => {
  return (
    <div className="swiper-controls">
      <button type="button" className="swiper__prev">
        <Icon name="icon-arrow-right" size={42} />
      </button>
      <button type="button" className="swiper__next">
        <Icon name="icon-arrow-right" size={42} />
      </button>
    </div>
  )
}

export default Controls
