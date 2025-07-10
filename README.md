# Next.js with Internationalization (next-intl)

This is a [Next.js](https://nextjs.org/) project with internationalization support using [next-intl](https://next-intl-docs.vercel.app/).

## Features

- 🌍 **Internationalization**: Support for English (en) and Turkish (tr) languages
- 🚀 **Next.js 15**: Built with the latest Next.js App Router
- ⚡ **TypeScript**: Full TypeScript support
- 🎨 **Tailwind CSS**: Modern styling with Tailwind CSS
- 🔄 **Language Switching**: Easy language switching with URL-based routing

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── [locale]/          # Locale-specific pages
│   │   ├── layout.tsx     # Locale layout with NextIntlClientProvider
│   │   └── page.tsx       # Home page with translations
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Redirect to default locale
├── mes/               # Translation files
│   ├── en.json           # English translations
│   └── tr.json           # Turkish translations
├── i18n.ts               # Internationalization configuration
├── middleware.ts         # Locale routing middleware
└── next.config.ts        # Next.js configuration with next-intl
```

## Available Languages

- **English (en)**: Default language
- **Turkish (tr)**: Secondary language

## URL Structure

- `/` - Redirects to `/en` (default locale)
- `/en` - English version
- `/tr` - Turkish version

## Adding New Languages

1. Add the new locale to the `messages` array in `i18n.ts`
2. Create a new translation file in `messages/[locale].json`
3. Update the middleware matcher if needed

## Adding New Translations

1. Add new keys to all language files in the `messages/` directory
2. Use the `useTranslations()` hook in your components
3. Access translations with `t('key.subkey')`

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
