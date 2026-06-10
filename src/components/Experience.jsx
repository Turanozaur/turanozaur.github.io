import { useLanguage } from '../i18n/LanguageContext.jsx'

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section__title section__title--soft">{t.experience.title}</h2>
        <div className="card-list">
          {t.experience.items.map((item) => (
            <article key={`${item.company}-${item.period}`} className="card">
              <div className="card__top">
                <div>
                  <p className="card__company">{item.company}</p>
                  <h3 className="card__role">{item.role}</h3>
                </div>
                <span className="card__period">{item.period}</span>
              </div>
              {item.description && (
                <p className="card__text">
                  {item.website
                    ? item.description.split('{link}').map((part, index, parts) => (
                        <span key={`${item.company}-desc-${index}`}>
                          {part}
                          {index < parts.length - 1 && (
                            <a
                              className="card__link"
                              href={item.website.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {item.website.label}
                            </a>
                          )}
                        </span>
                      ))
                    : item.description}
                </p>
              )}
              {item.bullets && (
                <ul className="card__bullets">
                  {item.bullets.map((bullet, index) => (
                    <li key={`${item.company}-bullet-${index}`}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
