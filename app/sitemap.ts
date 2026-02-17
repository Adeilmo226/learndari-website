import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://learndari.com'

  const vocabCategories = [
    'colors', 'animals', 'food', 'fruit', 'vegetables',
    'body', 'days-of-the-week', 'seasons', 'weather',
    'transportation', 'numbers', 'greetings',
  ]

  const levels = ['level-1', 'level-2', 'level-3', 'level-4', 'level-5']

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/learn`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/vocab`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/explore`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/more`, lastModified: new Date(), priority: 0.5 },
    { url: `${baseUrl}/more/about`, lastModified: new Date(), priority: 0.5 },
    { url: `${baseUrl}/more/culture`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/more/proverbs`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/more/word-of-the-day`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), priority: 0.3 },
  ]

  const vocabPages: MetadataRoute.Sitemap = vocabCategories.flatMap((category) => [
    { url: `${baseUrl}/vocab/${category}`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/vocab/${category}/flashcards`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/vocab/${category}/quiz`, lastModified: new Date(), priority: 0.7 },
  ])

  const learnPages: MetadataRoute.Sitemap = levels.flatMap((level) => [
    { url: `${baseUrl}/learn/${level}`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/learn/${level}/flashcards`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/learn/${level}/quiz`, lastModified: new Date(), priority: 0.7 },
  ])

  return [...staticPages, ...vocabPages, ...learnPages]
}
