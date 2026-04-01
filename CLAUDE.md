# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js)
npm run build    # Production build
npm run lint     # ESLint
```

## Stack

- **Next.js 16** (App Router) — React 19, TypeScript
- **Tailwind CSS v4** — uses `@import 'tailwindcss'`, no `tailwind.config.js`
- **shadcn/ui** — components in `components/ui/`
- **Animations** — `gsap` and `framer-motion` are both installed
- **Email** — Resend via `app/api/contact/route.ts`
- **Analytics** — Vercel Analytics + Speed Insights

## Architecture

### Routing & Layouts

`app/layout.tsx` is the root layout. It wraps everything in `ThemeProvider` (next-themes, dark mode via `.dark` class) and `LanguageProvider`. It renders the global `<Navbar>` and `<Footer>` outside of `{children}`, so they appear on every page.

The only nested layout is `app/cobros/layout.tsx`, which uses `CobranzaThemeProvider` (a client component in `app/cobros/theme-provider.tsx`) to set `data-theme="cobros"` on `document.documentElement` on mount and removes it on unmount. This makes the green color theme affect the global Navbar and Footer when on `/cobros`.

Pages: `/`, `/services`, `/portfolio`, `/faq`, `/contact`, `/planilla`, `/cobros`.

### Theming

CSS variables are defined in `app/globals.css` using `oklch()` colors:
- `:root` — light theme
- `.dark` — dark theme
- `html[data-theme="cobros"]` — green override for the cobros product page
- `@theme inline` block maps `--color-*` to `var(--*)` for Tailwind v4

**Critical:** Tailwind v4 compiles utility classes against `--color-primary`, not `--primary`. When overriding theme colors for a page, always set both `--primary` and `--color-primary` in the CSS rule.

### i18n

All UI text lives in `lib/i18n.ts` as a `translations` object with `es` and `en` keys. The `LanguageContext` (`context/language-context.tsx`) provides `{ t, locale, toggleLocale }`. Use `useLanguage()` in any client component to access translations. The cobros page components are currently hardcoded in Spanish (they don't use the i18n system).

### Component Organization

- `components/` — global components (Navbar, Footer, Hero, etc.)
- `components/ui/` — shadcn/ui primitives + custom UI components
- `components/cobranza/` — isolated components only used in `/cobros` (Hero, Features, HowItWorks, CTA, Footer)

The cobros page has its own footer (`components/cobranza/footer.tsx`) rendered inside `app/cobros/page.tsx`, separate from the global footer.

### Contact API

`app/api/contact/route.ts` handles form submissions. It uses:
- In-memory rate limiting (3 req/60s per IP)
- Honeypot field (`website`) for bot detection
- Resend to send both a user confirmation and an admin notification email

Required env vars: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_RECIPIENT_EMAIL`.
