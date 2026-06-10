import { createContext, useContext, useEffect, useState } from 'react'
import {
  applyThemePreference,
  getResolvedTheme,
  getStoredThemePreference,
  persistThemePreference,
} from './theme.js'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [preference, setPreference] = useState(getStoredThemePreference)
  const [resolvedTheme, setResolvedTheme] = useState(() => getResolvedTheme(getStoredThemePreference()))

  useEffect(() => {
    applyThemePreference(preference)
    persistThemePreference(preference)
    setResolvedTheme(getResolvedTheme(preference))
  }, [preference])

  useEffect(() => {
    if (preference !== null) {
      return undefined
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      applyThemePreference(null)
      setResolvedTheme(getResolvedTheme(null))
    }

    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [preference])

  const value = {
    resolvedTheme,
    setTheme: setPreference,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
