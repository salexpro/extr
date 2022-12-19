import React from 'react'
import cn from 'classnames'
import { Placeholder } from 'react-bootstrap'

import * as s from './Placeholder.module.scss'

const P = () => {
  return (
    <tr>
      <td>
        <Placeholder
          as="div"
          animation="glow"
          className={cn(s.placeholder, s.placeholder__endpoint)}
        >
          <Placeholder />
          <Placeholder as="div" />
        </Placeholder>
      </td>
      <td>
        <Placeholder as="div" animation="glow">
          <Placeholder className={cn(s.placeholder, s.placeholder__type)} />
        </Placeholder>
      </td>
      <td>
        <Placeholder
          as="div"
          animation="glow"
          className={cn(s.placeholder, s.placeholder__methods)}
        >
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Placeholder>
      </td>
      <td>
        <Placeholder as="div" animation="glow">
          <Placeholder className={cn(s.placeholder, s.placeholder__country)} />
        </Placeholder>
      </td>
      <td>
        <Placeholder as="div" animation="glow">
          <Placeholder className={cn(s.placeholder, s.placeholder__provider)} />
        </Placeholder>
      </td>
      <td>
        <Placeholder as="div" animation="glow">
          <Placeholder className={cn(s.placeholder, s.placeholder__version)} />
        </Placeholder>
      </td>
      <td>
        <Placeholder as="div" animation="glow">
          <Placeholder className={cn(s.placeholder, s.placeholder__response)} />
        </Placeholder>
      </td>
    </tr>
  )
}

export default P
