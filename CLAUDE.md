# brendans-portfolio

McCue Studio — personal portfolio and web services site.

## Stack
Next.js 16 · TypeScript · Tailwind CSS 4 · GraphQL (graphql-request) · Vitest

## Structure (`src/`)
```
src/app/layout.tsx          root layout, metadata
src/app/page.tsx            hero, projects, testimonials, pricing, FAQ, contact
src/app/globals.css         theme — iOS frosted glass (backdrop-filter: blur + semi-transparent bg)
src/components/             modular page sections
src/lib/                    GraphQL client, utilities
src/__tests__/              Vitest + React Testing Library
```

## Commands
```
npm run dev      start dev server
npm run build    production build
npm run test     run tests (vitest run)
npm run lint     eslint
```

## Notes
- Theme: iOS frosted glass aesthetic
- No snap scrolling (removed)
