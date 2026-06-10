import { useEffect, useRef, useState } from 'react'
import { useHeaderMetrics } from '../hooks/useHeaderMetrics.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { getScrollGapPx, scrollToPageY } from '../shared/lib/scroll.js'
import { ThemeToggle } from './ThemeToggle.jsx'

export function Header({ onAboutClick }) {
  const { t, lang, setLang } = useLanguage()
  const headerRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useHeaderMetrics(headerRef)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 767) {
        closeMenu()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen])

  const scrollToSection = (event, sectionId, { revealAbout = false } = {}) => {
    event.preventDefault()

    if (revealAbout) {
      onAboutClick?.()
    }

    const section = document.getElementById(sectionId)
    const header = headerRef.current
    if (!section || !header) return

    const top =
      section.getBoundingClientRect().top + window.scrollY - header.offsetHeight - getScrollGapPx()
    scrollToPageY(top)
    window.history.pushState(null, '', `#${sectionId}`)
    closeMenu()
  }

  const scrollToTop = (event) => {
    event.preventDefault()
    scrollToPageY(0)
    window.history.pushState(null, '', window.location.pathname)
    closeMenu()
  }

  const handleLangChange = (nextLang) => {
    setLang(nextLang)
    closeMenu()
  }

  return (
    <header ref={headerRef} className={`header${menuOpen ? ' is-menu-open' : ''}`}>
      <div className="container header__inner">
        <a href="#" className="logo" onClick={scrollToTop}>
          {t.meta.name}
        </a>

        <nav id="site-nav" className="nav" aria-label={t.nav.ariaLabel}>
          <a
            href="#about"
            onClick={(event) => scrollToSection(event, 'about', { revealAbout: true })}
          >
            {t.nav.about}
          </a>
          <a href="#experience" onClick={(event) => scrollToSection(event, 'experience')}>
            {t.nav.experience}
          </a>
          <a href="#skills" onClick={(event) => scrollToSection(event, 'skills')}>
            {t.nav.skills}
          </a>
          <a href="#contact" onClick={(event) => scrollToSection(event, 'contact')}>
            {t.nav.contact}
          </a>
        </nav>

        <div className="header__end">
          <ThemeToggle />

          <div className="lang-switch" role="group" aria-label={t.nav.langLabel}>
            <button
              type="button"
              className={lang === 'en' ? 'lang-switch__btn is-active' : 'lang-switch__btn'}
              onClick={() => handleLangChange('en')}
            >
              EN
            </button>
            <span className="lang-switch__sep">/</span>
            <button
              type="button"
              className={lang === 'ru' ? 'lang-switch__btn is-active' : 'lang-switch__btn'}
              onClick={() => handleLangChange('ru')}
            >
              RU
            </button>
          </div>

          <button
            type="button"
            className="header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="header__menu-icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
