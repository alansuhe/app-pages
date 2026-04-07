# Apps Hub

A unified website for desktop applications, serving as:
- Landing page / Official portal
- Release / Update center
- Download entry point
- FAQ, Privacy Policy, Terms pages

Currently focusing on macOS desktop applications, especially **All My AI**.

## Tech Stack

- **Astro** - Static site framework
- **TypeScript** - Type safety
- **Content Collections** - Content management (apps, changelog, FAQ)
- **GitHub Pages** - Deployment

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## GitHub Pages Deployment

This site is configured for GitHub Pages deployment via GitHub Actions.

### Configuration

- **Site**: `https://alansuhe.github.io`
- **Base**: `/apps-hub-github-pages`
- **Output**: Static HTML

### Deployment Process

1. Push to `main` branch
2. GitHub Actions automatically builds and deploys
3. Site available at: `https://alansuhe.github.io/apps-hub-github-pages/`

### Migrating to Custom Domain

To use a custom domain:
1. Update `astro.config.mjs`:
   - Change `site` to your domain (e.g., `https://yourdomain.com`)
   - Remove `base` configuration
2. Configure DNS settings
3. Update GitHub Pages custom domain setting

## Multi-Language Support

The site supports:
- **English** (`/en/`)
- **简体中文** (`/zh-cn/`)

### Default Language
English is the default language. Root path `/` redirects to `/en/`.

### Language Switching
Click the language switcher in the header (EN / 中文) to toggle between languages. It attempts to navigate to the same page in the alternate language.

### Adding a New Language

1. Add locale to `astro.config.mjs`:
   ```js
   i18n: {
     locales: ['en', 'zh-cn', 'fr'], // add new locale
   }
   ```

2. Create translation file: `src/content/i18n/<lang>/ui.json`

3. Create content files for each collection:
   - `src/content/apps/<lang>/...`
   - `src/content/changelog/<lang>/...`
   - `src/content/faq/<lang>/...`

4. Create page directory: `src/pages/<lang>/`

5. Update Header component for the new language label.

## Adding a New App

1. Create app content files:
   - `src/content/apps/en/<slug>.json`
   - `src/content/apps/zh-cn/<slug>.json`

2. Content file structure:
   ```json
   {
     "title": "App Name",
     "slug": "app-name",
     "tagline": "Short description",
     "description": "Full description",
     "platforms": ["macos"],
     "status": "coming-soon",
     "icon": "",
     "heroImage": ""
   }
   ```

3. The app will automatically appear in:
   - Homepage app list
   - Apps page (`/en/apps/`, `/zh-cn/apps/`)
   - App detail page (`/en/apps/<slug>/`)
   - Download page (`/en/download/<slug>/`)

## Adding Changelog Entry

1. Create changelog files for each language:
   - `src/content/changelog/en/<app>-<version>.md`
   - `src/content/changelog/zh-cn/<app>-<version>.md`

2. File structure:
   ```markdown
   ---
   app: "app-slug"
   version: "1.0.0"
   date: 2025-01-15
   summary: "Brief summary"
   published: true
   ---
   
   ## New Features
   - Feature 1
   - Feature 2
   
   ## Fixes
   - Fix 1
   ```

## Project Structure

```
src/
├── components/       # UI components
│   ├── Header.astro
│   ├── Footer.astro
│   └── AppCard.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro           # Redirect to /en/
│   ├── en/                   # English pages
│   └── zh-cn/                # Chinese pages
├── content/
│   ├── config.ts             # Collection schemas
│   ├── apps/                 # App info by language
│   ├── changelog/            # Updates by language
│   ├── faq/                  # FAQ by language
│   └── i18n/                 # UI translations
├── i18n/
│   └── utils.ts              # Language utilities
└── styles/
    └── global.css
public/
└── favicon.svg
.github/workflows/
└ └ deploy.yml                # CI/CD configuration
```

## Content to Add

- [ ] Brand logo and favicon
- [ ] Product screenshots / hero images
- [ ] Real download links when available
- [ ] Mac App Store links when available
- [ ] Complete changelog content
- [ ] More FAQ entries

## License

Content in this repository is proprietary. Code structure may be referenced for similar projects.