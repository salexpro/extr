import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import cn from 'classnames'

import Icon from '~components/Icon'

import { isFilterActive } from '../../utils'

import { TABLE, TYPES, TYPES_DESCR } from '../../constants'

const Head = ({ sortType, handleSort, isLoading, filters }) => {
  const renderItem = (key, label) => {
    switch (key) {
      case 'type':
        return (
          <span className="table__type">
            {label}
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip>
                  {Object.entries(TYPES).map(([k, type]) => (
                    <React.Fragment key={k}>
                      <b>{type}</b>: {TYPES_DESCR[k]} <br />
                    </React.Fragment>
                  ))}
                </Tooltip>
              }
            >
              <Icon
                className="table__tooltip solana-explorer-type-info"
                name="icon-info"
                size={22}
              />
            </OverlayTrigger>
          </span>
        )

      case 'response':
        return (
          <button
            type="button"
            className={cn(
              'table__sortButton',
              {
                sortAsc: sortType,
                sortDesc: !sortType,
              },
              'solana-explorer-response-time'
            )}
            onClick={handleSort}
            disabled={isLoading}
          >
            <div className="table__sortButton-label">
              {label}
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip>
                    {isFilterActive(filters.methods) ? (
                      <>
                        Average response time for all <b>selected</b>
                        <br /> methods
                      </>
                    ) : (
                      <>
                        Response time for the <b>getAccountInfo</b>
                        <br /> method
                      </>
                    )}{' '}
                    (European server)
                  </Tooltip>
                }
              >
                <Icon className="table__tooltip" name="icon-info" size={22} />
              </OverlayTrigger>
            </div>
            <span>
              {[...Array(2)].map((_, j) => (
                <Icon
                  // eslint-disable-next-line react/no-array-index-key
                  key={`icon${j}`}
                  name="icon-sort-arrow"
                  size={[10, 8]}
                />
              ))}
            </span>
          </button>
        )

      default:
        return label
    }
  }

  return (
    <thead>
      <tr>
        {Object.entries(TABLE).map(([key, label]) => (
          <th key={key}>{renderItem(key, label)}</th>
        ))}
      </tr>
    </thead>
  )
}

export default Head
