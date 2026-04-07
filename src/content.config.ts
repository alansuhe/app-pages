import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Apps collection - application info by language
const apps = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/apps',
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    tagline: z.string(),
    description: z.string(),
    platforms: z.array(z.enum(['macos', 'windows', 'linux'])),
    status: z.enum(['available', 'coming-soon', 'beta']),
    primaryCta: z.string().optional(),
    downloadPath: z.string().optional(),
    icon: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

// Changelog collection - version updates by language
const changelog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/changelog',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    app: z.string(),
    version: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    published: z.boolean().default(true),
  }),
});

// FAQ collection - frequently asked questions by language
const faq = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/faq',
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number(),
    published: z.boolean().default(true),
  }),
});

// i18n collection - UI translations by language
const i18n = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/i18n',
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: z.object({
    nav: z.object({
      home: z.string(),
      apps: z.string(),
      changelog: z.string(),
      faq: z.string(),
      privacy: z.string(),
      terms: z.string(),
    }),
    footer: z.object({
      copyright: z.string(),
      rights: z.string(),
    }),
    common: z.object({
      download: z.string(),
      learnMore: z.string(),
      viewChangelog: z.string(),
      availablePlatforms: z.string(),
      comingSoon: z.string(),
      beta: z.string(),
      version: z.string(),
      released: z.string(),
    }),
    apps: z.object({
      allApps: z.string(),
      featuredApps: z.string(),
    }),
    download: z.object({
      downloadNow: z.string(),
      directDownload: z.string(),
      appStore: z.string(),
      platformSupport: z.string(),
      currentVersion: z.string(),
      requirements: z.string(),
    }),
    changelog: z.object({
      latestUpdates: z.string(),
      allUpdates: z.string(),
      filterByApp: z.string(),
    }),
    faqPage: z.object({
      title: z.string(),
      description: z.string(),
    }),
    legal: z.object({
      lastUpdated: z.string(),
    }),
  }),
});

export const collections = {
  apps,
  changelog,
  faq,
  i18n,
};