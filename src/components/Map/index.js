import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'

import { API_KEYS } from '~api'

import { handleScroll } from '~utils'

import Window from '../Window'

import { SWITCHER, GROUPS, LOCATIONS, NODE_SIZE } from './constants'

import * as s from './Map.module.scss'

const Map = () => {
  const {
    isSuccess,
    // isLoading,
    // isError,
    data,
    // refetch,
    // isRefetching,
  } = useQuery([API_KEYS.NODES, { params: { limit: 5000, format: 'json' } }])

  const [type, setType] = useState(SWITCHER[0].key)

  const handleSwitch = (key) => setType(key)

  const nodes =
    isSuccess &&
    data
      .filter(({ kind }) => (type === 'rpc' ? kind === 'rpc' : true))
      .reduce((acc, item) => {
        const key = item.asn_info.country.alpha2.toLowerCase()
        const groupedKey = GROUPS[key] || key
        acc[groupedKey] = {
          kind: item.kind,
          value: (acc[groupedKey]?.value || 0) + 1,
        }
        return acc
      }, {})

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
    <Container as="section" className={s.map}>
      <h2>Map of Solana nodes and public RPC endpoints</h2>
      <Window
        title="Map of Solana nodes and public RPC endpoints"
        variant="map"
      >
        <div className={s.map__topbar}>
          <div
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
          </div>
          {nodes && (
            <div className={s.map__info}>
              <div className={cn('btn-sm', s.counter)}>
                <span>{data?.length}</span>
              </div>
              <span className={s.divider} />
              <div className={s.map__stat}>
                <div className={s.map__stat_item}>
                  <b>
                    {isSuccess && data.filter((n) => n.kind === 'rpc').length}
                  </b>{' '}
                  RPC nodes
                </div>
                <div className={s.map__stat_item}>
                  <b>
                    {isSuccess &&
                      data.filter((n) => n.kind === 'validator').length}
                  </b>{' '}
                  validator nodes
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={s.map__canvas}>
          <ul className={s.points}>
            {nodes &&
              Object.entries(nodes).map(([code, { kind, value }]) => {
                const size = getNodeSize(value)
                const coords = LOCATIONS[code].map(
                  (c) => `${c - NODE_SIZE[size] / 2}px`
                )

                return (
                  <li
                    className={cn(s.point, [s[size]], {
                      [s.black]: Math.random() < 0.5,
                      [s.hide]: type === 'rpc' && kind !== 'rpc',
                    })}
                    style={{
                      // top: LOCATIONS[code][1],
                      // left: LOCATIONS[code][0],
                      transform: `translate(${coords.toString()})`,
                    }}
                    data-country={code}
                  >
                    {value}
                  </li>
                )
              })}
          </ul>
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
