import React from 'react'
import { Placeholder } from 'react-bootstrap'

const P = () => {
  return (
    <tr>
      <td>
        <Placeholder as="div" animation="glow">
          <Placeholder style={{ width: 170 }} />
          <span style={{ display: 'inline-block', width: 10 }} />
          <Placeholder as="div" style={{ width: 24, height: 24 }} />
        </Placeholder>
      </td>
      <td>
        <Placeholder as="div" animation="glow">
          <Placeholder style={{ width: 90 }} />
        </Placeholder>
      </td>
      <td>
        <Placeholder as="div" animation="glow">
          <Placeholder style={{ width: 250 }} />
          <br />
          <Placeholder style={{ width: 210 }} />
          <br />
          <Placeholder style={{ width: 160 }} />
          <br />
          <Placeholder style={{ width: 180 }} />
        </Placeholder>
      </td>
      <td>
        <Placeholder as="div" animation="glow">
          <Placeholder style={{ width: 110 }} />
        </Placeholder>
      </td>
      <td className="table__provider">
        <Placeholder as="div" animation="glow">
          <Placeholder style={{ width: 140 }} />
        </Placeholder>
      </td>
      <td>
        <Placeholder as="div" animation="glow">
          <Placeholder style={{ width: 60 }} />
        </Placeholder>
      </td>
      <td>
        <Placeholder as="div" animation="glow">
          <Placeholder style={{ width: 50 }} />
        </Placeholder>
      </td>
    </tr>
  )
}

export default P
