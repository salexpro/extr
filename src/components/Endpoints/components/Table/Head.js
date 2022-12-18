import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import cn from 'classnames'

import Icon from '~components/Icon'

import { TABLE, TYPES, TYPES_DESCR } from '../../constants'

const Head = ({ sortType, handleSort, isLoading }) => {
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
                    <>
                      <b>{type}</b>: {TYPES_DESCR[k]} <br />
                    </>
                  ))}
                </Tooltip>
              }
            >
              <Icon name="icon-info" size={22} />
            </OverlayTrigger>
          </span>
        )

      case 'response':
        return (
          <button
            type="button"
            className={cn('table__sortButton', {
              sortAsc: sortType,
              sortDesc: !sortType,
            })}
            onClick={handleSort}
            disabled={isLoading}
          >
            {label}
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
