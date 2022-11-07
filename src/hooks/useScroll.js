import { useState, useEffect, useCallback } from 'react'

const useScroll = () => {
  const isDoc = typeof document !== 'undefined'
  const [state, setState] = useState({
    lastScrollTop: 0,
    bodyOffset: isDoc ? document.body.getBoundingClientRect() : 0,
    scrollY: isDoc ? document.body.getBoundingClientRect().top : 0,
    scrollX: isDoc ? document.body.getBoundingClientRect().left : 0,
    scrollDirection: '', // down, up
  })

  const handleScrollEvent = useCallback(() => {
    setState((prevState) => {
      const prevLastScrollTop = prevState.lastScrollTop
      const bodyOffset = document.body.getBoundingClientRect()

      return {
        setBodyOffset: bodyOffset,
        scrollY: -bodyOffset.top,
        scrollX: bodyOffset.left,
        scrollDirection: prevLastScrollTop > -bodyOffset.top ? 'down' : 'up',
        lastScrollTop: -bodyOffset.top,
      }
    })
  }, [])

  useEffect(() => {
    const scrollListener = (e) => {
      handleScrollEvent(e)
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [handleScrollEvent])

  useEffect(() => handleScrollEvent(), [])

  return {
    scrollY: state?.scrollY,
    scrollX: state?.scrollX,
    scrollDirection: state?.scrollDirection,
  }
}

export default useScroll
