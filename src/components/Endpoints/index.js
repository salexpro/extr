/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { Container, Placeholder } from 'react-bootstrap'
import { useQuery } from '@tanstack/react-query'
import produce from 'immer'

import { API_KEYS } from '~api'

import AnimatedLink from '../AnimatedLink'
import TopBar from './components/TopBar'
import Table from './components/Table'

import {
  isAnyFilterActive,
  isFilterActive,
  buildFilter,
  avgTime,
} from './utils'

import { TYPES, FILTERS, SESSION_STORAGE_KEY } from './constants'

import * as s from './Endpoints.module.scss'

const Endpoints = ({ full }) => {
  const itemsLimit = full ? 1000 : 10

  const {
    isSuccess,
    isLoading,
    // isError,
    data,
    refetch,
    isRefetching,
  } = useQuery([
    API_KEYS.ENDPOINTS,
    { params: { limit: 1000, format: 'json' } },
  ])

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

  const sectionRef = useRef(null)

  const [isScroll, setScroll] = useState(null)

  const handleScroll = () => {
    const sectionCoords = sectionRef.current.getBoundingClientRect()

    // console.log(sectionCoords.top, sectionCoords.height)
    // console.log(
    //   window.outerHeight > sectionCoords.top + 200,
    //   window.outerHeight < sectionCoords.bottom + 200
    // )

    if (
      window.outerHeight > sectionCoords.top + 200 &&
      window.outerHeight < sectionCoords.bottom + 200
    ) {
      setScroll(true)
    } else {
      setScroll(false)
    }
    // sectionRef.current.
  }

  // Get previous filters from sessionStorage
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    const sessionFilters = JSON.parse(
      sessionStorage.getItem(SESSION_STORAGE_KEY)
    )

    if (sessionFilters) {
      setTimeout(() => {
        setFilters(sessionFilters)
      }, 0)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Set data/pinged data & build filters
  useEffect(() => {
    if (isSuccess) {
      const buildFilters = data.reduce(
        (acc, item) => {
          acc.methods = buildFilter(
            acc.methods,
            item?.supported_methods.map(({ name }) => name)
          )

          acc.country = buildFilter(acc.country, [
            item?.asn_info?.country?.name,
          ])

          acc.provider = buildFilter(acc.provider, [item?.asn_info?.isp])

          acc.version = buildFilter(acc.version, [item?.version])

          return acc
        },
        { ...filters }
      )

      setFilters(buildFilters)
    }
  }, [isSuccess])

  // Filtering & sorting data
  useEffect(() => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(filters))

    if (data) {
      let dataWithResponse

      if (isAnyFilterActive(filters)) {
        const { type, methods, country, provider, version } = filters

        dataWithResponse = data.filter((item) => {
          const isType =
            !isFilterActive(type) ||
            (item.is_rpc && type.data[TYPES.rpc]) ||
            (item.is_validator
              ? type.data[TYPES.validator]
              : !item.is_rpc && type.data[TYPES.limited])

          const itemMethods = item.supported_methods.map(({ name }) => name)
          // This filter works as an AND (default is OR)
          const isMethod =
            !isFilterActive(methods) ||
            Object.entries(methods.data)
              .filter(([, m]) => m)
              .every(([key]) => itemMethods.includes(key))

          const isCountry =
            !isFilterActive(country) || country.data[item.asn_info.country.name]

          const isProvider =
            !isFilterActive(provider) || provider.data[item.asn_info.isp]

          const isVersion =
            !isFilterActive(version) || version.data[item.version]

          return isType && isMethod && isCountry && isProvider && isVersion
        })

        dataWithResponse = dataWithResponse.map((item) => {
          const filteredMethods = isFilterActive(methods)
            ? item.supported_methods.filter(({ name }) => methods.data[name])
            : item.supported_methods

          return {
            ...item,
            response: avgTime(filteredMethods),
          }
        })
      } else {
        dataWithResponse = data.map((item) => ({
          ...item,
          response: item.supported_methods.find(
            ({ name }) => name === 'getBalance'
          )?.response_time,
        }))
      }

      setFilteredData(
        dataWithResponse.sort(({ response: a }, { response: b }) => {
          if (typeof a === 'undefined') {
            return 1
          }
          if (typeof b === 'undefined') {
            return -1
          }
          return sortType ? a - b : b - a
        })
      )
    }
  }, [filters, data, sortType])

  return (
    <Container
      ref={sectionRef}
      id="endpoints"
      as="section"
      className={s.endpoints}
    >
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

      <TopBar
        {...{
          filters,
          isLoading,
          handleFilter,
          handleResetFilter,
          handleRefresh,
          isRefetching,
          isScroll,
        }}
      />

      <Table
        {...{
          sortType,
          handleSort,
          isLoading,
          filteredData,
          handleResetFilter,
          itemsLimit,
          filters,
        }}
      />

      {!full && filteredData && !!filteredData.length && (
        <div className={s.footer}>
          <AnimatedLink as={Link} to="/endpoints" className={s.footer__link}>
            Show more endpoints{' '}
            {filteredData.length > itemsLimit &&
              `(${filteredData.length - itemsLimit})`}
          </AnimatedLink>
        </div>
      )}
    </Container>
  )
}

export default Endpoints
