import { useEffect } from 'react'

const useClickOutside = (refs, onClick) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (refs.every((ref) => ref.current && !ref.current.contains(e.target))) {
        onClick()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClick, refs])
}

export default useClickOutside
