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

export function resolveTheme(preference = getStoredThemePreference()) {
  if (preference === 'light' || preference === 'dark') {
    return preference
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyTheme(preference = getStoredThemePreference()) {
  const resolved = resolveTheme(preference)
  document.documentElement.dataset.theme = resolved
  return resolved
}

export function saveThemePreference(preference) {
  if (preference !== 'light' && preference !== 'dark') {
    return
  }

  try {
    localStorage.setItem(THEME_STORAGE_KEY, preference)
  } catch {}
}
