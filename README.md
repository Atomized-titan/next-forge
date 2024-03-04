# Introducing Next Forge

Dive into the future of web development with the Next Forge template with internationalization support using `next-intl`, a cutting-edge starter kit for Next.js 14+, crafted to elevate your projects right from the start. Featuring a sophisticated app router, the sleek [shadcn/ui](https://github.com/shadcn) integration, bulletproof typesafe environments, and an array of preconfigured icons and settings, this template is your gateway to a streamlined development process.

## Getting Started

Kickstart your project effortlessly using one of the following commands, tailored to your preferred package manager:

- For **pnpm** users:

```bash
pnpm create next-app -e https://github.com/Atomized-titan/next-forge
```

- For **npm** enthusiasts:

```bash
npx create-next-app -e https://github.com/Atomized-titan/next-forge
```

- For those who prefer **Yarn**:

```bash
yarn create next-app -e https://github.com/Atomized-titan/next-forge
```

- And for **Bun** users:

```bash
bunx create-next-app -e https://github.com/Atomized-titan/next-forge
```

After cloning the template, ensure to set up your environment variables:

```bash
cp .env.example .env.local
```

The internationalization setup with `next-intl` is preconfigured for type-safe, global content management. Simply edit the `@lib/locale.ts` to add more languages as needed:

```bash
export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
```

Then, manage your localized content in the `messages` folder by adding or updating the `en.json`, `es.json`, etc., ensuring all languages stay in sync.

## Features

Leverage the full potential of [shadcn/ui](https://ui.shadcn.com/), an advanced Next.js app structure that harmonizes perfectly with the following features:

- Next.js 14+ `/app` router
- TypeScript integration for typesafe coding and internationalization
- Tailwind CSS for modern, responsive designs
- shadcn/ui components built on Radix UI and Tailwind
- Prettier setup with automatic sorting for imports and Tailwind classes
- SEO optimization out of the box
- Typesafe environment, icons, and configuration presets
- A ready-to-use foundation to jumpstart your development, with best practices for internationalization

## Scripts

Adapt the following scripts as needed for your package manager of choice to maintain your project's code quality:

1. To check your project's formatting:

```bash
yarn format:check
```

2. To format your project:

```bash
yarn format
```
