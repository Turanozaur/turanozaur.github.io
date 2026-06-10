const THEME_STORAGE_KEY = 'theme'

export function getStoredThemePreference() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') {
      return stored
    }
  } catch {}
  return null
}

export function applyThemePreference(preference) {
  const root = document.documentElement

  if (preference === 'light' || preference === 'dark') {
    root.dataset.theme = preference
  } else {
    root.removeAttribute('data-theme')
  }
}

export function persistThemePreference(preference) {
  if (preference !== 'light' && preference !== 'dark') {
    return
  }

  try {
    localStorage.setItem(THEME_STORAGE_KEY, preference)
  } catch {}
}

export function getResolvedTheme(preference) {
  if (preference === 'light' || preference === 'dark') {
    return preference
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
