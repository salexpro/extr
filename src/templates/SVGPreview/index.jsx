import React from 'react'

import SEO from '~components/seo'

import SVGSprite from './components/SVGSprite'

import * as s from './SVGPreview.module.scss'

export const Head = () => <SEO title="SVG Preview" />

/**
 * SVGPreview component
 */
const SVGPreview = () => {
  return (
    <div className={s.svgPreview}>
      <SVGSprite className={s.table} />
    </div>
  )
}

export default SVGPreview
