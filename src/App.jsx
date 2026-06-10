import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Experience } from './components/Experience.jsx'
import { Skills } from './components/Skills.jsx'
import { Footer } from './components/Footer.jsx'
import { useOverscrollBackground } from './hooks/useOverscrollBackground.js'
import { useLanguage } from './i18n/LanguageContext.jsx'

export default function App() {
  const { lang } = useLanguage()

  useOverscrollBackground()

  return (
    <div className="app" lang={lang}>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
