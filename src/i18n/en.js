export const en = {
  meta: {
    name: 'Ivan Turanin',
  },
  nav: {
    ariaLabel: 'Main navigation',
    homeLabel: 'Back to top',
    langLabel: 'Language',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
  },
  theme: {
    dark: 'Dark theme',
    light: 'Light theme',
  },
  about: {
    title: 'About',
    text:
      'Frontend developer with 6+ years of commercial experience. Core stack: TypeScript, React, Vue. Also experienced in full-stack development using Node.js, Python, and PHP. I design and develop SPAs, web applications, and REST APIs, work on service integrations, performance optimization, and GitLab CI for frontend builds and deployments. Participated in the development of fintech products, internal services, and microservice-based solutions. Actively use AI tools to accelerate development.',
    hobbies:
      'Outside of work, I enjoy BASE jumping, rock climbing, and other sports, including marathons and ultramarathons. I\'m also interested in film photography, music, and spending time in nature.',
    photoAlt: 'Ivan Turanin',
  },
  hero: {
    label: 'Frontend Developer',
    title: [
      { t: 'I build reliable digital products, ', m: true },
      { t: 'designing and shipping web ', m: true },
      { t: 'applications ', m: false },
      { t: 'with a focus on clarity, ', m: true },
      { t: 'performance ', m: false },
      { t: 'and ', m: true },
      { t: 'maintainable code', m: false },
    ],
    cta: 'Download CV',
  },
  experience: {
    title: 'Experience',
    items: [
      {
        period: 'Apr 2023 — Jan 2026',
        role: 'Frontend Engineer',
        company: 'Freedom Pay',
        bullets: [
          'Led frontend performance optimization of payment widgets embedded in iframes on client websites, reducing bundle size by ~40% and load time by ~30% through selective UI Kit imports, dependency cleanup, and replacing heavyweight libraries with lightweight in-house utilities',
          'Improved static asset delivery by configuring nginx gzip compression and cache-control headers, reducing transferred asset size by ~50%',
          'Designed and built a new payment page frontend in React from the ground up with a minimal dependency set, optimized for fast load and maintainability',
          'Built a payment aggregator for SMBs in Central Asia end-to-end: Node.js (Express) backend, React frontend, and integration with existing company products',
          'Across multiple frontend projects, implemented i18n workflows with Traduora, automating translation exports during deployment and enabling marketing teams to update localized content without developer involvement',
          'Contributed to the development, refactoring, and maintenance of the company\'s UI Kit',
          'Worked with GitLab CI on frontend projects: extended jobs and country-specific build stages, diagnosed and resolved build and deployment issues, and contributed to payment aggregator deployment',
          'Investigated and resolved production incidents while refactoring and optimizing existing services',
        ],
      },
      {
        period: 'May 2021 — Mar 2023',
        role: 'Frontend Developer',
        company: 'Sberbank-Technology',
        bullets: [
          'Developed frontend for the Letters of Credit module in SberBusiness, a B2B banking platform for corporate clients',
          'Built complex multi-step UI flows for trade finance workflows using React and Redux',
          'Contributed to the company\'s internal npm package ecosystem, including shared UI components and utilities',
          'Integrated frontend modules with backend services via REST APIs in a large enterprise codebase',
          'Participated in refactoring and modernization of legacy frontend code (architecture, state management, component structure)',
        ],
      },
      {
        period: 'Jun 2020 — Oct 2020',
        role: 'Fullstack Developer',
        company: 'Vector M8',
        description:
          'Designed, developed, and deployed the company website {link} from the ground up. Responsible for the entire development lifecycle, including backend, frontend, database design, deployment, and maintenance.',
        website: { href: 'https://vectorm8.ru/', label: 'vectorm8.ru' },
        bullets: [
          'Tech stack: Node.js (Express), Handlebars, MongoDB, HTML5, CSS3, Nginx',
        ],
      },
    ],
  },
  skills: {
    title: 'Skills',
    categories: {
      frontend: 'Frontend & UI',
      backend: 'Backend & Data',
      devops: 'DevOps & Infrastructure',
      tools: 'Tools & Workflow',
    },
  },
  contact: {
    title: "Let's talk",
    subtitle: 'Interested in new opportunities and meaningful projects.',
    email: 'ivanturanin2@gmail.com',
    emailCopy: 'Copy',
    emailCopied: 'Copied!',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ivanturanin', icon: 'linkedin' },
      { label: 'GitHub', href: 'https://github.com/Turanozaur', icon: 'github-light' },
      { label: 'Telegram', href: 'https://t.me/ITuranin', icon: 'telegram' },
      { label: 'WhatsApp', href: 'https://wa.me/77474382236', icon: 'whatsapp' },
    ],
  },
  footer: {
    copyright: '© 2026 Ivan Turanin',
  },
}
