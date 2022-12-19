import React, { useState } from 'react'
import { Form, Dropdown, Offcanvas } from 'react-bootstrap'
import cn from 'classnames'

import Icon from '~components/Icon'

import { isAnyFilterActive } from '../../utils'

import * as s from './TopBar.module.scss'
import Collapse from './Collapse'

const TopBar = ({
  filters,
  isLoading,
  handleFilter,
  handleResetFilter,
  handleRefresh,
  isRefetching,
  isScroll,
}) => {
  const [offcanvas, setOffcanvas] = useState(null)

  const handleFilters = () => setOffcanvas((prev) => !prev)

  return (
    <div className={cn(s.topbar, { [s.scroll]: isScroll })}>
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
                disabled={isLoading}
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
          onClick={handleFilters}
          className={cn(s.actionButton, s.actionButton__filters)}
        >
          <Icon name="icon-sliders" size={26} />
          Filters
        </button>
        <button
          type="button"
          onClick={handleRefresh}
          className={cn(s.actionButton, { [s.fetching]: isRefetching })}
          disabled={isLoading || isRefetching}
        >
          <Icon name="icon-reload" size={26} />
          <div>
            Refresh <span>results</span>
          </div>
        </button>
        <button
          type="button"
          className={s.actionButton}
          onClick={() => handleResetFilter()}
          disabled={!isAnyFilterActive(filters)}
        >
          <Icon name="icon-trash" size={26} />
          <div>
            Clear <span>filters</span>
          </div>
        </button>
      </div>

      <Offcanvas
        show={offcanvas}
        onHide={handleFilters}
        responsive="lg"
        placement="start"
        className="offcanvas--filters"
      >
        <div className={s.mobilefilters}>
          <div className={s.mobilefilters__inner}>
            {Object.entries(filters).map(([fkey, { label, data }]) => (
              <Collapse
                key={fkey}
                {...{ fkey, data, label, handleResetFilter, handleFilter }}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={handleFilters}
            className={cn(s.actionButton, s.actionButton__close)}
          >
            <Icon name="icon-cross" size={20} />
            Close
          </button>
        </div>
      </Offcanvas>
    </div>
  )
}

export default TopBar
