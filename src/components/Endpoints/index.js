/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import { Link } from 'gatsby'
import { Container, Form, Table, Dropdown, Placeholder } from 'react-bootstrap'
import { useQuery } from '@tanstack/react-query'
import produce from 'immer'

import { API_KEYS, getEndponts } from '~api'

import Icon from '../Icon'
import AnimatedLink from '../AnimatedLink'

import Row from './Row'
import RowPlaceholder from './Placeholder'

import { sanitize } from './utils'

import { TYPES, FILTERS, TABLE, SESSION_STORAGE_KEY } from './constants'

import * as s from './Endpoints.module.scss'

const Endpoints = ({ full }) => {
  const VIEWABLE = full ? 1000 : 10

  const {
    isSuccess,
    isLoading,
    // isError,
    data: endpoints,
    refetch,
    isRefetching,
  } = useQuery([
    API_KEYS.ENDPOINTS,
    { params: { limit: 1000, format: 'json' } },
  ])

  const { isSuccess: isPingSuccess, data: pingedEndpoints } = useQuery({
    queryKey: ['ping', endpoints],
    queryFn: getEndponts,
    enabled: !!endpoints,
  })

  // const sessionFilters =
  //   typeof window !== 'undefined' &&
  //   JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY))

  const [data, setData] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [filters, setFilters] = useState(FILTERS)
  const [sortType, setSort] = useState(true)

  const handleSort = () => {
    setSort((prev) => !prev)
  }

  const handleFilter = (filter, value) => {
    setFilters((prev) =>
      produce(prev, (draft) => {
        draft[filter].data[value] = !prev[filter].data[value]
      })
    )
  }

  const handleResetFilter = (filter) => {
    setFilters((prev) =>
      // Could be done with flat structure and doublekeys [category:filter] but whatever
      produce(prev, (draft) => {
        if (filter) {
          Object.keys(draft[filter].data).forEach((vkey) => {
            draft[filter].data[vkey] = false
          })
        } else {
          Object.keys(draft).forEach((key) => {
            Object.keys(prev[key].data).forEach((vkey) => {
              draft[key].data[vkey] = false
            })
          })
        }
      })
    )
  }

  const handleRefresh = () => {
    refetch()
  }

  const isAnyFilterActive = () =>
    Object.values(filters).some(
      (f) => f.data && Object.values(f.data).some((v) => v)
    )

  const buildFilter = (source, fetchedData) =>
    produce(source, (draft) => {
      fetchedData.forEach((el) => {
        draft.data[el] = draft?.data?.[el] || false
      })
    })

  useEffect(() => {
    const sessionFilters = JSON.parse(
      sessionStorage.getItem(SESSION_STORAGE_KEY)
    )

    if (sessionFilters) {
      setTimeout(() => {
        setFilters(sessionFilters)
      }, 0)
    }
  }, [])

  // Set data/pinged data & build filters
  useEffect(() => {
    if (isSuccess) {
      if (isPingSuccess) {
        setData(
          [...pingedEndpoints].sort(
            ({ response: { time: a } }, { response: { time: b } }) =>
              sortType ? a - b : b - a
          )
        )
      } else {
        setData(endpoints)
      }

      const buildFilters = endpoints.reduce(
        (acc, item) => {
          acc.supported_methods = buildFilter(
            acc.supported_methods,
            item?.supported_methods
          )

          acc.country = buildFilter(acc.country, [
            item?.asn_info?.country?.name,
          ])

          const isp = item?.asn_info?.isp

          acc.isp = buildFilter(acc.isp, [isp && sanitize(isp)])

          acc.version = buildFilter(acc.version, [item?.version])

          return acc
        },
        { ...filters }
      )

      setFilters(buildFilters)
    }
  }, [isSuccess, isPingSuccess, pingedEndpoints, endpoints, sortType])

  // Filtering fetched and pinged data
  useEffect(() => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(filters))

    if (data) {
      if (isAnyFilterActive()) {
        setFilteredData(
          data.filter((item) => {
            const isType =
              Object.values(filters.node_type.data).every((v) => !v) ||
              filters.node_type.data[TYPES[item.node_type]]

            // This filter works as an AND (default is OR)
            const isMethod =
              Object.values(filters.supported_methods.data).every((v) => !v) ||
              Object.entries(filters.supported_methods.data)
                .filter(([, m]) => m)
                .every(([key]) => item.supported_methods.includes(key))

            const isCountry =
              Object.values(filters.country.data).every((v) => !v) ||
              filters.country.data[item.asn_info.country.name]

            const isProvider =
              Object.values(filters.isp.data).every((v) => !v) ||
              filters.isp.data[sanitize(item.asn_info.isp)]

            const isVersion =
              Object.values(filters.version.data).every((v) => !v) ||
              filters.version.data[item.version]

            return isType && isMethod && isCountry && isProvider && isVersion
          })
        )
      } else {
        setFilteredData(data)
      }
    }
  }, [filters, data])

  return (
    <Container as="section" className={s.endpoints}>
      <h2>Explore Solana public RPC endpoints</h2>
      <h3 className={s.lead}>
        <span>
          {filteredData && filteredData.length}
          {isLoading && (
            <Placeholder animation="glow">
              <Placeholder
                style={{
                  width: 40,
                  height: 24,
                  verticalAlign: 'text-bottom',
                  background: 'currentColor',
                }}
              />
            </Placeholder>
          )}
        </span>{' '}
        endpoints found
      </h3>
      <div className={s.topbar}>
        <div className={s.filters}>
          {Object.entries(filters).map(([key, { label, data: fData }]) => {
            const filterValues = fData && Object.values(fData)

            const isPrimary = filterValues.some((v) => v)

            return (
              <Dropdown
                key={key}
                autoClose="outside"
                // align={
                // i === Object.keys(FILTERS).length - 1 ? 'end' : 'start'
                // }
              >
                <Dropdown.Toggle
                  variant={cn({
                    'outline-primary': isPrimary,
                    'outline-light': !isPrimary,
                  })}
                  size="sm"
                  disabled={!data}
                >
                  {label}
                </Dropdown.Toggle>
                {fData && (
                  <Dropdown.Menu
                    variant="dark"
                    popperConfig={{
                      modifiers: [
                        { name: 'offset', options: { offset: [0, 10] } },
                      ],
                    }}
                    flip={false}
                  >
                    <div
                      className={cn('dropdown-items', {
                        'dropdown-items--horizontal': filterValues.length > 10, // overflow of max height
                        [`dropdown-items--${label.toLowerCase()}`]: label,
                      })}
                    >
                      <Form.Check
                        type="checkbox"
                        id={`filter-${label}-all`}
                        label="All"
                        checked={filterValues.every((v) => !v)}
                        onChange={() => handleResetFilter(key)}
                      />
                      {Object.entries(fData)
                        .sort()
                        .map(([name, val]) => (
                          <Form.Check
                            key={name}
                            type="checkbox"
                            id={`filter-${label}-${name}`}
                            label={name}
                            checked={val}
                            onChange={() => handleFilter(key, name)}
                          />
                        ))}
                    </div>
                  </Dropdown.Menu>
                )}
              </Dropdown>
            )
          })}
        </div>
        <div className={s.actions}>
          <button
            type="button"
            onClick={handleRefresh}
            className={cn(s.actionButton, { [s.fetching]: isRefetching })}
            disabled={isLoading || isRefetching}
          >
            <Icon name="icon-reload" size={26} />
            Refresh results
          </button>
          <button
            type="button"
            className={s.actionButton}
            onClick={() => handleResetFilter()}
            disabled={!isAnyFilterActive()}
          >
            <Icon name="icon-trash" size={26} />
            Clear filters
          </button>
        </div>
      </div>

      <Table className="table--endpoints" responsive>
        <thead>
          <tr>
            {TABLE.map((label, i) => {
              const isLast = TABLE.length - 1 === i
              return (
                <th className={cn({ table__response: isLast })}>
                  {label}
                  {isLast && (
                    <button
                      type="button"
                      className={cn('table__sortButton', {
                        sortAsc: sortType,
                        sortDesc: !sortType,
                      })}
                      onClick={handleSort}
                      disabled={!data}
                    >
                      {[...Array(2)].map((_, j) => (
                        <Icon
                          key={`icon${j}`}
                          name="icon-sort-arrow"
                          size={[10, 8]}
                        />
                      ))}
                    </button>
                  )}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {filteredData &&
            (!filteredData.length ? (
              <tr>
                <td colSpan={7} className="table__empty">
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
                .slice(0, VIEWABLE)
                .map((item) => <Row key={item.endpoint} {...item} />)
            ))}
          {isLoading &&
            [...Array(10)].map((_, i) => <RowPlaceholder key={`pl${i}`} />)}
        </tbody>
      </Table>
      {!full && filteredData && !!filteredData.length && (
        <div className={s.footer}>
          <AnimatedLink as={Link} to="/endpoints" className={s.footer__link}>
            Show more endpoints{' '}
            {filteredData.length > VIEWABLE &&
              `(${filteredData.length - VIEWABLE})`}
          </AnimatedLink>
        </div>
      )}
    </Container>
  )
}

export default Endpoints
