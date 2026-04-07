/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE: string;
  readonly BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}