import { getEntry } from 'astro:content';

export const languages = ['en', 'zh-cn'] as const;
export const defaultLang = 'en';
export type Language = (typeof languages)[number];

// Get base path from Astro's BASE_URL env variable
const basePath = import.meta.env.BASE_URL?.replace(/^\//, '').replace(/\/$/, '') || '';

// Helper to build URL with base path
export function buildUrl(path: string): string {
  const base = basePath ? `/${basePath}` : '';
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

export function getLangFromUrl(url: string): Language {
  // URL format: /basePath/lang/...
  const segments = url.split('/').filter(Boolean);

  // Find language segment after base path
  const startIndex = basePath ? segments.indexOf(basePath) + 1 : 0;
  const langSegment = segments[startIndex];

  if (languages.includes(langSegment as Language)) {
    return langSegment as Language;
  }
  return defaultLang;
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: Language = lang) {
    return buildUrl(`/${l}/${path}`);
  };
}

export function getAlternateUrl(currentUrl: string, targetLang: Language): string {
  const segments = currentUrl.split('/').filter(Boolean);
  const currentLang = getLangFromUrl(currentUrl);

  // Find the language segment index
  const langIndex = basePath ? segments.indexOf(basePath) + 1 : 0;

  // Replace language at the correct position
  if (segments[langIndex] && languages.includes(segments[langIndex] as Language)) {
    segments[langIndex] = targetLang;
  }

  return '/' + segments.join('/');
}

export async function getTranslations(lang: Language) {
  const entry = await getEntry('i18n', `${lang}/ui`);
  return entry?.data;
}