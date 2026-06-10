import { useCallback, useEffect, useState } from 'react'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Experience } from './components/Experience.jsx'
import { Skills } from './components/Skills.jsx'
import { Footer } from './components/Footer.jsx'
import { useLanguage } from './i18n/LanguageContext.jsx'

export default function App() {
  const { lang } = useLanguage()
  const [aboutRevealed, setAboutRevealed] = useState(false)

  const revealAbout = useCallback(() => {
    setAboutRevealed(true)
  }, [])

  useEffect(() => {
    const revealOnScroll = () => {
      if (window.scrollY > 48) {
        setAboutRevealed(true)
      }
    }

    const revealOnHash = () => {
      if (window.location.hash === '#about') {
        setAboutRevealed(true)
      }
    }

    revealOnHash()
    window.addEventListener('scroll', revealOnScroll, { passive: true })
    window.addEventListener('hashchange', revealOnHash)

    return () => {
      window.removeEventListener('scroll', revealOnScroll)
      window.removeEventListener('hashchange', revealOnHash)
    }
  }, [])

  return (
    <div className="app" lang={lang}>
      <Header onAboutClick={revealAbout} />
      <main>
        <Hero />
        <About revealed={aboutRevealed} />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
