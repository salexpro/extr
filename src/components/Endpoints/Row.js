/* eslint-disable camelcase */
import React from 'react'
import cn from 'classnames'
import { Placeholder } from 'react-bootstrap'

import Copy from './Copy'
import More from './More'

import { TYPES } from './constants'

const Row = (props) => {
  const {
    endpoint,
    node_type,
    supported_methods,
    asn_info: { country, isp },
    version,
    response,
  } = props

  return (
    <tr key={endpoint}>
      <td>
        <Copy
          className={cn('table__ip', {
            available: response?.status,
            unavailable: response && !response?.status,
          })}
        >
          {endpoint}
        </Copy>
      </td>
      <td>{TYPES[node_type]}</td>
      <td>
        <More data={supported_methods} />
      </td>
      <td>{country.name}</td>
      <td className="table__provider">
        {isp.substr(1, isp.indexOf(', ') - 1)}
      </td>
      <td>{version}</td>
      <td>
        {/* eslint-disable-next-line no-nested-ternary */}
        {response ? (
          response.status ? (
            `${response.time}ms`
          ) : (
            '—'
          )
        ) : (
          <Placeholder as="div" animation="glow">
            <Placeholder style={{ width: 50 }} />
          </Placeholder>
        )}
      </td>
    </tr>
  )
}

export default Row
