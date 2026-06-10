import { useEffect } from 'react'
import { getScrollGapPx } from '../shared/lib/scroll.js'

export function useHeaderMetrics(headerRef) {
  useEffect(() => {
    const header = headerRef.current
    if (!header) return undefined

    const syncHeaderHeight = () => {
      const { offsetHeight } = header
      const scrollOffset = offsetHeight + getScrollGapPx()
      document.documentElement.style.setProperty('--header-height', `${offsetHeight}px`)
      document.documentElement.style.setProperty('--scroll-offset', `${scrollOffset}px`)
    }

    syncHeaderHeight()

    const observer = new ResizeObserver(syncHeaderHeight)
    observer.observe(header)
    window.addEventListener('resize', syncHeaderHeight)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', syncHeaderHeight)
    }
  }, [headerRef])
}
