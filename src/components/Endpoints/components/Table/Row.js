/* eslint-disable camelcase */
import React from 'react'
import cn from 'classnames'
import { Placeholder } from 'react-bootstrap'

import Copy from '../Copy'
import Expand from '../Expand'

import { TYPES } from '../../constants'

const Row = (props) => {
  const {
    endpoint,
    supported_methods,
    asn_info: { country, isp },
    version,
    response,
    is_rpc,
    is_validator,
  } = props

  return (
    <tr key={endpoint}>
      <td>
        <Copy
          className={cn('table__ip available', {
            // available: response ,
            // unavailable: response && !response?.status,
          })}
        >
          {endpoint}
        </Copy>
      </td>
      <td>
        {
          // eslint-disable-next-line no-nested-ternary
          is_rpc ? TYPES.rpc : is_validator ? TYPES.validator : TYPES.limited
        }
      </td>
      <td>
        <Expand data={supported_methods} />
      </td>
      <td>{country.name}</td>
      <td className="table__provider">{isp}</td>
      <td>{version}</td>
      <td>
        {typeof response === 'number' ? (
          `${response ? response.toFixed(0) : '< 1'} ms`
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
