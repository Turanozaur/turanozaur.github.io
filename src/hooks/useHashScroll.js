import { useEffect } from 'react'
import { navigateToSection, SECTION_IDS } from '../shared/lib/scroll.js'

export function useHashScroll() {
  useEffect(() => {
    const handleHash = () => {
      const id = window.location.hash.slice(1)
      if (SECTION_IDS.includes(id)) {
        navigateToSection(id)
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)

    return () => {
      window.removeEventListener('hashchange', handleHash)
    }
  }, [])
}
