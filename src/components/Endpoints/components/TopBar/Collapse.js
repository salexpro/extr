/* eslint-disable camelcase */
import React, { useState } from 'react'
import cn from 'classnames'
import { Form, Collapse as BootstrapCollapse } from 'react-bootstrap'

import {
  mobilefilters__button,
  selected,
  mobilefilters__collapse,
} from './TopBar.module.scss'

const Collapse = ({ fkey, data, label, handleResetFilter, handleFilter }) => {
  const [open, setOpen] = useState(null)

  const filterValues = data && Object.values(data)

  const isSelected = filterValues.some((v) => v)

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={cn(mobilefilters__button, { [selected]: isSelected })}
      >
        {label}
      </button>
      <BootstrapCollapse in={open}>
        <div>
          <div className={mobilefilters__collapse}>
            {data && (
              <>
                <Form.Check
                  type="checkbox"
                  id={`mfilter-${label}-all`}
                  label="All"
                  checked={filterValues.every((v) => !v)}
                  onChange={() => handleResetFilter(fkey)}
                />
                {Object.entries(data)
                  .sort()
                  .map(([name, val]) => (
                    <Form.Check
                      key={name}
                      type="checkbox"
                      id={`mfilter-${label}-${name}`}
                      label={name}
                      checked={val}
                      onChange={() => handleFilter(fkey, name)}
                    />
                  ))}
              </>
            )}
          </div>
        </div>
      </BootstrapCollapse>
    </div>
  )
}

export default Collapse
