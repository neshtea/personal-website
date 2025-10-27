export const translations = {
  de: {
    nav: {
      about: 'Über mich',
      publications: 'Publikationen',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    home: {
      hello: 'Hallo, ich bin',
      intro: 'Eine kurze Einleitung über dich. Was du machst, wofür du dich interessierst und was Besucher auf dieser Seite erwarten können.',
      recentPosts: 'Neueste Beiträge',
      viewAll: 'Alle Beiträge ansehen',
    },
    about: {
      title: 'Über mich',
      interests: 'Interessen',
    },
    contact: {
      title: 'Kontakt',
      intro: 'Ich freue mich von dir zu hören. Du kannst mich über diese Kanäle erreichen:',
      email: 'E-Mail',
      social: 'Social Media',
    },
    publications: {
      title: 'Publikationen & Vorträge',
      publications: 'Publikationen',
      talks: 'Vorträge',
    },
    blog: {
      title: 'Blog',
      backToAll: 'Zurück zu allen Beiträgen',
    },
    footer: {
      rss: 'RSS Feed',
    },
  },
  en: {
    nav: {
      about: 'About',
      publications: 'Publications',
      blog: 'Blog',
      contact: 'Contact',
    },
    home: {
      hello: 'Hello, I\'m',
      intro: 'A brief introduction about yourself. What you do, what you\'re interested in, and what visitors can expect to find on this site.',
      recentPosts: 'Recent Posts',
      viewAll: 'View all posts',
    },
    about: {
      title: 'About Me',
      interests: 'Interests',
    },
    contact: {
      title: 'Get in Touch',
      intro: 'I\'d love to hear from you. Feel free to reach out through any of these channels:',
      email: 'Email',
      social: 'Social',
    },
    publications: {
      title: 'Publications & Talks',
      publications: 'Publications',
      talks: 'Talks',
    },
    blog: {
      title: 'Blog',
      backToAll: 'Back to all posts',
    },
    footer: {
      rss: 'RSS Feed',
    },
  },
} as const;

export type Locale = keyof typeof translations;

export function useTranslations(locale: Locale) {
  return translations[locale];
}