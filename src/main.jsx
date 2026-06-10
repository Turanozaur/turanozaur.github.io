import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import { ThemeProvider } from './theme/ThemeContext.jsx'
import './index.css'
import { syncOverscrollBackground } from './hooks/useOverscrollBackground.js'
import { resetPageScrollOnLoad, stripHashFromUrl } from './shared/lib/scroll.js'

stripHashFromUrl()
resetPageScrollOnLoad()

syncOverscrollBackground()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
