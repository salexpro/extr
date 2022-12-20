/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Table as BootstrapTable } from 'react-bootstrap'

import Head from './Head'
import Row from './Row'
import Placeholder from './Placeholder'

// import * as s from './Table.module.scss'

const Table = ({
  sortType,
  handleSort,
  isLoading,
  filteredData,
  handleResetFilter,
  itemsLimit,
  filters,
}) => {
  return (
    <BootstrapTable className="table--endpoints" responsive>
      <Head {...{ sortType, handleSort, isLoading, filters }} />
      <tbody>
        {filteredData &&
          (!filteredData.length ? (
            <tr className="table__empty">
              <td colSpan={7}>
                <span className="h2">No endpoints found</span>
                <p>
                  Please <b>modify</b> or{' '}
                  <button
                    type="button"
                    className="table__link"
                    onClick={() => handleResetFilter()}
                  >
                    clear filters
                  </button>
                </p>
              </td>
            </tr>
          ) : (
            filteredData
              .slice(0, itemsLimit)
              .map((item) => <Row key={item.endpoint} {...item} />)
          ))}
        {isLoading &&
          [...Array(10)].map((_, i) => <Placeholder key={`pl${i}`} />)}
      </tbody>
    </BootstrapTable>
  )
}

export default Table
