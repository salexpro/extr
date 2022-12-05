import React from 'react'
import { Container } from 'react-bootstrap'

import Window from '../Window'

import * as s from './Map.module.scss'

const Map = () => {
  return (
    <Container as="section" className={s.map}>
      <h2>Map of Solana nodes and public RPC endpoints</h2>
      <Window
        title="Map of Solana nodes and public RPC endpoints"
        variant="map"
      >
        {/* dsd */}
      </Window>
    </Container>
  )
}

export default Map
