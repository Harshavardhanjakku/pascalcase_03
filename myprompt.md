I also curated the top open-source Tailwind component libraries to use as source material (copy-paste-ready). ([ui.shadcn.com][1], [flowbite.com][2], [HyperUI][3], [GitHub][4], [headlessui.com][5])

---

# Quick priorities (one-liner)

1. Build a design system (tokens: colors, spacing, radii, shadows, type).
2. Implement accessible, keyboard-friendly **NavigationMenu + Sheet (mobile drawer)** and **theme switcher** (dark black glass UI default, seamless light mode).
3. Ship Hero → Product Grid → Product Pages → Blog → Footer; use shadcn/ui + Flowbite/HyperUI components as canonical implementations.
4. Apply glassmorphism consistently (cards, nav, modal) tuned for dark theme but automatically invert/soften for light theme.
5. Add performance, SEO, a11y, tests and Lighthouse/axe fixes.

---

# Recommended component stacks (top sources to copy/paste from)

Use these open-source, Tailwind-first libraries as your canonical component sources and reference implementations: **shadcn/ui**, **Flowbite**, **HyperUI**, **daisyUI**, **Headless UI**. These contain accessible, copy-paste components and templates you can drop into a Next.js + Tailwind app. ([ui.shadcn.com][1], [flowbite.com][2], [HyperUI][3], [GitHub][4], [headlessui.com][5])

---

# Stage-by-stage plan (Nav → Footer) — what to build, how, and why

> Use this plan as checklist items for each sprint. Each stage includes immediate UX, code, and QA tasks.

### Stage 0 — Project bootstrap (deliverable: runnable repo)

- Stack: **Next.js 14**, **TypeScript**, **Tailwind CSS (v4)**, `next/font` for fonts, `shadcn/ui` + `@radix-ui` primitives, `framer-motion` for motion, optional `flowbite` blocks for marketing sections.
- Repo skeleton: `/app` (Next 14 app router), `/components`, `/lib/theme`, `/styles`, `/public/assets`, `/data`.
- Add eslint, Prettier, husky (pre-commit), vitest/jest, Playwright/Cypress for end-to-end.
- Tailwind config: central `theme.extend` tokens (colors, spacing, radii, shadows, fonts). (See sample config later.)

### Stage 1 — Design system + Theme engine (deliverable: tokens + theme provider)

- Create tokens (Tailwind theme.extend): `colors.brand`, `colors.accent`, `colors.surface`, `neutral`, `glass` variants with alpha.
- Color palette (dark-first):
  - `--bg-900` (page background): `#050607` (very near-black)
  - `--bg-800` (section surface): `#0b0f12`
  - `--text-100` (primary): `#E6EEF2`
  - `--muted` (secondary): `#98A2B3`
  - `--accent` (brand yellow): `#FFC542` (use sparingly)
  - `--accent-2` (cyan for links): `#06B6D4`
  - glass overlays: `rgba(255,255,255,0.04)` (dark), `rgba(255,255,255,0.06)`

- Light-theme tokens: tuned invert with `--bg-50: #FFFFFF`, `--text-900: #0B1220`, accent same but stronger border.
- Theme switches stored in `localStorage` and `prefers-color-scheme` respected. Provide `data-theme="dark|light"` at `<html>` root.
- Typography: Inter or Plus Jakarta Sans for UI; variable font loaded with `next/font`.
- Spacing & radii: 8pt scale; `rounded-lg` for small elements, `rounded-2xl` for cards, `rounded-3xl` for modals.
- Accessibility in tokens: ensure color tokens meet WCAG AA for body text; test contrast.

**Deliverable:** `tailwind.config.js` + `ThemeProvider` (`lib/theme.tsx`) and a tokens JSON.

### Stage 2 — Global shell & accessibility (deliverable: header/footer stubs + a11y baseline)

- Add landmarks: `<header>`, `<nav>`, `<main id="content">`, `<footer>`.
- Global features: `Skip to content`, focus-visible outlines, `prefers-reduced-motion` handling, `font-display: swap` via `next/font`.
- Accessibility checks: axe/lighthouse baseline report and a11y checklist items in repo.

### Stage 3 — Navigation (desktop mega + mobile drawer)

**Goal:** keyboard-perfect, ARIA-rich nav with mega menu on desktop and off-canvas sheet on mobile.

- Desktop: **NavigationMenu** (shadcn/ui) with grouped columns: _Product apps_, _Platform tools_, _Resources_, _Company_. Each menu item: title, 1-line description, icon, CTA (Docs / AppSource / Edge).
- Mobile: Sheet (off-canvas slide-in) with grouped nav, sign-in, theme switcher and sticky footer actions (Chat on Microsoft Teams).
- Search: instant search bar (typeahead) with keyboard navigation + clear button.
- Current-page: `aria-current="page"` on active link.
- Keyboard support: roving tabindex, `aria-expanded`, `aria-controls` on toggles, focus trap for sheet/dialogs.
- Sticky header: uses backdrop (glass) with `backdrop-blur-sm`, translucent background and down-scroll hide / up-show behavior.
- Action items: Theme toggle, shortcut to “Download Metadata Browser” and “Commission 365”.

**Suggested classes:** header glass wrapper — `backdrop-blur-sm bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] shadow-sm`.

**Deliverable:** `components/NavBar.tsx` + `components/MobileSheet.tsx` (shadcn/ui + radix)

### Stage 4 — Hero & Above-the-fold

**Goal:** Clear value proposition, badge for “8k+ downloads”, primary CTA (Chat on Microsoft Teams), secondary CTA (View Products).

- Hero layout: left text + right device mockup. Use `max-w-prose` for copy and `grid` for layout.
- CTAs: primary (solid accent with icon), secondary (ghost/outline). Add accessible `aria-label`s.
- Microcopy: include trust signals (8k+ downloads) as badge chip near H1.
- LCP optimization: hero image via `next/image` (AVIF/WebP), use `priority` for hero image.

**Deliverable:** `components/Hero.tsx`

### Stage 5 — Product Grid & Product Detail Cards

**Goal:** Scannable product list: Metadata Browser, Commission 365, AI Autocloser, Flow Monitor etc.

- Product card content: icon/svg, title, 2–3 bullets, tags (Free / AppSource / Edge), 2 CTAs (Download / More Info), kebab menu for per-card actions (View docs, Demo, GitHub).
- Grid: responsive 1 → 2 → 3 columns with consistent `gap-6`.
- Accessibility: buttons with `aria-haspopup` for kebab menu, `aria-label`, and keyboard nav.
- Download buttons: show progress/toast using `Toast` component and accessible status announcements for screen readers.

**Deliverable:** `components/ProductCard.tsx`, `pages/products/[slug]/page.tsx`

### Stage 6 — Customers & Logo Cloud

- Use `role="list"` and `role="listitem"` for logos. Prefer vector (SVG) logos, `loading="lazy"`, `decoding="async"`. Responsive `srcset`.
- Provide a logo-cloud component with grayscale + hover color reveal.

**Deliverable:** `components/LogoCloud.tsx`

### Stage 7 — Industry Modules / Feature Grid

- Bento-like cards with prominent icons (lucide-react), single-sentence value prop, CTA to product page or contact.
- Add “persona” CTA blocks (Admin, Sales Ops, IT) with tailored copy/links.

**Deliverable:** `components/IndustryGrid.tsx`

### Stage 8 — How It Works / Timeline / Onboarding Stepper

- Timeline for onboarding (Install → Configure → Go-live).
- Stepper (interactive) with keyboard support and aria-live updates.
- Use `framer-motion` for step transitions; respect `prefers-reduced-motion`.

**Deliverable:** `components/Timeline.tsx`, `components/Stepper.tsx`

### Stage 9 — Blog & Content Hub

- Blog listing: cards with category pill, author, read time, hover lift and image zoom. Use `@tailwindcss/typography` for article pages.
- Filters: segmented control for categories (Power Pages, Dataverse, Azure, Dynamics 365).
- Implement `getStaticProps` for index and incremental static regeneration for freshness.

**Deliverable:** `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`

### Stage 10 — Footer, Legal, Contact & Newsletter

- Footer: 4 columns (Products, Solutions, Resources, Company), newsletter input (accessible label + error states), social links (labeled).
- Add cookie + consent banner (toast) and simple analytics consent flow.

**Deliverable:** `components/Footer.tsx`

### Stage 11 — Overlays: Modals, Toasts, Alerts, Forms

- Use shadcn/ui Dialog for modal flows (download confirmations, contact form), `Toast` for ephemeral actions.
- Contact forms: use `aria-describedby`, inline errors, client + server validation, reCAPTCHA optional.
- Add multi-step forms for licensing/demo requests.

**Deliverable:** Dialog/Toast components + Contact form endpoints.

### Stage 12 — Performance, SEO, Tests & Launch

- Image optimization (`next/image`), fonts via `next/font`, code-splitting dynamic imports for heavy components (carousels, charts).
- Lighthouse target: ≥90 mobile & desktop; fix CLS, LCP, TBT.
- Add meta tags, Open Graph, Twitter Card.
- Run accessibility (`axe`), keyboard-only & high-zoom tests.
- E2E smoke tests for critical CTA flows (download, contact).

**Deliverable:** Audit report + CI that runs tests & Lighthouse checks.

---

# Glassmorphism & theme rules (practical, copy/paste)

- **Dark glass card (primary):**

  ```html
  <div
    class="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-[6px]"
  >
    ...
  </div>
  ```

- **Light glass card (auto when `data-theme="light"`):**

  ```html
  <div
    class="rounded-2xl border border-[rgba(15,23,42,0.06)] bg-white/6 shadow-[0_6px_18px_rgba(2,6,23,0.06)] backdrop-blur-[6px]"
  >
    ...
  </div>
  ```

- Guidelines:
  - Keep alpha levels low on dark backgrounds (0.02–0.08) to avoid washed-out text.
  - Use soft borders with the same hue as the surface but slightly lighter/darker.
  - Use `backdrop-filter: blur()` for depth; do not overuse — limit to cards and header/footer.
  - All glass pieces must have sufficient contrast for contained text — add an inner faint overlay if needed.

---

# Motion & animation standards

- Small micro-interactions: 150ms ease-out (hover lifts, button press).
- Entrance animations: 240–360ms spring with stagger (Framer Motion).
- Respect `prefers-reduced-motion` (no motion if set).
- Example Tailwind utilities: `transition-transform duration-150 ease-out motion-safe:transform motion-reduce:transition-none`.

---

# Accessibility (non-negotiable)

- Landmarks: `<main id="content">` and a skip link.
- Nav: `aria-expanded`, `aria-controls`, roving tabindex for menus.
- Dialogs/sheets: focus trap & return focus on close.
- Announcements: aria-live regions for async notifications (downloads, toasts).
- Contrast: run color tokens through contrast checker — maintain ≥4.5:1 for body text.
- Forms: explicit `<label>`, `aria-invalid`, `aria-describedby`.
- Keyboard: tab order, 48px target friendly, visible focus states.

---

# Example Tailwind tokens (sample `tailwind.config.js` fragment)

```js
// tailwind.config.js (excerpt)
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff8e6',
          500: '#FFC542',
          700: '#FFB800',
        },
        bg: {
          900: '#050607',
          800: '#0b0f12',
        },
        text: {
          100: '#E6EEF2',
          300: '#98A2B3',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(2,6,23,0.6)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
```

---

# Deliverable & output format I expect from the AI builder (copy into your AI)

Below is the **single, copy-paste prompt** you asked for. Paste it into the AI/code generator (or give it to a dev) and **it should output a runnable Next.js 14 + TypeScript project** with everything requested (components, config, sample pages, assets, tests). I included explicit file paths, component names, style rules, and accessibility requirements so the AI can autonomously produce high-quality code.

---

### ✅ Single-paste master prompt (paste this into your AI/code-generator)

```
You are a senior frontend engineer. Build a production-ready Next.js 14 + TypeScript website for "Pascalcase" using Tailwind CSS (v4) and the recommended Tailwind component libraries (shadcn/ui, Flowbite, HyperUI, daisyUI, Headless UI) as canonical component sources. The site must be dark-first (near-black) with an elegant glassmorphism UI, and must include a fully accessible, keyboard-first theme switcher that supports both dark and light themes. Deliver a runnable repository with the structure, components, pages, styles, and tests described below. Use `next/image` for images and `next/font` for fonts.

Project skeleton:
- `app/` (Next 14 app router)
- `app/layout.tsx` (root layout, ThemeProvider)
- `app/page.tsx` (home)
- `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`
- `components/`:
  - `NavBar.tsx`, `MobileSheet.tsx`, `Hero.tsx`, `ProductCard.tsx`, `ProductGrid.tsx`, `LogoCloud.tsx`, `IndustryGrid.tsx`, `Timeline.tsx`, `Stepper.tsx`, `BlogCard.tsx`, `Footer.tsx`, `Modal.tsx`, `Toast.tsx`, `ThemeToggle.tsx`, `SearchBar.tsx`
- `lib/theme.tsx`, `lib/analytics.ts`
- `styles/globals.css` (Tailwind imports + base)
- `tailwind.config.js` (use tokens and sample extend shown below)
- `tests/` (vitest/jest + Playwright or Cypress for E2E)
- `package.json` with scripts: dev, build, start, lint, test, e2e, audit

Design system & tokens:
- Use an 8-pt spacing scale and consistent radii: `rounded-lg`, `rounded-2xl`, `rounded-3xl`.
- Colors (dark-first): `--bg-900: #050607`, `--bg-800: #0b0f12`, `--text-100: #E6EEF2`, `--muted: #98A2B3`, `--accent: #FFC542`, `--accent-2: #06B6D4`. Glass overlay alphas: 0.02–0.08 on dark.
- Light mode tokens provided and automatically applied when `data-theme="light"` on `<html>`.
- Provide `tailwind.config.js` `theme.extend` for the tokens and include `@tailwindcss/forms` and `@tailwindcss/typography`.

Accessibility requirements (must pass axe basic checks):
- Add a visible skip link to `#content`.
- Provide `aria-expanded`, `aria-controls`, `role="navigation"` on NavBar, and `aria-current="page"` for active links.
- All icons with interactive behavior must have `aria-label` or an adjacent label.
- Dialogs and off-canvas sheets must trap focus and restore focus on close.
- Keyboard-only navigation works for Nav, menu, kebab actions, and search.
- Respect `prefers-reduced-motion`: no motion if user prefers reduced motion.

Performance & SEO:
- Use `next/image` with AVIF/WebP and `priority` on hero assets.
- Fonts via `next/font` with `display: swap`.
- Code-split heavy libraries (charts, carousels) using `dynamic` imports.
- Provide Open Graph and Twitter meta tags for pages.
- Preconfigured Lighthouse + axe run in CI.

Component-level specs (explicit):
1. **NavBar**:
   - Desktop: `NavigationMenu` style mega menu (grouped columns: Products, Tools, Resources, Company). Each item: title, 1-line description, small icon. Use shadcn/ui NavigationMenu and Radix primitives.
   - Mobile: Slide-in `Sheet` with groups, CTAs, and theme toggle; trap focus while open.
   - Sticky header uses glass: `backdrop-blur-sm bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]`.
   - Include SearchBar with keyboard navigation and typeahead.

2. **Hero**:
   - Left: H1, short paragraph (max 60–75ch), badge "8k+ downloads", primary CTA (Chat on Microsoft Teams) + secondary CTA (View Products).
   - Right: device mockup image (next/image) with lazy load and `priority` for LCP.

3. **ProductGrid**:
   - Cards: icon (SVG), title, 2 bullets, tags (AppSource/Edge/Free), two CTAs (Download, More Info), kebab menu (Docs, Demo, GitHub).
   - Kebab uses `DropdownMenu` (shadcn/ui) and accessible keyboard controls.

4. **LogoCloud**:
   - `role="list"`, SVG logos, lazy, grayscale-to-color on hover.

5. **IndustryGrid**:
   - Bento-style cards for Marketing, Customer Service, Field Service, Sales with big icons and single-line value prop.

6. **Timeline / Stepper**:
   - Vertical timeline for onboarding and a horizontal stepper (interactive) for setup. Use motion-safe staggered animations; respect reduced-motion.

7. **Blog**:
   - Card grid with category pill, author, read time, hover lift (translateY -4px, scale 1.02), image zoom. Article pages use `@tailwindcss/typography`.

8. **Footer**:
   - 4 columns, newsletter (label + inline validation + success state toast), social links with labels.

9. **Modals / Toasts / Alerts**:
   - Accessible Dialog with focus-trap and `aria-labelledby`, `aria-describedby`. Toast announcements via aria-live region.

Glassmorphism rules:
- Dark glass: `backdrop-blur-[6px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]`.
- Light glass: `backdrop-blur-[6px] bg-white/6 border border-[rgba(15,23,42,0.06)]`.
- Use glass for header, product cards, dialogs; keep contrast for text inside glass using small inner overlays if needed.

Animation rules:
- Micro: 150ms ease-out; entrance: 240–360ms spring with stagger.
- Respect `prefers-reduced-motion`.

Testing & CI:
- Unit tests for critical components with vitest/jest.
- E2E tests for main flows (Nav → Download, Hero CTA → Chat, Contact form submit) with Playwright or Cypress in CI.
- Add `yarn test:axe` (axe-core) and `yarn audit:lighthouse` to pipeline.

Deliverables:
- A runnable repo with the components above, sample data for products & blog posts, a working Theme toggle, and a README that explains how to run, build, test, and deploy.
- A short `DESIGN_TOKENS.md` listing all tokens and rationale.
- Lighthouse report and axe baseline in `reports/`.

Use the following libraries for reference and copy/paste-ready components: **shadcn/ui**, **Flowbite**, **HyperUI**, **daisyUI**, **Headless UI** — prioritize shadcn/ui for interactive primitives and Flowbite/HyperUI for marketing blocks. (Use official docs and GitHub examples to copy accessible markup and adapt it into the Next.js project.)

Output format:
1. Create the repository tree and fill in critical files (`app/layout.tsx`, `components/*`, `tailwind.config.js`, `package.json`) with working code.
2. Provide `README.md` with run/build/test instructions and component list.
3. Provide at least one automated test and one Lighthouse/axe report.
4. Zip the final project and provide a download link, or show file diffs and code blocks for all main files in the response.

Make sure every single interactive control has accessible labels and keyboard handlers, the site respects reduced motion and keyboard navigation, images are optimized, and components follow the glass UI design while remaining fully functional in a light theme as well.

```

---

# Final notes

- If you want, I can now:
  1. generate the `tailwind.config.js` + `ThemeProvider` + `NavBar` + `Hero` components as a copy-paste code bundle for Next.js 14 (TypeScript), or
  2. produce a smaller starter repo zip (components + config) you can drop in and run.

Which of the two would you like me to produce right now? (I’ll generate the code immediately in this chat.)

[1]: https://ui.shadcn.com/?utm_source=chatgpt.com 'The Foundation for your Design System - shadcn/ui'
[2]: https://flowbite.com/?utm_source=chatgpt.com 'Flowbite - Build websites even faster with components on top of ...'
[3]: https://hyperui.dev/?utm_source=chatgpt.com 'HyperUI: Free Open Source Tailwind CSS v4 Components'
[4]: https://github.com/saadeghi/daisyui?utm_source=chatgpt.com 'saadeghi/daisyui: The most popular, free and open ... - GitHub'
[5]: https://headlessui.com/?utm_source=chatgpt.com 'Headless UI - Unstyled, fully accessible UI components'
