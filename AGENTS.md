# AGENTS.md

Guidance for coding agents working in this repository.

## Commands

- **Dev**: `npm run dev` (uses Turbopack)
- **Build**: `npm run build` (static export to `out/`)
- **Lint**: `npm run lint` (ESLint with next/core-web-vitals)

No test framework is configured. Use `npm run build` to check that changes compile and that every blog/project page renders.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `out/` to GitHub Pages (custom domain set in `public/CNAME`). Anything committed to `master` goes live.

## Architecture

Next.js 15 App Router site, statically exported (`output: 'export'` in `next.config.js`). Because of the static export, there are no API routes, no server runtime, and no dynamic rendering. Every dynamic route must implement `generateStaticParams`.

**Routes:**
- `/` (`src/app/page.tsx`): the portfolio, a single scrollable page with anchor navigation (`#electronics`, `#ai`, `#fullstack`). The sections are Header, JigsawSection, ElectronicsSection, AIMLSection, and FullStackSection.
- `/blog` and `/blog/[slug]`: blog posts read from `src/content/blog/*.mdx`.
- `/project/[slug]`: long-form project pages read from `src/content/projects/*.mdx`. Only a placeholder exists so far.

**Home page:**
- `page.tsx` is a client component, so all of its sections run in the browser. They use Intersection Observer, Typed.js, and Three.js.
- Project data is hardcoded as arrays inside each section component.
- 3D models (`.glb` files in `public/3d/`) are rendered with React Three Fiber, and their animations start when they scroll into view, via `useFrame`.
- ProjectCard uses a seeded PRNG (`mulberry32`) so the random lighting effects stay the same on every render.
- Scroll-reveal transitions use the `transition-hidden` → `show` classes, which the Intersection Observer in `page.tsx` toggles. Those classes, the keyframe animations, and the small-screen media queries (600px, 440px) live in `src/app/FrontPageStyle.css`.

**Blog and project content:**
- `src/lib/blog.ts` and `src/lib/projects.ts` read the MDX files with `gray-matter`. The filename (minus `.mdx`) is the slug.
- Blog frontmatter: `title`, `date` (`"YYYY-MM-DD"`, which also sets the sort order, newest first), `excerpt`. Project frontmatter: `title`, `excerpt`.
- `src/app/blog/MdxArticle.tsx` renders both blogs and projects with `next-mdx-remote/rsc` and `rehype-pretty-code` (Shiki, `github-light` theme). It also sets the shared prose styling.
- MDX components available in posts: `LightboxImage` (also used for every Markdown image), `ExpandableCard`, and `PlaygroundEmbed` (an iframe for embedding a static web app). To make a new component available, add it to the `components` map in `MdxArticle.tsx`.
- Each post's static assets go in `public/blogs/<slug>/` and are referenced by absolute path (e.g. `/blogs/<slug>/image.png`). URL-encode spaces in filenames.

**Path alias:** `@/*` maps to `./src/*`.

**Styling:** Tailwind CSS 3 with a light green/blue theme. The page background is a gradient set in `layout.tsx`. Use the custom `apple-*` color tokens defined in `tailwind.config.js` (`apple-text`, `apple-blue`, `apple-card`, etc.) instead of raw colors. The `@tailwindcss/typography` plugin styles the MDX prose. Complex animations use CSS keyframes in `FrontPageStyle.css` rather than Tailwind.

**3D models:** `Robot.tsx`, `LCD.tsx`, and `Design.tsx` are auto-generated from GLTF files with [gltfjsx](https://github.com/pmndrs/gltfjsx). Regenerate them with gltfjsx instead of editing them by hand.

## Repository notes

- `public/blogs/*/playground/` holds prebuilt bundles from other projects. Treat them as build output and don't edit them by hand.
- `out/`, `.next/`, and `tmp/` are generated or scratch directories. Don't edit them, and don't commit them.
