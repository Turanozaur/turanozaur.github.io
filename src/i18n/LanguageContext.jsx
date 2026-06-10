import { createContext, useContext, useEffect, useState } from 'react'
import { en } from './en.js'
import { ru } from './ru.js'
import { applyDocumentLang, getStoredLang, persistLang } from './language.js'

const translations = { en, ru }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getStoredLang)

  useEffect(() => {
    applyDocumentLang(lang)
    persistLang(lang)
  }, [lang])

  const value = {
    lang,
    setLang,
    t: translations[lang],
  }

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
