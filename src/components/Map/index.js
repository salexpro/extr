/* eslint-disable no-param-reassign */
import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import produce from 'immer'

import { API_KEYS } from '~api'

import { handleScroll } from '~utils'

import Window from '../Window'

import { GROUPS, LOCATIONS, REF_SIZE } from './constants'

import * as s from './Map.module.scss'

const Map = () => {
  const {
    isSuccess,
    // isLoading,
    // isError,
    data,
    // refetch,
    // isRefetching,
  } = useQuery([
    API_KEYS.ENDPOINTS,
    { params: { limit: 1000, format: 'json' } },
  ])

  const {
    isSuccess: isStatsSuccess,
    // isLoading,
    // isError,
    data: stats,
    // refetch,
    // isRefetching,
  } = useQuery([API_KEYS.STATS])

  // const [type, setType] = useState(SWITCHER[0].key)

  // const handleSwitch = (key) => setType(key)

  const nodes =
    isSuccess &&
    data.reduce((acc, item) => {
      const { name, alpha2 } = item.asn_info.country
      const key = alpha2.toLowerCase()
      const groupedKey = GROUPS[key] || key

      return produce(acc, (draft) => {
        if (draft[groupedKey]) {
          if (draft[groupedKey].names) {
            draft[groupedKey].names = produce(
              draft[groupedKey].names,
              (drf) => {
                drf[name] = (draft[groupedKey]?.names?.[name] || 0) + 1
              }
            )
          } else {
            draft[groupedKey].names = {
              [name]: 1,
            }
          }
          draft[groupedKey].value = (acc[groupedKey]?.value || 0) + 1
        } else {
          draft[groupedKey] = {
            names: {
              [name]: 1,
            },
            value: 1,
          }
        }
      })
    }, {})

  // console.log(data)
  // console.log(nodes)
  // console.log(stats)

  const getNodeSize = (val) => {
    switch (true) {
      case val >= 500:
        return 'large'
      case val >= 100:
        return 'medium'
      default:
        return 'default'
    }
  }

  return (
    <Container id="map" as="section" className={s.map}>
      <h2>Map of Solana nodes and public RPC endpoints</h2>
      <Window
        title="Map of Solana nodes and public RPC endpoints"
        variant="map"
      >
        <div className={s.map__topbar}>
          {/* <div
            className={cn('btn', s.switcher, {
              [s.rpc]: type === SWITCHER[1].key,
            })}
          >
            {SWITCHER.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => handleSwitch(key)}
                disabled={type === key}
              >
                {label}
              </button>
            ))}
            <span className="btn btn-light btn-sm" />
          </div> */}
          {isStatsSuccess && (
            <div className={s.map__info}>
              <div className={cn('btn-sm', s.counter)}>
                <span>{stats?.alive}</span>
              </div>
              <span className={s.divider} />
              <div className={s.map__stat}>
                <div className={s.map__stat_item}>
                  <b>{stats?.rpc}</b> RPC nodes
                </div>
                <div className={s.map__stat_item}>
                  <b>{stats?.validator}</b> validator nodes
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={s.map__wrap}>
          <div className={s.map__canvas}>
            <ul className={s.points}>
              {nodes &&
                Object.entries(nodes).map(([code, { names, value }]) => {
                  if (LOCATIONS[code]) {
                    const size = getNodeSize(value)

                    const coords = LOCATIONS[code].map(
                      (c, i) => `${(c * 100) / REF_SIZE[i]}%`
                    )

                    return (
                      <li
                        key={code}
                        className={cn(s.point, [s[size]], {
                          [s.black]: Math.random() < 0.5,
                        })}
                        style={{
                          top: coords[1],
                          left: coords[0],
                        }}
                        data-country={code}
                      >
                        <span>{value}</span>
                        <ul className={cn('btn', s.tooltip)}>
                          {Object.entries(names).map(([name, val]) => (
                            <li key={name}>
                              <span>{val}</span> {name}
                            </li>
                          ))}
                        </ul>
                      </li>
                    )
                  }
                  return console.warn(`Unspecified location: ${code}`)
                })}
            </ul>
          </div>
        </div>

        <div className={s.map__footer}>
          <Button
            href="#endpoints"
            onClick={(e) => handleScroll(e, 'endpoints')}
          >
            Explore Solana RPC endpoints
          </Button>
        </div>
      </Window>
    </Container>
  )
}

export default Map
