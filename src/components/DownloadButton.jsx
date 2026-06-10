import { useLanguage } from '../i18n/LanguageContext.jsx'

const pdfByLang = {
  en: '/ivan_turanin_frontend_2026.pdf',
  ru: '/ivan_turanin_frontend_2026_ru.pdf',
}

function DownloadIcon() {
  return (
    <svg className="btn__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 4v10M8.5 10.5 12 14l3.5-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function DownloadButton({ className = 'btn btn--dark' }) {
  const { lang, t } = useLanguage()

  return (
    <a
      className={className}
      href={pdfByLang[lang]}
      download
      aria-label={t.hero.cta}
    >
      <span className="btn__label">{t.hero.cta}</span>
      <DownloadIcon />
    </a>
  )
}
