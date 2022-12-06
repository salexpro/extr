import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

/* eslint-disable import/prefer-default-export */
const handleScroll = (event, targetId, timeout = 0) => {
  event.preventDefault()
  setTimeout(
    () => gsap.to(window, { scrollTo: `#${targetId}`, ease: 'power2' }),
    timeout
  )
}

export { handleScroll }
