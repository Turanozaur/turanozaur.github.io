const LANG_STORAGE_KEY = 'lang'

export function getStoredLang() {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY)
    if (stored === 'en' || stored === 'ru') {
      return stored
    }
  } catch {}
  return 'en'
}

export function persistLang(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang)
  } catch {}
}

export function applyDocumentLang(lang) {
  document.documentElement.lang = lang
}
