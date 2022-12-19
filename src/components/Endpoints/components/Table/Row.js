/* eslint-disable camelcase */
import React, { useState } from 'react'
import cn from 'classnames'
import { Placeholder, Collapse, OverlayTrigger, Tooltip } from 'react-bootstrap'

import Icon from '~components/Icon'
import Copy from '../Copy'
import Expand from '../Expand'

import { TYPES, TYPES_DESCR, TABLE } from '../../constants'

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

  const [open, setOpen] = useState(false)

  const formattedResponse =
    typeof response === 'number' ? (
      `${response ? response.toFixed(0) : '< 1'} ms`
    ) : (
      <Placeholder as="div" animation="glow">
        <Placeholder style={{ width: 50 }} />
      </Placeholder>
    )
  // eslint-disable-next-line no-nested-ternary
  const type = is_rpc
    ? TYPES.rpc
    : is_validator
    ? TYPES.validator
    : TYPES.limited

  return (
    <>
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
        <td>{type}</td>
        <td>
          <Expand data={supported_methods} />
        </td>
        <td>{country.name}</td>
        <td className="table__provider">{isp}</td>
        <td>{version}</td>
        <td>{formattedResponse}</td>
      </tr>
      <div className="table__item">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="table__item-button"
        >
          <Copy className="table__ip available">{endpoint}</Copy>
          {formattedResponse}
        </button>
        <Collapse in={open}>
          <div>
            <div className="table__item-content">
              <div className="table__item-row">
                <span className="table__type">
                  {TABLE.type}
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        {Object.entries(TYPES).map(([k, t]) => (
                          <>
                            <b>{t}</b>: {TYPES_DESCR[k]} <br />
                          </>
                        ))}
                      </Tooltip>
                    }
                  >
                    <Icon
                      className="table__tooltip"
                      name="icon-info"
                      size={18}
                    />
                  </OverlayTrigger>
                </span>
                {type}
              </div>
              <div className="table__item-row">
                <span>{TABLE.methods}</span>
                <Expand data={supported_methods} />
              </div>
              <div className="table__item-row">
                <span>{TABLE.country}</span>
                {country.name}
              </div>
              <div className="table__item-row">
                <span>{TABLE.provider}</span>
                {isp}
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  )
}

export default Row
