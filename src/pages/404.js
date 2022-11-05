import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

import RouteURL from '~routes'

const NotFoundPage = () => {
  useEffect(() => {
    navigate(RouteURL.HOMEPAGE)
  }, [])

  return <div />
}

export default NotFoundPage
